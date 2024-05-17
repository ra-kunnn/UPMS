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
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header />
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div>
                <h1 class="h1 font-bold pb-8">Issue Bills</h1>
                
                <div class="col-span-4 grid 2xl:grid-cols-5 grid-cols-4 gap-4 text-surface-800">

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
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

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
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

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    </header>
</div>