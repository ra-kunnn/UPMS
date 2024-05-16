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
                <h1 class="h1 font-bold pb-8">Rooms - filter in right</h1>
                
                <div class="col-span-3 grid grid-cols-3 gap-4 text-surface-800 pb-6">

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://cdn.vox-cdn.com/thumbor/z2M_XZXuk2EK-oIBbPXCVizxN80=/0x0:6492x4328/1200x675/filters:focal(2727x1645:3765x2683)/cdn.vox-cdn.com/uploads/chorus_image/image/69720403/13_THURSDAY_020.0.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
                        </header>

                        <div class="p-4 pb-6">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room A</h3>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex m-auto justify-between">
                                <div class="block h-40">
                                    <h4 class="h4 font-semibold justify-items-end">₱7,500/month</h4>
                                    <p class="text-base text-surface-400 pb-2">1st Floor Left Wing</p>
                                    <ul class="list-disc pl-5">
                                        <li>person 1</li>
                                        <li>person 2</li>
                                        <li>person 3</li>
                                        <li>person 4</li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button class="btn variant-filled-error text-white self-end">Actions</button>
                                </div>
                            </div>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://asiasociety.org/sites/default/files/styles/1200w/public/D/dormroom.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
                        </header>

                        <div class="p-4 pb-6">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room B</h3>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex m-auto justify-between">
                                <div class="block h-40">
                                    <h4 class="h4 font-semibold justify-items-end">₱7,500/month</h4>
                                    <p class="text-base text-surface-400 pb-2">1st Floor Left Wing</p>
                                    <ul class="list-disc pl-5">
                                        <li>person 1</li>
                                        <li>person 2</li>
                                        <li>person 3</li>
                                        <li>person 4</li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button class="btn variant-filled-error text-white self-end">Actions</button>
                                </div>
                            </div>
                        </div>
            
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://i.ytimg.com/vi/Kak4sSmBjM8/maxresdefault.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
                        </header>
                        
                        <div class="p-4 pb-6">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room 201</h3>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex m-auto justify-between">
                                <div class="block h-40">
                                    <h4 class="h4 font-semibold justify-items-end">₱4,000/month</h4>
                                    <p class="text-base text-surface-400 pb-2">2nd Floor Right Wing</p>
                                    <ul class="list-disc pl-5">
                                        <li>person 1</li>
                                        <li>person 2</li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button class="btn variant-filled-error text-white self-end">Actions</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Sharp_Hall_Dorm_Room.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
                        </header>
                        
                        <div class="p-4 pb-6">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room 202</h3>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex m-auto justify-between">
                                <div class="block h-40">
                                    <h4 class="h4 font-semibold justify-items-end">₱4,000/month</h4>
                                    <p class="text-base text-surface-400 pb-2">2nd Floor Right Wing</p>
                                    <ul class="list-disc pl-5">
                                        <li>person 1</li>
                                        <li>person 2</li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button class="btn variant-filled-error text-white self-end">Actions</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                        <header>
                            <img src="https://www.thespruce.com/thmb/CnQmH_kyVVM4Av5_OnsxyiOstmk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-how-to-make-dorm-room-functional-relaxing-5649206-hero-ee04000729fd4f71ac65ad91a11f6275.jpg" class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
                        </header>
                        
                        <div class="p-4 pb-6">
                            <div class="flex m-auto justify-between">
                                <h3 class="h3 pr-3 text-3xl font-bold tracking-tight">Room 207</h3>
                                <div class="flex items-center">
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-300 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                    <svg class="w-4 h-4 text-surface-500 fill-surface-800 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21">
                                        <path d="M 10 9 a 5 4.5 0 1 0 0 -9 a 4.5 4.5 0 0 0 0 9 Z M 10 11 H 5 a 5.006 5.006 0 0 0 -5 5 v 2 a 1 1 0 0 0 1 1 h 18 a 1 1 0 0 0 1 -1 v -2 a 5.006 5.006 0 0 0 -5 -5 Z"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex m-auto justify-between">
                                <div class="block h-40">
                                    <h4 class="h4 font-semibold justify-items-end">₱4,000/month</h4>
                                    <p class="text-base text-surface-400 pb-2">2nd Floor Right Wing</p>
                                    <ul class="list-disc pl-5">
                                        <li>person 1</li>
                                        <li>person 2</li>
                                    </ul>
                                </div>
                                <div class="flex">
                                    <button class="btn variant-filled-error text-white self-end">Actions</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
    </header>
</div>