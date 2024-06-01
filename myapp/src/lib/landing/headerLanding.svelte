<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function logIn(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'LogIn',
        };
        modalStore.trigger(modal);
    }

    function signUp(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'SignUp',
        };
        modalStore.trigger(modal);
    }
</script>

<div class="sticky top-0 z-40 w-full px-5 py-5 mx-auto sm:px-8 xl:px-12 bg-white shadow-xl">
    <div class="flex justify-between mx-auto sm:items-center">
        <span class="font-semibold text-xl">UPAD Management System</span>
        <div class="flex items-center gap-1">
            <button on:click={logIn} class="bg-inherit hover:variant-soft-primary rounded-none border-none px-5 py-2 font-semibold">Log In</button>
            <button on:click={signUp} class="bg-inherit hover:variant-soft-primary rounded-none border-none px-5 py-2 font-semibold">Sign Up</button>
        </div>
    </div>
</div>