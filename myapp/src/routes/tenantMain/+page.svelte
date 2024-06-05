<script lang="ts">
	import TenantHeader from '$lib/tenant/headerTenant.svelte';
    import Aside from '$lib/tenant/asideTenant.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/tenant/profileTenant.svelte';
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';
    import { invalidate } from '$app/navigation';
    import type { EventHandler } from 'svelte/elements';
    import type { PageData } from './$types';
    import { supabase } from '$lib/supabaseClient';

    export let data:PageData;

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };

    interface currentTenant{
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
    interface otherTenants{
        tenantID: number;
        tenantName: string;
        tenantSex: string;
        dormNo: number;
        tenantEmail: string;
        tenantPhone: number;
    }
    interface Availability {
        dormNo: number;
        availability: boolean;
        availableSlots: number;
        preexistingTenants: number;
        // Add other columns as needed
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
    let tenantName: string = '';
    let tenantID: string = '';
    let tenantEmail: string = '';
    let tenantRoom: string = '';
    let currentTenantRows: currentTenant[] = [];
    let availRows: Availability[] = [];
    let billRows: Bills[] = [];
    let otherTenantRows: otherTenants[] = [];
    let visitorRows: Visitors[] = [];
    let maintenanceRows: Maintenance[] = [];
    let roomRows: Room[] = [];
    const maxBills = 4;
    function calculateTotalBillAmount(bill: Bills): number {
        return bill.monthlyRent + bill.waterBill + bill.electricityBill + bill.hutRent + bill.visitorOvernightBill + bill.maintenanceBill;
    }
    function getThreeLetterMonth(month: number): string {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[month];
    }

    onMount(() => {
        try {
            currentTenantRows = data.user || [];
            billRows = data.bill || [];
            otherTenantRows = data.allTenants || [];
            visitorRows = data.visitor || [];
            maintenanceRows = data.maintenance || [];
            roomRows = data.rooms || [];
            availRows = data.availability || [];
            tenantName = data.user?.tenantName ?? '';
            tenantRoom = data.user?.dormNo ?? '';
            tenantEmail = data.user?.tenantEmail ?? '';
            tenantID = data.user?.tenantID ?? '';
            Cookies.set('email', tenantEmail);
            Cookies.set('dormNo', tenantRoom);
            Cookies.set('tenantID', tenantID);
            billRows = billRows.map(bill => ({
                ...bill,
                totalBillAmount: calculateTotalBillAmount(bill)
            }));
            
        } catch (error) {
            console.error(error);
            currentTenantRows = [];
            billRows = [];
            otherTenantRows = [];
        }
    });
      function handleProfile(event) {
      tenantName = event.detail.tenantName;
    }

    Cookies.set('email', tenantEmail);
    const setAvailability = async (availability: boolean, dormNo: number) => {
        console.log(availability);
        console.log(dormNo)
        
        if (availability){
            const { error: availError } = await supabase
                .from('Availability')
                .update({availability: false})
                .eq('dormNo', dormNo);

                if (availError) {
                    console.error('Error deleting application:', availError);
                    alert('Error deleting application');
                } 
        }
        else if(!availability){
            const { error: availError } = await supabase
                .from('Availability')
                .update({availability: true})
                .eq('dormNo', dormNo);

                if (availError) {
                    console.error('Error deleting application:', availError);
                    alert('Error deleting application');
                } 
        }

        alert('Room availability changed');
        window.location.reload();
    };
    
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <TenantHeader {logout} />
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <Profile on:modalOpen={handleProfile} {tenantName} />

            <hr class="my-10 mb-6 max-md:my-8 max-md:mb-4 h-0.5 border-t-0 bg-neutral-100" />
            
            {#each availRows as availRow}
                {#if availRow.dormNo === currentTenantRows.dormNo}
                    {#if !availRow.availability}
                        {#each roomRows as roomRow}
                            {#if roomRow.dormNo === availRow.dormNo}
                                <div class="flex m-auto justify-between pt-4">
                                    <h1 class="h1 text-4xl font-bold">Room {roomRow.roomName} Tagged as Unavailable</h1>
                                    <button on:click={() => {setAvailability(availRow.availability, availRow.dormNo)}} class="btn text-white variant-filled-success self-center">Tag Room as Available</button>
                                </div>
                            {/if}
                        {/each}
                    {/if}
                    {#if availRow.availability}
                        {#each roomRows as roomRow}
                            {#if roomRow.dormNo === availRow.dormNo}
                                <div class="flex m-auto justify-between pt-4">
                                    <h1 class="h1 text-4xl font-bold">Room {roomRow.roomName} Tagged as Available</h1>
                                    <button on:click={() => {setAvailability(availRow.availability, availRow.dormNo)}} class="btn text-white variant-filled-error">Tag Room as Unavailable</button>
                                </div>
                            {/if}
                        {/each}
                    {/if}
                {/if}
            {/each}

            <hr class="my-10 mb-6 max-md:my-8 max-md:mb-4 h-0.5 border-t-0 bg-neutral-100" />

            <div class="flex pb-8 max-md:pb-4">
                <h1 class="h1 font-bold md:text-5xl">Roommates</h1>
            </div>
            <div class="col-span-4 grid grid-cols-6 gap-4 text-surface-800">

                {#each otherTenantRows as otherTenantRow}
                    {#if otherTenantRow.tenantID === currentTenantRows.tenantID}
                        <!-- Do nothing -->
                    {:else if otherTenantRow.dormNo === currentTenantRows.dormNo}
                        <div class="col-span-3 max-[480px]:col-span-6 max-md:col-span-6 max-sm:col-span-3 lg:col-span-2 card card-hover overflow-hidden shadow bg-white">
                            <div class="p-4">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        <h4 class="h4 pb-2 font-semibold tracking-tight">{otherTenantRow.tenantName}</h4>
                                        <p class="text-ellipsis text-sm text-surface-400">{otherTenantRow.tenantPhone}<br>{otherTenantRow.tenantEmail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/if}
                {/each}

            </div>
            
            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-br variant-gradient-secondary-tertiary p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-8 max-lg:pb-4 text-surface-50">Latest Bills</h1>
                
                    <div class="col-span-4 grid 2xl:grid-cols-4 xl:grid-cols-2 gap-4 text-surface-800">
                        {#each billRows.slice(0, maxBills) as billRow}
                            <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                                <div class="flex m-auto justify-between">
                                    <h3 class="h3 pr-3 text-3xl max-sm:text-xl font-bold tracking-tight dark:text-white">{billRow.dateIssued}</h3>
                                    {#if billRow.paymentStatus}
                                        <span class="badge variant-ghost-success px-3 self-center">Paid</span>
                                    {:else}
                                        <span class="badge variant-ghost-tertiary px-3 self-center">Unpaid</span>
                                    {/if}
                                </div>
                                
                                <div class="block pb-4">
                                    {#if billRow.paymentStatus}
                                        <p class="text-sm text-surface-400">paid {billRow.datePaid}</p>
                                    {:else}
                                        <p class="text-sm text-surface-400">pay within the month</p>
                                    {/if}
                                    
                                </div>

                                <div class="table-container">
                                    <table class="table table-hover bg-surface-50 max-sm:text-sm">
                                        <tbody>
                                            <tr>
                                                <th>Monthly Rent</th>
                                                <td>₱{billRow.monthlyRent}</td>
                                            </tr>
                                            <tr>
                                                <th>Water Bill</th>
                                                <td>₱{billRow.waterBill}</td>
                                            </tr>
                                            <tr>
                                                <th>Electricity Bill</th>
                                                <td>₱{billRow.electricityBill}</td>
                                            </tr>
                                            <tr>
                                                <th>Hut Rent</th>
                                                <td>₱{billRow.hutRent}</td>
                                            </tr>
                                            <tr>
                                                <th>Visitor Overnight Bill</th>
                                                <td>₱{billRow.visitorOvernightBill}</td>
                                            </tr>
                                            <tr>
                                                <th>Maintenance Bill</th>
                                                <td>₱{billRow.maintenanceBill}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover mt-5 bg-surface-50 max-sm:text-sm">
                                        <tfoot>
                                            <th>Calculated Bill</th>
                                            <td>₱{billRow.totalBillAmount}</td>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        {/each}

                    </div>
                
            </div>

            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
            
            <div class="bg-gradient-to-br from-secondary-600 to-tertiary-700 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-2 max-lg:pb-0 text-surface-50">Visitor Requests</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-2 py-6 lg:px-4 lg:py-10 text-surface-800">
                    {#each visitorRows as visitorRow}
                        <div class="snap-start shrink-0 w-72 max-sm:w-60 card card-hover overflow-hidden shadow bg-white">
                            <div class="p-4 pb-0">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        <h4 class="h4 text-2 xl font-bold tracking-tight">Visitor: {visitorRow.visitorName}</h4>
                                        <p class="text-sm text-surface-400">{visitorRow.visitorRelation}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="block gap-1 p-4">
                                {#if !visitorRow.isApproved}<span class="badge variant-ghost-error text-error-700 mb-1">Not Approved</span>{/if}
                                {#if visitorRow.isApproved}<span class="badge variant-ghost-success text-success-700 mb-1">Approved</span>{/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            
            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-br from-tertiary-700 to-surface-400 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 md:max-lg:text-3xl font-bold pb-2 max-lg:pb-0 text-surface-50">Maintenance Requests</h1>
                
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-2 py-6 lg:px-4 lg:py-10 text-surface-800">

                    {#each maintenanceRows as maintenanceRow}
                    <div class="snap-start shrink-0 w-72 max-sm:w-60 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    {#each roomRows as roomRow} {#if roomRow.dormNo === maintenanceRow.dormNo}<h4 class="h4 text-2 xl font-bold tracking-tight">Room {roomRow.roomName}</h4>{/if}{/each}
                                    <p class="text-sm text-surface-400">{maintenanceRow.maintenanceRequest}</p>
                                </div>
                            </div>
                        </div>

                        <div class="block gap-1 p-4">
                            {#if !maintenanceRow.isDone}<span class="badge variant-ghost-error text-error-700 mb-1">Not Done</span>{/if}
                            {#if maintenanceRow.isDone}<span class="badge variant-ghost-success text-success-700 mb-1">Done</span>{/if}
                        </div>
                    </div>
                    {/each}
                    
                </div>
                
            </div>

            <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />

        </div>
    </header>
</div>