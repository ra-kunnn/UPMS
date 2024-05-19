<script>
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';

    export let data;

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };
</script>

<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="relative ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex m-auto justify-between pb-8">
                    <h1 class="h1 font-bold my-auto">Bill History</h1>
                    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-72">
                        <div class="input-group-shim">
                            <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M 2 11.4286 C 2 6.1687 6.4771 1.9048 12 1.9048 C 17.5228 1.9048 22 6.1687 22 11.4286 C 22 16.6884 17.5228 20.9524 12 20.9524 C 6.4771 20.9524 2 16.6884 2 11.4286 Z M 9 10.9524 C 9 9.6374 10.1193 8.5714 11.5 8.5714 C 12.8807 8.5714 14 9.6374 14 10.9524 C 14 12.2673 12.8807 13.3333 11.5 13.3333 C 10.1193 13.3333 9 12.2673 9 10.9524 Z M 11.5 6.6667 C 9.0147 6.6667 7 8.5854 7 10.9524 C 7 13.3193 9.0147 15.2381 11.5 15.2381 C 12.3805 15.2381 13.202 14.9972 13.8957 14.581 L 15.2929 15.9115 C 15.6834 16.2834 16.3166 16.2834 16.7071 15.9115 C 17.0976 15.5396 17.0976 14.9366 16.7071 14.5647 L 15.31 13.234 C 15.7471 12.5733 16 11.791 16 10.9524 C 16 8.5854 13.9853 6.6667 11.5 6.6667 Z"/>
                            </svg>
                        </div>
                        <input type="search" placeholder="Search..." />
                    </div>
                </div>

                <div class="table-container">
                    <table class="table table-fixed table-hover bg-surface-50 md:text-xs">
                        <thead>
                            <tr class="bg-secondary-400">
                                <th class="text-center">Room</th>
                                <th class="text-center">Date</th>
                                <th class="text-center">Monthly Rent</th>
                                <th class="text-center">Water Bill</th>
                                <th class="text-center">Electricity Bill</th>
                                <th class="text-center">Hut Rent</th>
                                <th class="text-center">Visitor Overnight Bill</th>
                                <th class="text-center">Maintenance Bill</th>
                                <th class="text-center">Total Bill</th>
                                <th class="text-center">Date Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Pork</td>
                                <td>John Pork</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
    </header>
</div>