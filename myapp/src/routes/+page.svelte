<script lang="ts">
	import Header from '$lib/landing/headerLanding.svelte';
    import Aside from '$lib/landing/asideLanding.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import { onMount } from 'svelte';

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    

    const modalStore = getModalStore();

    function makeAnAccount(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'CreateAccount',
        };
        modalStore.trigger(modal);
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

    interface Availability {
        dormNo: number;
        availability: boolean;
        availableSlots: number;
        preexistingTenants: number;
        // Add other columns as needed
    }

    export let data:PageData;
    const { rooms, availability }: { rooms: Room[], availability: Availability[] } = data;

    let roomRows: Room[] = [];
    let availRows: Availability[] = [];
    let availableRooms: Room[] = [];

    onMount(() => {
        try {
            roomRows = rooms || [];
            availRows = availability || [];
            availableRooms = roomRows.filter(room => {
                const roomAvailability = availRows.find(avail => avail.dormNo === room.dormNo);
                return roomAvailability && roomAvailability.availability;
            });
        } catch (error) {
            console.error(error);
            roomRows = [];
            availRows = [];
            availableRooms = [];
        }
    });

    function createArray(length: number): number[] {
        return Array.from({ length }, (_, i) => i);
    }

</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 to-slate-300">
    <Header />
    <header class="relative">
        <div class="w-auto p-10">
            <div class="bg-gradient-to-br from-primary-500 via-indigo-600 to-surface-800 p-5 lg:p-9 rounded-3xl max-sm:rounded-xl text-surface-50">
                <h1 class="h1 font-bold max-md:text-5xl text-7xl pb-4 text-surface-50">Welcome to UPMS!</h1>
                <blockquote class="blockquote text-surface-50">quote, quote quote quote.</blockquote>
            </div>
            
            <hr class="my-10 mb-6 max-md:my-8 max-md:mb-4 h-0.5 border-t-0 bg-neutral-100" />

            <div class="flex pb-8 max-md:pb-4">
                <h1 class="h1 font-bold sm:max-md:text-5xl">Available Rooms</h1>
            </div>
            
            <div class="col-span-3 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-4 text-surface-800">
                {#each availableRooms as roomRow}
                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            {#if roomRow.PAX === 2}
                                <img src="https://reslife.umd.edu/sites/default/files/styles/optimized/public/2022-09/IMG-1216.jpg?itok=do-NZ-Gu" class="object-cover w-full aspect-[21/9]" alt="room for 2" />
                            {:else}
                                <img src="https://www.hostelbacau.ro/wp-content/uploads/2019/02/Hostel-Holland-4-person-room-4.jpg" class="object-cover w-full aspect-[21/9]" alt="room for 4" />
                            {/if}
                        </header>  
                        <div class="p-4">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room {roomRow.roomName}</h3> 
                                <div class="flex items-center">
                                    {#each availRows as availRow}
                                        {#if availRow.dormNo === roomRow.dormNo}
                                            {#each createArray(availRow.preexistingTenants) as _}
                                                <svg class="flex-shrink-0 w-5 h-5 fill-surface-700 text-surface-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 44 44">
                                                    <path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z"></path>
                                                </svg>
                                            {/each}
                                            {#each createArray(availRow.availableSlots) as _}              
                                                <svg class="flex-shrink-0 w-5 h-5 fill-surface-300 text-surface-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 44 44">
                                                    <path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z"></path>
                                                </svg>
                                            {/each}
                                        {/if}
                                    {/each}
                                </div>
                            </div>

                            <div class="block">
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
                            </div>
                            
                            <div class="block gap-1">
                                {#if roomRow.PAX === 2}
                                    <span class="badge variant-ghost-primary text-primary-700 mb-1">1 Bunk Bed</span>
                                {:else}
                                    <span class="badge variant-ghost-primary text-primary-700 mb-1">2 Bunk Beds</span>
                                {/if}
                                {#if roomRow.personalCrStatus}
                                    <span class="badge variant-ghost-success text-success-700 mb-1">Personal Comfort Room</span>
                                {:else}
                                    <span class="badge variant-ghost-error text-error-700 mb-1">Communal Comfort Room</span>
                                {/if}
                                {#if roomRow.personalSinkStatus}
                                    <span class="badge variant-ghost-success text-success-700 mb-1">Personal Sink</span>
                                {:else}
                                    <span class="badge variant-ghost-error text-error-700 mb-1">Communal Sink</span>
                                {/if}
                                {#if roomRow.airconStatus}
                                    <span class="badge variant-ghost-success text-success-700 mb-1">Aircon</span>
                                {:else}
                                    <span class="badge variant-ghost-error text-error-700 mb-1">No Aircon</span>
                                {/if}
                            </div>

                            <div class="flex pt-4">
                                <button on:click={makeAnAccount} class="btn btn-sm variant-filled-success text-white w-full">Apply</button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>

            <hr class="my-10 mb-6 max-md:my-8 max-md:mb-4 h-0.5 border-t-0 bg-neutral-100" />
            
        </div>
    </header>
    
</div>