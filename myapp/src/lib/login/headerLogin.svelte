<script>
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
</script>

<div class="absolute top-0 z-40 w-full px-5 py-5 mx-auto sm:px-8 xl:px-12">
    <div class="flex justify-between mx-auto sm:items-center">
        <span class="font-semibold text-xl bg-gradient-to-br from-surface-500 to-primary-600 bg-clip-text text-transparent box-decoration-clone">UPAD Management System</span>
        <TabGroup
            active="variant-filled-surface"
            hover="hover:variant-soft-surface"
            rounded=""
            border=""
            padding="px-5 py-2"
            class="font-semibold"
        >
            <TabAnchor href="/" selected={$page.url.pathname === '/'}>Back</TabAnchor>
        </TabGroup>
    </div>
</div>