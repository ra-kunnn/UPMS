<script>
	import TenantHeader from '$lib/headerTenant.svelte';
    import Aside from '$lib/asideTenant.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <TenantHeader />
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div class="flex bg-gradient-to-br variant-gradient-primary-secondary p-9 rounded-3xl">
                <img class="object-cover h-40 w-40 rounded-xl shadow-md" src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" alt="pic">
                <div class="flex items-end pl-5">
                    <div class="flex-none">
                        <h1 class="h1 font-bold text-6xl pb-1">Gian Paolo Plariza</h1>
                        <p>Tenant, Room 203</p>
                    </div>
                </div>
            </div>
            
            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div class="bg-gradient-to-br variant-gradient-secondary-tertiary p-9 rounded-3xl">
                <h1 class="h1 font-bold pb-8">Latest Bills</h1>
                <div class="col-span-4 grid grid-cols-4 gap-4 text-surface-800">
                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">03/24</h3>
                            <span class="chip variant-soft-tertiary px-3">Unpaid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>Php 12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">02/24</h3>
                            <span class="chip variant-soft-error px-3">Unpaid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>Php 12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">01/24</h3>
                            <span class="chip variant-soft-success px-3">Paid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>Php 12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="col-span-1 card card-hover bg-white p-4 shadow overflow-hidden">
                        <div class="flex m-auto justify-between pb-4">
                            <h3 class="h3 pr-3 text-3xl font-bold tracking-tight dark:text-white">12/23</h3>
                            <span class="chip variant-soft-success px-3">Paid</span>
                        </div>
                        
                        <div class="table-container">
                            <table class="table table-hover bg-surface-50">
                                <tbody>
                                    <tr>
                                        <th>Monthly Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Water Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Electricity Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Hut Rent</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Visitor Overnight Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                    <tr>
                                        <th>Maintenance Bill</th>
                                        <td>Php 2000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                        <th>Calculated Bill</th>
                                        <td>Php 12000.00</td>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>