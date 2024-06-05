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
    const setChosenRoom = (dormNo: number, roomName: string) => {
        Cookies.set('dormNo', dormNo); 
        Cookies.set('roomName', roomName); 
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
                    <h1 class="h1 font-bold md:text-5xl">Rooms</h1>
                </div>
                
                <div class="col-span-3 grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 gap-4 text-surface-800">

                    {#each roomRows as roomRow}
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
                                        {#each availableRooms as availableRoom}
                                            {#if availableRoom.dormNo === roomRow.dormNo}
                                                {#each createArray(availableRoom.preexistingTenants) as _}
                                                    <svg class="flex-shrink-0 w-5 h-5 fill-surface-700 text-surface-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 44 44">
                                                        <path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z"></path>
                                                    </svg>
                                                {/each}
                                                {#each createArray(availableRoom.availableSlots) as _}
                                                    <svg class="flex-shrink-0 w-5 h-5 fill-surface-300 text-surface-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 44 44">
                                                        <path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z"></path>
                                                    </svg>
                                                {/each}
                                            {/if}
                                        {/each}
                                    </div>
                                </div>

                                <div class="block min-h-32">
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
                                    <button on:click={() => {assignTenants(); setChosenRoom(roomRow.dormNo, roomRow.roomName)}} class="btn btn-sm variant-filled-surface text-white self-end w-full">Assign Tenants</button>
                                </div>

                                <div class="flex pt-2 gap-2">

                                    {#each availableRooms as availableRoom}
                                        {#if availableRoom.dormNo === roomRow.dormNo}
                                            {#if !availableRoom.availability}<button on:click={() => {setAvailability(availableRoom.availability, availableRoom.dormNo)}} class="btn btn-sm text-white variant-filled-success w-full">Tag Room as Available</button>{/if}
                                            {#if availableRoom.availability}<button on:click={() => {setAvailability(availableRoom.availability, availableRoom.dormNo)}} class="btn btn-sm text-white variant-filled-error w-full">Tag Room as Unavailable</button>{/if}
                                        {/if}
                                    {/each}

                                </div>
                            </div>
                        </div>
                    {/each}

                </div>

                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
        </div>
    </header>
</div>