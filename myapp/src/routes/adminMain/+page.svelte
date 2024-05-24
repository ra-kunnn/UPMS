<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function billPopUp(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'BillingForm',
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



    import { invalidate } from '$app/navigation';
    import type { EventHandler } from 'svelte/elements';
    import type { PageData } from './$types';

    const { user } = data;

    let managerEmail = user[0].managerEmail;
    let managerName = user[0].managerName;

    function handleProfile(event) {
    managerName = event.detail.managerName;
    managerEmail = event.detail.managerEmail;
  }


</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <Profile on:modalOpen={handleProfile} {managerName} {managerEmail} />

            
            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100" />

            <div class="bg-gradient-to-bl from-amber-600 via-surface-500 to-surface-400 p-9 rounded-3xl text-surface-50">
                <h1 class="h1 font-bold pb-2 text-surface-50">Rooms Awaiting Bills</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10 text-surface-800">

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 font-semibold">Room C – Mar 2024<br>Base Price: <span class="font-bold">₱7,000.00</span></h4>
                                    <p class="text-sm text-surface-400">tenant 1, tenant 2, tenant 3, tenant 4</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={billPopUp} class="btn btn-sm variant-filled-success text-white self-end">Issue Bill</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 font-semibold">Room D – Mar 2024<br>Base Price: <span class="font-bold">₱7,000.00</span></h4>
                                    <p class="text-sm text-surface-400">tenant 1, tenant 2, tenant 3, tenant 4</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={billPopUp} class="btn btn-sm variant-filled-success text-white self-end">Issue Bill</button>
                        </div>
            
                    </div>
                </div>
            </div>

            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            
            <div class="bg-gradient-to-br from-primary-400 to-secondary-700 p-9 rounded-3xl text-surface-50">
                <h1 class="h1 font-bold pb-2 text-surface-50">Released Bills</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10 text-surface-800">

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 font-semibold">Room A – Mar 2024</h4>
                                    <h2 class="h2 tracking-tight font-bold pb-1">₱10,000.00</h2>
                                    <p class="text-sm text-surface-400">tenant 1, tenant 2, tenant 3, tenant 4</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-success text-white self-end">Confirm Payment</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 font-semibold">Room B – Mar 2024</h4>
                                    <h2 class="h2 tracking-tight font-bold pb-1">₱10,000.00</h2>
                                    <p class="text-sm text-surface-400">tenant 1, tenant 2, tenant 3, tenant 4</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-success text-white self-end">Confirm Payment</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 font-semibold">Room 205 – Mar 2024</h4>
                                    <h2 class="h2 tracking-tight font-bold pb-1">₱6,000.00</h2>
                                    <p class="text-sm text-surface-400">tenant 1, tenant 2</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-success text-white self-end">Confirm Payment</button>
                        </div>
            
                    </div>
                </div>
            </div>

            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div class="bg-gradient-to-br from-secondary-600 to-tertiary-700 p-9 rounded-3xl text-surface-50">
                <h1 class="h1 font-bold pb-2 text-surface-50">Visitor Requests</h1>
                <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10 text-surface-800">

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>

                    <div class="snap-start shrink-0 w-72 card card-hover overflow-hidden shadow bg-white">
                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 text-2 xl font-bold tracking-tight">Gian Paolo Plariza</h4>
                                    <p class="text-base pb-1">Visitor: Alex Plariza, father</p>
                                    <p class="text-sm text-surface-400">Room A</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button class="btn btn-sm variant-filled-success text-white self-end mr-2">Confirm</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
            
                    </div>
                </div>
            </div>
            
            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100" />

        </div>
    </header>
</div>