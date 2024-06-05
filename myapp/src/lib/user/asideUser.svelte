<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function passwordChange(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'ChangePassword',
        };
        modalStore.trigger(modal);
    }
</script>

<aside class="fixed top-20 left-0 z-20 lg:w-80 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white shadow">
        <ul class="space-y-2 font-medium">
            <li>
                <a href="/userMain" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 442 442">
                        <path d="M405.584,262.377h-26.899v124.201c0,22-17.7,39.799-39.801,39.799h-236.3c-22,0-39.8-17.699-39.8-39.799V262.377h-26.9 c-30,0-50.2-36.699-23.3-64.299l159.2-162.1c13.5-14.1,31.2-20.8,49-20.8s35.5,6.7,49.6,20.8l36.101,36.7v-32.4 c0-14.1,11.6-25.1,25.7-25.1h21.399c13.5,0,25.101,11,25.101,25.1v106.5l50.199,51.4 C455.685,225.678,436.185,262.377,405.584,262.377z"></path>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Home Page</span>
                </a>
            </li>
            <li>
                <button on:click={passwordChange} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 22 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 8v8"></path>
                    <path d="m8.5 14 7-4"></path>
                    <path d="m8.5 10 7 4"></path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Change Password</span>
                </button>
            </li>
        </ul>
    </div>
</aside>

 