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
            <Profile />
            
            <hr class="my-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
    </header>
</div>