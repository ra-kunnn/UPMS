<script>
	import TenantHeader from '$lib/tenant/headerTenant.svelte';
    import Aside from '$lib/tenant/asideTenant.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/tenant/profileTenant.svelte';
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <TenantHeader />
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <Profile/>

            <hr class="mt-10 mb-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <h1 class="h1 text-4xl pb-6 font-bold">Roommates</h1>
            <div class="col-span-4 grid grid-cols-11 gap-4 text-surface-800">
                <div class="col-span-2 card card-hover overflow-hidden shadow bg-white">
                    <div class="p-4">
                        <div class="flex m-auto justify-between">
                            <div class="block">
                                <h4 class="h4 pb-2 font-semibold tracking-tight">Gian Paolo Plariza</h4>
                                <p class="text-sm text-surface-400">09982315336<br>gianpdplariza@gmail.com<br>tenant since May 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 card card-hover overflow-hidden shadow bg-white">
                    <div class="p-4">
                        <div class="flex m-auto justify-between">
                            <div class="block">
                                <h4 class="h4 pb-2 font-semibold tracking-tight">Gian Paolo Plariza</h4>
                                <p class="text-sm text-surface-400">09982315336<br>gianpdplariza@gmail.com<br>tenant since May 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-2 card card-hover overflow-hidden shadow bg-white">
                    <div class="p-4">
                        <div class="flex m-auto justify-between">
                            <div class="block">
                                <h4 class="h4 pb-2 font-semibold tracking-tight">Gian Paolo Plariza</h4>
                                <p class="text-sm text-surface-400">09982315336<br>gianpdplariza@gmail.com<br>tenant since May 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div class="bg-gradient-to-br variant-gradient-secondary-tertiary p-9 rounded-3xl text-surface-50">
                <h1 class="h1 font-bold pb-8">Latest Bills</h1>
                <div class="col-span-4 grid 2xl:grid-cols-4 xl:grid-cols-2 gap-4 text-surface-800">
                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">Mar 2024</h3>
                            <span class="badge variant-ghost-tertiary px-3 self-center">Unpaid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>₱12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">Feb 2024</h3>
                            <span class="badge variant-ghost-error px-3 self-center">Unpaid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>₱12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">Jan 2024</h3>
                            <span class="badge variant-ghost-success px-3 self-center">Paid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>₱12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">Dec 2023</h3>
                            <span class="badge variant-ghost-success px-3 self-center">Paid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>₱2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>₱12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

        </div>
    </header>
</div>