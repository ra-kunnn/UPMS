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

<div class="sticky top-0 z-40 w-full p-5 mx-auto sm:px-8 xl:px-12 bg-white shadow-xl">
    <div class="flex justify-between mx-auto items-center">
        <span class="font-semibold max-sm:font-bold text-xl max-md:text-base max-[480px]:text-xs">UPAD Management System</span>
        <div class="flex items-center gap-1">
            <button on:click={logIn} class="bg-inherit hover:variant-soft-primary rounded-none border-none px-5 max-md:px-2 py-2 max-md:text-sm max-[480px]:text-xs font-semibold">Log In</button>
            <button on:click={signUp} class="bg-inherit hover:variant-soft-primary rounded-none border-none px-5 max-md:px-2 py-2 max-md:text-sm max-[480px]:text-xs font-semibold">Sign Up</button>
        </div>
    </div>
</div>