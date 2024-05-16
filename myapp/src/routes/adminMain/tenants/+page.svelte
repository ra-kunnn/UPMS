<script>
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/displayAdmin.svelte';
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header />
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div>
                <h1 class="h1 font-bold pb-8">Tenants - filter in right</h1>
                
                <div class="col-span-4 grid grid-cols-4 gap-4 text-surface-800 pb-6">

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="bg-black/50 w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block h-20">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Plariza, Gian Paolo</h4>
                                    <p class="text-base pb-2">Room 203</p>
                                </div>
                            </div>
                        </div>

                        <div class="block p-4">
                            <button class="btn variant-filled-error text-white self-end">Actions</button>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="bg-black/50 w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block h-20">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Ratilla, Chester John</h4>
                                    <p class="text-base pb-2">Room 203</p>
                                </div>
                            </div>
                        </div>

                        <div class="block p-4">
                            <button class="btn variant-filled-error text-white self-end">Actions</button>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="bg-black/50 w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block h-20">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Veralio, Arwen Eve</h4>
                                    <p class="text-base pb-2">Room 203</p>
                                </div>
                            </div>
                        </div>

                        <div class="block p-4">
                            <button class="btn variant-filled-error text-white self-end">Actions</button>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" class="bg-black/50 w-full" alt="Post" />
                        </header>

                        <div class="p-4 pb-0">
                            <div class="flex m-auto justify-between">
                                <div class="block h-20">
                                    <h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">Rosales, Violette Gwen Rai</h4>
                                    <p class="text-base pb-2">Room 203</p>
                                </div>
                            </div>
                        </div>

                        <div class="block p-4">
                            <button class="btn variant-filled-error text-white self-end">Actions</button>
                        </div>
            
                    </div>

                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
    </header>
</div>