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
    let tenantName: string = '';
    let tenantEmail: string = '';
    let currentTenantRows: currentTenant[] = [];
    let billRows: Bills[] = [];
    let otherTenantRows: otherTenants[] = [];
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
            roomRows = data.rooms || [];
            tenantName = data.user?.tenantName ?? '';
            tenantEmail = data.user?.tenantEmail ?? '';
            Cookies.set('email', tenantEmail);
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

    
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <TenantHeader {logout} />
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <Profile on:modalOpen={handleProfile} {tenantName}/>

            <hr class="mt-10 mb-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h1 class="h1 text-4xl pb-6 font-bold">Roommates</h1>
            <div class="col-span-4 grid grid-cols-11  md:grid-cols-7 gap-4 text-surface-800">
                {#each otherTenantRows as otherTenantRow}
                        {#if otherTenantRow.tenantID === currentTenantRows.tenantID}
                            <!-- Do nothing -->
                        {:else}
                            <div class="col-span-2 card card-hover overflow-hidden shadow bg-white">
                                <div class="p-4">
                                    <div class="flex m-auto justify-between">
                                        <div class="block">
                                            <h4 class="h4 pb-2 font-semibold tracking-tight">{otherTenantRow.tenantName}</h4>
                                            <p class="text-sm text-surface-400">{otherTenantRow.tenantPhone}<br>{otherTenantRow.tenantEmail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/if}
                {/each}
            </div>
            
            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div class="bg-gradient-to-br variant-gradient-secondary-tertiary p-9 rounded-3xl text-surface-50">
                <h1 class="h1 font-bold pb-8">Latest Bills</h1>
                
                    <div class="col-span-4 grid 2xl:grid-cols-4 xl:grid-cols-2 gap-4 text-surface-800">
                        {#each billRows.slice(0, maxBills) as billRow}
                            <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                                <div class="flex m-auto justify-between">
                                    <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">{billRow.dateIssued}</h3>
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
                                    <table class="table table-hover bg-surface-50">
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

            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        </div>
    </header>
</div>