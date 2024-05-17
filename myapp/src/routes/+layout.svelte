<script lang="ts">
    import "../app.css";
    import { initializeStores, Modal } from '@skeletonlabs/skeleton';
    import type { ModalComponent } from '@skeletonlabs/skeleton';
    initializeStores();

    import ConfirmApplication from '$lib/modals/confirmApply.svelte';
    import AreYouSure from '$lib/modals/confirmDeny.svelte';
    import BillingForm from '$lib/modals/issueBill.svelte';
    import editTenant from '$lib/modals/editTenant.svelte';
    import AssignTenants from '$lib/modals/assignTenants.svelte';
    import CreateAccount from '$lib/modals/createAccount.svelte';
	import ChangePassword from "$lib/modals/changePassword.svelte";
    import LogIn from '$lib/modals/login.svelte';
	import SignUp from "$lib/modals/signup.svelte";

    const modalRegistry: Record<string, ModalComponent> = {
        // Set a unique modal ID, then pass the component reference
        ConfirmApplication: { ref: ConfirmApplication },
        AreYouSure: { ref: AreYouSure },
        BillingForm: { ref: BillingForm },
        editTenant: { ref: editTenant },
        AssignTenants: { ref: AssignTenants },
        CreateAccount: { ref: CreateAccount },
        ChangePassword: { ref: ChangePassword },
        LogIn: { ref: LogIn },
        SignUp: { ref: SignUp },
        // ...
};
</script>

<svelte:head>
    <title>UPAD Management System</title>
</svelte:head>

<Modal components={modalRegistry}/>

<slot />