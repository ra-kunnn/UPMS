<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import Cookies from 'js-cookie';
    import { supabase } from '$lib/supabaseClient';

    const modalStore = getModalStore();

    function editTenant(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'editTenant',
        };
        modalStore.trigger(modal);
    }
    
    function applyPopUp(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: '',
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
    let tenantRows: Tenant[] = [];
    let roomRows: Room[] = [];
    let tenantID: number;
    let tenantName: string;
    let roomName: string;
    onMount(() => {
        try {
            tenantRows = data.allTenants || [];
            roomRows = data.rooms || [];
            Cookies.set('tenantID', tenantID);
        } catch (error) {
            console.error(error);
            tenantRows = [];    
        }
    });
    const setChosenTenant = (tenantID: number, roomName: string, tenantName: string, tenantPhone: number) => {
        Cookies.set('tenantID', tenantID); 
        Cookies.set('roomName', roomName); 
        Cookies.set('tenantName', tenantName);
        Cookies.set('tenantPhone', tenantPhone);  
    };
    const deleteTenant = async (tenantID: number) => {

            const { error: tenantError } = await supabase
                .from('Tenant')
                .delete()
                .eq('tenantID', tenantID);

                if (tenantError) {
                    console.error('Error deleting application:', availError);
                    alert('Error deleting application');
                } 
       
       

        alert('Tenant deleted');
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
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Tenants</h1>
                </div>
                
                <div class="col-span-3 grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-4 text-surface-800">

                    {#each tenantRows as tenantRow}
                        <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                            <header>
                                <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="object-cover aspect-square w-full" alt="Post" />
                            </header>

                            <div class="p-4">
                                <div class="flex m-auto justify-between min-h-28">
                                    <div class="block">
                                        <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">{tenantRow.tenantName}</h4>
                                        {#each roomRows as roomRow} {#if roomRow.dormNo === tenantRow.dormNo}<p class="text-base pb-2">Room {roomRow.roomName}</p>{/if} {/each}
                                        <p class="text-sm text-surface-400">{tenantRow.tenantEmail}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 py-2 gap-2">
                                {#each roomRows as roomRow}
                                    {#if roomRow.dormNo === tenantRow.dormNo}
                                        <button on:click={() => { editTenant(); setChosenTenant(tenantRow.tenantID, roomRow.roomName, tenantRow.tenantName, tenantRow.tenantPhone); }} class="btn btn-sm text-white variant-filled-success w-full">Edit Details</button>
                                    {/if}
                                {/each}
                            </div>

                            <div class="flex p-4 pt-0 gap-2">
                                <button on:click={() => { deleteTenant(tenantRow.tenantID) }} class="btn btn-sm text-white variant-filled-error w-full">Remove Tenant</button>
                            </div>
                
                        </div>
                    {/each}
                    

                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    </header>
</div>