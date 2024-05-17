<script lang="ts">
    import "../app.css";
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import type { ModalComponent } from '@skeletonlabs/skeleton';
    initializeStores();

    import Form from '$lib/modals/modalForm.svelte';

    const modalRegistry: Record<string, ModalComponent> = {
        // Set a unique modal ID, then pass the component reference
        Form: { ref: Form },
        // ...
};
</script>

<svelte:head>
    <title>UPAD Management System</title>
</svelte:head>

<Modal components={modalRegistry}/>

<slot />