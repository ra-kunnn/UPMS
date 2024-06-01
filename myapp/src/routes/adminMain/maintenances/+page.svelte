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

    let roomRows: Room[] = [];
    let maintenanceRows: Maintenance[] = [];

    onMount(() => {
        try {
            roomRows = data.rooms || [];
            maintenanceRows = data.maintenance || [];
            
        } catch (error) {
            console.error(error);
            roomRows = [];
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
                <div class="flex pb-8 max-md:pb-4">
                    <h1 class="h1 font-bold md:text-5xl">Bill History</h1>
                </div>

                <div class="table-container">
                    <table class="table table-hover bg-surface-50">
                        <thead>
                            <tr class="bg-secondary-400">
                                <th>Dorm Room</th>
                                <th>Task Description</th>
                                <th>Start Date and Time</th>
                                <th>End Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each maintenanceRows as maintenanceRow}
                                {#if maintenanceRow.isDone}
                                    <tr>
                                        {#each roomRows as roomRow}{#if roomRow.dormNo === maintenanceRow.dormNo} <td>Room {roomRow.roomName}</td>{/if}{/each}
                                        <td>{maintenanceRow.maintenanceRequest}</td>
                                        <td>{maintenanceRow.startDateOfMaintenance}</td>
                                        <td>{maintenanceRow.endDateOfMaintenance}</td>
                                    </tr>
                                {/if}
                            {/each}
                            
                        </tbody>
                    </table>
                </div>
                
                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
        </div>
    </header>
</div>