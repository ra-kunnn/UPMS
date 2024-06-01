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

    function requestForm(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'VisitorForm',
        };
        modalStore.trigger(modal);
    }

    function maintenanceForm(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'MaintenanceForm',
        };
        modalStore.trigger(modal);
    }
</script>

<aside class="fixed top-20 left-0 z-20 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white shadow">
        <ul class="space-y-2 font-medium">
            <li>
                <a href="/tenantMain" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                <span class="ms-3">Home Page</span>
                </a>
            </li>
            <li>
                <a href="/tenantMain/receipts" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M 14.19 0 H 5.81 C 2.17 0 0 2.17 0 5.81 V 14.18 C 0 17.83 2.17 20 5.81 20 H 14.18 C 17.82 20 19.99 17.83 19.99 14.19 V 5.81 C 20 2.17 17.83 0 14.19 0 Z M 15 13.71 C 15 15.28 14.14 15.65 13.1 14.53 C 12.62 14.02 11.88 14.06 11.46 14.62 L 10.87 15.41 C 10.4 16.04 9.62 16.04 9.15 15.41 L 8.55 14.61 C 8.13 14.05 7.39 14.01 6.91 14.52 C 5.86 15.64 5 15.27 5 13.71 V 7.08 C 5 4.71 5.56 4.12 7.78 4.12 H 12.22 C 14.44 4.12 15 4.71 15 7.08 V 13.71 Z"/>
                    </svg>
                <span class="ms-3">Receipts</span>
                </a>
            </li>
            <li>
                <button on:click={requestForm} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Visitor Request Form</span>
                </button>
            </li>
            <li>
                <button on:click={maintenanceForm} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                    <span class="ms-3">Maintenance Request Form</span>
                </button>
            </li>
            <li>
                <button on:click={passwordChange} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 22 22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 8v8"></path>
                    <path d="m8.5 14 7-4"></path>
                    <path d="m8.5 10 7 4"></path>
                    </svg>
                    <span class="ms-3">Change Password</span>
                </button>
            </li>
        </ul>
    </div>
</aside>

 