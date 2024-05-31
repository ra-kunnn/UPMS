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
    interface Tenant{
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
    let tenantRows: Tenant[] = [];
    let roomRows: Room[] = [];
    let availableRooms: Availability[] = [];
    onMount(() => {
        try {
            tenantRows = data.allTenants || [];
            roomRows = data.rooms || [];
            availableRooms = data.availability || [];
            
        } catch (error) {
            console.error(error);
            tenantRows = [];
        }
    });

    function createArray(length: number): number[] {
        return Array.from({ length }, (_, i) => i);
    }
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Rooms</h1>
                    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-72">
                        <div class="input-group-shim">
                            <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M 2 11.4286 C 2 6.1687 6.4771 1.9048 12 1.9048 C 17.5228 1.9048 22 6.1687 22 11.4286 C 22 16.6884 17.5228 20.9524 12 20.9524 C 6.4771 20.9524 2 16.6884 2 11.4286 Z M 9 10.9524 C 9 9.6374 10.1193 8.5714 11.5 8.5714 C 12.8807 8.5714 14 9.6374 14 10.9524 C 14 12.2673 12.8807 13.3333 11.5 13.3333 C 10.1193 13.3333 9 12.2673 9 10.9524 Z M 11.5 6.6667 C 9.0147 6.6667 7 8.5854 7 10.9524 C 7 13.3193 9.0147 15.2381 11.5 15.2381 C 12.3805 15.2381 13.202 14.9972 13.8957 14.581 L 15.2929 15.9115 C 15.6834 16.2834 16.3166 16.2834 16.7071 15.9115 C 17.0976 15.5396 17.0976 14.9366 16.7071 14.5647 L 15.31 13.234 C 15.7471 12.5733 16 11.791 16 10.9524 C 16 8.5854 13.9853 6.6667 11.5 6.6667 Z"/>
                            </svg>
                        </div>
                        <input type="search" placeholder="Search..." />
                    </div>
                </div>
                
                <div class="col-span-3 grid grid-cols-3 gap-4 text-surface-800">
                    {#each roomRows as roomRow}
                        
                            <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                                <header>
                                    <img src="https://cdn.vox-cdn.com/thumbor/z2M_XZXuk2EK-oIBbPXCVizxN80=/0x0:6492x4328/1200x675/filters:focal(2727x1645:3765x2683)/cdn.vox-cdn.com/uploads/chorus_image/image/69720403/13_THURSDAY_020.0.jpg" class="object-cover w-full aspect-[21/9]" alt="Post" />
                                </header>  
                                <div class="p-4">
                                    <div class="flex m-auto justify-between">
                                        <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room {roomRow.roomName}</h3> 
                                        <div class="flex items-center">
                                                {#each availableRooms as availableRoom}
                                                    {#if availableRoom.dormNo === roomRow.dormNo}
                                                        {#each createArray(availableRoom.availableSlots) as _}
                                                            <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                                                <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                                            </svg>
                                                           
                                                        {/each}
                                                        {#each createArray(availableRoom.preexistingTenants) as _}
                                                            
                                                            <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                                                <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                                            </svg>
                                                        {/each}
                                                    {/if}
                                                {/each}
                                            
                                        </div>
                                    </div>

                                    <div class="block h-44">
                                        <h4 class="h4 font-semibold justify-items-end">₱{roomRow.monthlyRent}/month</h4>
                                        {#if roomRow.PAX === 2}
                                            {#if roomRow.floor === 1}
                                                <p class="text-base text-surface-400 pb-2">1st Floor Right Wing</p>
                                            {:else}
                                                <p class="text-base text-surface-400 pb-2">2nd Floor Right Wing</p>
                                            {/if}
                                        {:else}
                                            {#if roomRow.floor === 1}
                                                <p class="text-base text-surface-400 pb-2">1st Floor Left Wing</p>
                                            {:else}
                                                <p class="text-base text-surface-400 pb-2">2nd Floor Left Wing</p>
                                            {/if}
                                        {/if}
                                        <ul class="list-disc pl-5">
                                           {#each tenantRows as tenantRow}
                                                {#if tenantRow.dormNo === roomRow.dormNo} 
                                                    <li>{tenantRow.tenantName}</li>
                                                {/if}
                                            {/each}
                                        </ul>
                                    </div>
                                    
                                    <div class="flex pt-2 gap-2">
                                        <button on:click={assignTenants} class="btn btn-sm variant-filled-surface text-white self-end w-full">Assign Tenants</button>
                                    </div>

                                    <div class="flex pt-2 gap-2">
                                        <button class="btn btn-sm text-white variant-filled-success w-full">Tag Room as Available</button>
                                        <button class="btn btn-sm text-white variant-filled-error w-full">Tag Room as Unavailable</button>
                                    </div>
                                    
                                </div>
                            </div>
                        
                    {/each}
                    

                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
    </header>
</div>