<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import Cookies from 'js-cookie';
    import { onMount } from 'svelte';
    import { invalidate } from '$app/navigation';
    import type { EventHandler } from 'svelte/elements';
    import type { PageData } from './$types';
    import { supabase } from '$lib/supabaseClient';

    const modalStore = getModalStore();

    function billPopUp(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'BillingForm',
        };
        modalStore.trigger(modal);
    }

    export let data:PageData;

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };

    

    interface Tenant{
        tenantID: number;
        tenantName: string;
        tenantSex: string;
        dormNo: number;
        tenantEmail: string;
        tenantPhone: number;
    }

    interface Bills{
        billID: number;
        dormNo: number;
        dateIssued: Date;
        paymentStatus: boolean;
        datePaid: Date;
        monthlyRent: number;
        waterBill: number;
        electricityBill: number;
        hutRent: number;
        visitorOvernightBill: number;
        maintenanceBill: number;
        totalBillAmount?: number;
        
    }

    interface Visitors{
        visitorID: number;
        visitorName: string;
        startDateOfVisit: Date;
        visitorRelation: string;
        tenantID: number;
        endDateOfVisit: Date;
        isApproved: boolean;
    }

    interface Maintenance{
        maintenanceID: number;
        maintenanceRequest: string;
        startDateOfMaintenance: Date;
        dormNo: number;
        endDateOfMaintenance: Date;
        isDone: boolean;
    }

    interface Room {
        dormNo: number;
        PAX: number;
        airconStatus: boolean;
        personalCrStatus: boolean;
        personalSinkStatus: boolean;
        monthlyRent: number;
        floor: number;
        roomName: string;
        // Add other columns as needed
  }
    const maxThings = 4;



    let managerName: string = '';
    let managerEmail: string = '';
    let tenantRows: Tenant[] = [];
    let billRows: Bills[] = [];
    let visitorRows: Visitors[] = [];  
    let maintenanceRows: Maintenance[] = [];
    let roomRows: Room[] = [];
    const maxBills = 4;

    function calculateTotalBillAmount(bill: Bills): number {
        return bill.monthlyRent + bill.waterBill + bill.electricityBill + bill.hutRent + bill.visitorOvernightBill + bill.maintenanceBill;
    }

    onMount(() => {
        try {
            billRows = data.bill || [];
            tenantRows = data.allTenants || [];
            visitorRows = data.visitor || [];
            maintenanceRows = data.maintenance || [];
            roomRows = data.rooms || [];
            managerName = data.user[0]?.managerName ?? '';
            managerEmail = data.user[0]?.managerEmail ?? '';
            Cookies.set('email', managerEmail);
            billRows = billRows.map(bill => ({
                ...bill,
                totalBillAmount: calculateTotalBillAmount(bill)
            }));
            
        } catch (error) {
            console.error(error);
            tenantRows = [];
            billRows = [];
        }
    });
    
    Cookies.set('email', managerEmail); 
    function handleProfile(event) {
        managerName = event.detail.managerName;
        managerEmail = event.detail.managerEmail;
  }

    
    function getYear(date: Date): number {
        return date.getFullYear();
    }
    function getMonth(date: Date): number {
        return date.getMonth() + 1; // Months are zero-based, so we add 1
    }
    const confirmPayment = async (billID: number) => {

            const { error: billError } = await supabase
                .from('Tenant Bill') 
                .update([
                {
                    paymentStatus : true,
                },
                ])
                .eq('billID', billID);

                if (billError) {
                    console.error('Error confirming payment:', billError);
                    alert('Error confirming payment');
                } 
       
       

        alert('Payment Confirmed');
        window.location.reload();
    };
    const confirmVisitor = async (visitorID: number) => {

            const { error: visitorError } = await supabase
                .from('Visitor Info') 
                .update([
                {
                    isApproved : true,
                },
                ])
                .eq('visitorID', visitorID);

                if (visitorError) {
                    console.error('Error confirming visit:', visitorError);
                    alert('Error confirming visit');
                } 
       
       

        alert('Visit Confirmed');
        window.location.reload();
    };
    const confirmMaintenance = async (maintenanceID: number) => {

            const { error: maintenanceError } = await supabase
                .from('Maintenance Info') 
                .update([
                {
                    isDone: true,
                },
                ])
                .eq('maintenanceID', maintenanceID);

                if (maintenanceError) {
                    console.error('Error marking maintenance done:', maintenanceError);
                    alert('Error marking maintenance done');
                } 
       
       

        alert('Maintenance Done');
        window.location.reload();
    };
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <Profile on:modalOpen={handleProfile} {managerName} {managerEmail} />

            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-br from-primary-400 to-secondary-700 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-2 max-lg:pb-0 text-surface-50">Released Bills</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-2 py-6 lg:px-4 lg:py-10 text-surface-800">
                {#each billRows.slice(0, 4) as billRow}
                    {#if !billRow.paymentStatus}
                        <div class="snap-start shrink-0 w-72 max-sm:w-60 card card-hover overflow-hidden shadow bg-white">
                        {#each roomRows as roomRow}    
                            {#if roomRow.dormNo === billRow.dormNo}
                                <div class="p-4 pb-0 min-h-28">
                                    <div class="flex m-auto justify-between">
                                        <div class="block">
                                            <h4 class="h4 font-semibold">Room {roomRow.roomName} – {billRow.dateIssued}</h4>
                                            <h2 class="h2 tracking-tight font-bold pb-1">₱{billRow.totalBillAmount}</h2>
                                            <p class="text-sm text-surface-400">{#each tenantRows as tenantRow}    {#if tenantRow.dormNo === billRow.dormNo}{tenantRow.tenantName}, {/if}{/each}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex p-4 float-right">
                                    <button on:click={() => { confirmPayment(billRow.billID) }} class="btn btn-sm variant-filled-success text-white self-end">Confirm Payment</button>
                                </div>
                            {/if}
                        {/each}
                        </div>
                    {/if}
                {/each}
                    
                </div>
            </div>

            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-br from-secondary-600 to-tertiary-700 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-2 max-lg:pb-0 text-surface-50">Visitor Requests</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-2 py-6 lg:px-4 lg:py-10 text-surface-800">
                {#each visitorRows as visitorRow}
                    {#if !visitorRow.isApproved}
                        <div class="snap-start shrink-0 w-72 max-sm:w-60 card card-hover overflow-hidden shadow bg-white">
                            <div class="p-4 pb-0 min-h-36">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        {#each tenantRows as tenantRow}
                                            {#if tenantRow.tenantID === visitorRow.tenantID}
                                                <h4 class="h4 text-2 xl font-bold tracking-tight">{tenantRow.tenantName}</h4>
                                                <p class="text-base pb-1">Visitor: {visitorRow.visitorName}, {visitorRow.visitorRelation}</p>
                                                <p class="text-sm text-surface-400">Room {#each roomRows as roomRow}{#if roomRow.dormNo === tenantRow.dormNo}{roomRow.roomName}{/if}{/each}</p>
                                                <p class="text-sm text-surface-400">Start: {visitorRow.startDateOfVisit}</p>
                                            <p class="text-sm text-surface-400">End: {visitorRow.endDateOfVisit}</p>
                                            {/if}
                                        {/each}
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 float-right">
                                <button on:click={() => { confirmVisitor(visitorRow.visitorID) }} class="btn btn-sm variant-filled-success text-white self-end">Confirm</button>
                            </div>
                
                        </div>
                    {/if}
                {/each}
                    
                </div>
            </div>
            
            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-br from-tertiary-700 to-surface-400 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-2 max-lg:pb-0 text-surface-50">Maintenance Requests</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-2 py-6 lg:px-4 lg:py-10 text-surface-800">
                    {#each maintenanceRows as maintenanceRow}
                        {#if !maintenanceRow.isDone}
                        <div class="snap-start shrink-0 w-72 max-sm:w-60 card card-hover overflow-hidden shadow bg-white">
                            <div class="p-4 pb-0 min-h-28">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        {#each roomRows as roomRow} {#if roomRow.dormNo === maintenanceRow.dormNo}<h4 class="h4 text-2 xl font-bold tracking-tight">Room {roomRow.roomName}</h4>{/if}{/each}
                                        <p class="text-sm text-surface-400">{maintenanceRow.maintenanceRequest}</p>
                                        <p class="text-sm text-surface-400">Start: {maintenanceRow.startDateOfMaintenance}</p>
                                        <p class="text-sm text-surface-400">End: {maintenanceRow.endDateOfMaintenance}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 float-right">
                                <button on:click={() => { confirmMaintenance(maintenanceRow.maintenanceID) }} class="btn btn-sm variant-filled-success text-white self-end">Mark Maintenance Done</button>
                            </div>
                        </div>
                        {/if}
                    {/each}
                </div>
            </div>

            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

        </div>
    </header>
</div>