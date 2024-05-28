<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function editTenant(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'editTenant',
        };
        modalStore.trigger(modal);
    }

    function areYouSure(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'AreYouSure',
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
    onMount(() => {
        try {
            tenantRows = data.allTenants || [];
            roomRows = data.rooms || [];
            
        } catch (error) {
            console.error(error);
            tenantRows = [];    
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
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Tenants</h1>
                    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-72">
                        <div class="input-group-shim">
                            <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M 2 11.4286 C 2 6.1687 6.4771 1.9048 12 1.9048 C 17.5228 1.9048 22 6.1687 22 11.4286 C 22 16.6884 17.5228 20.9524 12 20.9524 C 6.4771 20.9524 2 16.6884 2 11.4286 Z M 9 10.9524 C 9 9.6374 10.1193 8.5714 11.5 8.5714 C 12.8807 8.5714 14 9.6374 14 10.9524 C 14 12.2673 12.8807 13.3333 11.5 13.3333 C 10.1193 13.3333 9 12.2673 9 10.9524 Z M 11.5 6.6667 C 9.0147 6.6667 7 8.5854 7 10.9524 C 7 13.3193 9.0147 15.2381 11.5 15.2381 C 12.3805 15.2381 13.202 14.9972 13.8957 14.581 L 15.2929 15.9115 C 15.6834 16.2834 16.3166 16.2834 16.7071 15.9115 C 17.0976 15.5396 17.0976 14.9366 16.7071 14.5647 L 15.31 13.234 C 15.7471 12.5733 16 11.791 16 10.9524 C 16 8.5854 13.9853 6.6667 11.5 6.6667 Z"/>
                            </svg>
                        </div>
                        <input type="search" placeholder="Search..." />
                    </div>
                </div>
                
                <div class="col-span-4 grid grid-cols-4 md:grid-cols-3 gap-4 text-surface-800">

                    {#each tenantRows as tenantRow}
                        <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                            <header>
                                <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="object-cover aspect-square w-full" alt="Post" />
                            </header>

                            <div class="p-4">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">{tenantRow.tenantName}</h4>
                                        {#each roomRows as roomRow} {#if roomRow.dormNo === tenantRow.dormNo}<p class="text-base pb-2">Room {roomRow.roomName}</p>{/if} {/each}
                                            
                                       
                                        <p class="text-sm text-surface-400">{tenantRow.tenantEmail}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 float-right">
                                <button on:click={editTenant} class="btn btn-sm variant-filled-success text-white self-end mr-2">Edit Details</button>
                                <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Remove Tenant</button>
                            </div>
                
                        </div>
                    {/each}
                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/232/231/484726794.jpg" class="object-cover aspect-square w-full" alt="Post" />
                        </header>

                        <div class="p-4">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Chester John Ratilla</h4>
                                    <p class="text-base pb-2">Room 201</p>
                                    <p class="text-sm text-surface-400">cjratilla@gmail.com<br>tenant since May 2023</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={editTenant} class="btn btn-sm variant-filled-success text-white self-end mr-2">Edit Details</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Remove Tenant</button>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://carolinatigerrescue.org/wp-content/uploads/garcia.jpg" class="object-cover aspect-square w-full" alt="Post" />
                        </header>

                        <div class="p-4">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Arwen Eve Veralio</h4>
                                    <p class="text-base pb-2">Room 207</p>
                                    <p class="text-sm text-surface-400">rakun@gmail.com<br>tenant since May 2023</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={editTenant} class="btn btn-sm variant-filled-success text-white self-end mr-2">Edit Details</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Remove Tenant</button>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://cdnb.artstation.com/p/users/avatars/005/132/879/large/030349c9dde8636c1371938fc2e8dc3b.jpg?1646621001" class="object-cover aspect-square w-full" alt="Post" />
                        </header>

                        <div class="p-4">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Violette Gwen Rai Rosales</h4>
                                    <p class="text-base pb-2">Room A</p>
                                    <p class="text-sm text-surface-400">gwenrairosales@gmail.com<br>tenant since May 2023</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={editTenant} class="btn btn-sm variant-filled-success text-white self-end mr-2">Edit Details</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Remove Tenant</button>
                        </div>
            
                    </div>

                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    </header>
</div>