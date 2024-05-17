<script lang="ts">
    import "../app.css";
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import type { ModalComponent } from '@skeletonlabs/skeleton';
    initializeStores();

    import ConfirmApplication from '$lib/modals/confirmApply.svelte';
    import AreYouSure from '$lib/modals/confirmDeny.svelte';
    import BillingForm from '$lib/modals/issueBill.svelte';
    import ChangeTenantRoom from '$lib/modals/changeRoom.svelte';
    import AssignTenants from '$lib/modals/assignTenants.svelte';
    import CreateAccount from '$lib/modals/createAccount.svelte';

    const modalRegistry: Record<string, ModalComponent> = {
        // Set a unique modal ID, then pass the component reference
        ConfirmApplication: { ref: ConfirmApplication },
        AreYouSure: { ref: AreYouSure },
        BillingForm: { ref: BillingForm },
        ChangeTenantRoom: { ref: ChangeTenantRoom },
        AssignTenants: { ref: AssignTenants },
        CreateAccount: { ref: CreateAccount },
        // ...
};
</script>

<svelte:head>
    <title>UPAD Management System</title>
</svelte:head>

<Modal components={modalRegistry}/>

<slot />