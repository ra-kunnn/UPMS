<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';
    
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabaseClient';
    import Cookies from 'js-cookie';
    const modalStore = getModalStore();

    function billPopUp(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'BillingForm',
        };
        modalStore.trigger(modal);
    }

    export let data:PageData;

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
    function calculateTotalBillAmount(bill: Bills): number {
        return bill.monthlyRent + bill.waterBill + bill.electricityBill + bill.hutRent + bill.visitorOvernightBill + bill.maintenanceBill;
    }
    let tenantRows: Tenant[] = [];
    let roomRows: Room[] = [];
    let billRows: Bills[] = [];
    onMount(() => {
        try {
            roomRows = data.rooms || [];
            tenantRows = data.tenants || [];
            billRows = data.bill || [];
            billRows = billRows.map(bill => ({
                ...bill,
                totalBillAmount: calculateTotalBillAmount(bill)
            }));
        } catch (error) {
            console.error(error);
            roomRows = [];
        }
    });

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };
    
    const setChosenRoom = (dormNo: number, roomName: string, monthlyRent: number) => {
        Cookies.set('dormNo', dormNo); 
        Cookies.set('roomName', roomName); 
        Cookies.set('monthlyRent', monthlyRent); 
    };
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
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex pb-8 max-md:pb-4">
                    <h1 class="h1 font-bold md:text-5xl">Issue Bills</h1>
                </div>
                
                <div class="col-span-4 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-surface-800">

                    {#each roomRows as roomRow}
                        <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                            <div class="p-4 pb-0">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        <h4 class="h4 font-bold">Room {roomRow.roomName}</h4>
                                        <h4 class="h4 font-base">Base Price: <span class="font-bold">₱{roomRow.monthlyRent}</span></h4>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 float-right">
                                <button on:click={() => {billPopUp(); setChosenRoom(roomRow.dormNo, roomRow.roomName, roomRow.monthlyRent)}} class="btn btn-sm variant-filled-success text-white self-end">Issue Bill</button>
                            </div>
                        </div>
                    {/each}
                    
                </div>

                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

                <div class="flex pb-8 max-md:pb-4">
                    <h1 class="h1 font-bold md:text-5xl">Released Bills</h1>
                </div>
                
                <div class="col-span-4 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-surface-800">
                    {#each billRows as billRow}
                        {#if !billRow.paymentStatus}
                            <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                                <div class="p-4 pb-0">
                                    <div class="flex m-auto justify-between">
                                        <div class="block">
                                            {#each roomRows as roomRow}
                                                {#if roomRow.dormNo === billRow.dormNo}
                                                    <h4 class="h4 font-semibold"><span class="h4 font-bold">Room {roomRow.roomName}</span> ({billRow.dateIssued})</h4>
                                                    <h4>Total Bill: <span class="h4 font-semibold">₱{billRow.totalBillAmount}</span></h4>
                                                {/if}
                                            {/each}
                                        </div>
                                    </div>
                                </div>

                                <div class="flex p-4 float-right">
                                    <button on:click={() => { confirmPayment(billRow.billID) }} class="btn btn-sm variant-filled-success text-white self-end">Confirm Payment</button>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>

                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
                
            </div>
        </div>
    </header>
</div>