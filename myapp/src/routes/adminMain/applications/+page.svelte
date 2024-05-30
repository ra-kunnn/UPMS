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
    
    interface User {
        customerName: string;
        customerID: number;
        customerSex: string;
        customerPhone: number;
        customerEmail: string;
    }
    interface Application {
        applicationID: number;
        customerID: number;
        dormNo: number;
        startOfTenancy: Date;
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
    let applicationRows: Application[] = [];
    let userRows: User[] = [];

    onMount(() => {
        try {
            roomRows = data.rooms || [];
            applicationRows = data.application || [];
            userRows = data.user || [];
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
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div>
                <h1 class="h1 font-bold pb-8">Room Applications</h1>
                
                <div class="col-span-4 grid 2xl:grid-cols-5 grid-cols-4 gap-4 text-surface-800">

                    {#each applicationRows as applicationRow}
                        <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                            <header>
                                <img src="https://i.pinimg.com/736x/a0/ee/92/a0ee92666bfb87aed854e2017a1c451a.jpg" class="object-cover aspect-square w-full" alt="Post" />
                            </header>

                            <div class="p-4 pb-0">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        {#each userRows as userRow} {#if userRow.customerID === applicationRow.customerID}<h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">{userRow.customerName}</h4>{/if}{/each}
                                        {#each roomRows as roomRow} {#if roomRow.dormNo === applicationRow.dormNo}<p class="text-base pb-1">applied for Room {roomRow.roomName}</p>{/if}{/each}
                                        <p class="text-base pb-1">starting on: {applicationRow.startOfTenancy}</p>
                                        {#each userRows as userRow} {#if userRow.customerID === applicationRow.customerID}<p class="text-sm text-surface-400">{userRow.customerPhone}<br>{userRow.customerEmail}</p>{/if}{/each}
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 float-right">
                                <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Accept</button>
                                <button class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                            </div>
                        </div>
                    {/each}
                        

                    
                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    </header>
</div>