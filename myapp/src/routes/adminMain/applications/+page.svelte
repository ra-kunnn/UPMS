<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';

    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function areYouSure(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'AreYouSure',
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
                <h1 class="h1 font-bold pb-8">Room Applications</h1>
                
                <div class="col-span-4 grid 2xl:grid-cols-5 grid-cols-4 gap-4 text-surface-800">

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://i.pinimg.com/736x/a0/ee/92/a0ee92666bfb87aed854e2017a1c451a.jpg" class="object-cover aspect-square w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Minecraft Steve</h4>
                                    <p class="text-base pb-1">applied for Room 201</p>
                                    <p class="text-sm text-surface-400">09888387772<br>mcsteve@minecraft.com<br>applied 8:58 PM on 3/24/24</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-success text-white self-end mr-2">Accept</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://skin.laby.net/api/render/user/bec2968f-48ab-4504-a7b4-bde54a789bdb.png?shadow=true&bust=true&width=256&height=256" class="object-cover aspect-square w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Minecraft Alex</h4>
                                    <p class="text-base pb-1">applied for Room 201</p>
                                    <p class="text-sm text-surface-400">09189173819<br>lexyminer@minecraft.com<br>applied 8:46 PM on 3/24/24</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex p-4 float-right">
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-success text-white self-end mr-2">Accept</button>
                            <button on:click={areYouSure} class="btn btn-sm variant-filled-error text-white self-end">Deny</button>
                        </div>
                    </div>
                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            </div>
        </div>
    </header>
</div>