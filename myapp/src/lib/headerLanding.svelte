<script>
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
</script>

<div class="sticky top-0 z-40 w-full px-5 py-5 mx-auto sm:px-8 xl:px-12 bg-white shadow-xl">
    <div class="flex justify-between mx-auto sm:items-center">
        <span class="font-semibold text-xl">UPAD Management System</span>
        <TabGroup
            active="variant-filled-primary"
            hover="hover:variant-soft-primary"
            rounded=""
            border=""
            padding="px-5 py-2"
            class="font-semibold"
        >
            <TabAnchor href="/login" selected={$page.url.pathname === '/login'}>Log In</TabAnchor>
        </TabGroup>
    </div>
</div>