<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    const modalStore = getModalStore();

    function assignTenants(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'AssignTenants',
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

    let roomRows: Room[] = [];
    let billRows: Bills[] = [];
    function calculateTotalBillAmount(bill: Bills): number {
        return bill.monthlyRent + bill.waterBill + bill.electricityBill + bill.hutRent + bill.visitorOvernightBill + bill.maintenanceBill;
    }

    onMount(() => {
        try {
            roomRows = data.rooms || [];
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
    <Header {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Bill History</h1>
                </div>

                <div class="table-container">
                    <table class="table table-hover bg-surface-50 md:text-xs">
                        <thead>
                            <tr class="bg-secondary-400">
                                <th class="text-center">Room</th>
                                <th class="text-center">Date</th>
                                <th class="text-center">Monthly Rent</th>
                                <th class="text-center">Water Bill</th>
                                <th class="text-center">Electricity Bill</th>
                                <th class="text-center">Hut Rent</th>
                                <th class="text-center">Visitor Overnight Bill</th>
                                <th class="text-center">Maintenance Bill</th>
                                <th class="text-center">Total Bill</th>
                                <th class="text-center">Date Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each billRows as billRow}
                                <tr>
                                    {#each roomRows as roomRow}{#if roomRow.dormNo === billRow.dormNo} <td>Room {roomRow.roomName}</td>{/if}{/each}
                                    <td>{billRow.dateIssued}</td>
                                    <td>₱{billRow.monthlyRent}</td>
                                    <td>₱{billRow.waterBill}</td>
                                    <td>₱{billRow.electricityBill}</td>
                                    <td>₱{billRow.hutRent}</td>
                                    <td>₱{billRow.visitorOvernightBill}</td>
                                    <td>₱{billRow.maintenanceBill}</td>
                                    <td class="font-semibold">₱{billRow.totalBillAmount}</td>
                                    {#if billRow.paymentStatus}<td>{billRow.datePaid}</td>
                                    {:else if !billRow.paymentStatus}<td>unpaid</td>
                                    {/if}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
                
                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

                
        </div>
    </header>
</div>