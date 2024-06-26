<script lang="ts">
	import TenantHeader from '$lib/tenant/headerTenant.svelte';
    import Aside from '$lib/tenant/asideTenant.svelte';
    import Footer from '$lib/footer.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
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

    let billRows: Bills[] = [];
    function calculateTotalBillAmount(bill: Bills): number {
        return bill.monthlyRent + bill.waterBill + bill.electricityBill + bill.hutRent + bill.visitorOvernightBill + bill.maintenanceBill;
    }

    onMount(() => {
        try {
            billRows = data.bill || [];
            billRows = billRows.map(bill => ({
                ...bill,
                totalBillAmount: calculateTotalBillAmount(bill)
            }));
            
        } catch (error) {
            console.error(error);
            billRows = [];
        }
    });
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <TenantHeader {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Receipts</h1>
                </div>
                
                <div class="col-span-4 grid max-lg:grid-cols-1 max-xl:grid-cols-2 2xl:grid-cols-4 max-2xl:grid-cols-3 gap-4 text-surface-800">
                    {#each billRows as billRow}
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
                    
                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100" />

                <Footer />
                
            </div>
        </div>
    </header>
</div>