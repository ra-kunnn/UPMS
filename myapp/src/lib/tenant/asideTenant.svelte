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

<aside class="fixed top-20 left-0 z-20 lg:w-80 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white shadow">
        <ul class="space-y-2 font-medium">
            <li>
                <a href="/tenantMain" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 442 442">
                        <path d="M405.584,262.377h-26.899v124.201c0,22-17.7,39.799-39.801,39.799h-236.3c-22,0-39.8-17.699-39.8-39.799V262.377h-26.9 c-30,0-50.2-36.699-23.3-64.299l159.2-162.1c13.5-14.1,31.2-20.8,49-20.8s35.5,6.7,49.6,20.8l36.101,36.7v-32.4 c0-14.1,11.6-25.1,25.7-25.1h21.399c13.5,0,25.101,11,25.101,25.1v106.5l50.199,51.4 C455.685,225.678,436.185,262.377,405.584,262.377z"></path>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Home Page</span>
                </a>
            </li>
            <li>
                <a href="/tenantMain/receipts" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M 14.19 0 H 5.81 C 2.17 0 0 2.17 0 5.81 V 14.18 C 0 17.83 2.17 20 5.81 20 H 14.18 C 17.82 20 19.99 17.83 19.99 14.19 V 5.81 C 20 2.17 17.83 0 14.19 0 Z M 15 13.71 C 15 15.28 14.14 15.65 13.1 14.53 C 12.62 14.02 11.88 14.06 11.46 14.62 L 10.87 15.41 C 10.4 16.04 9.62 16.04 9.15 15.41 L 8.55 14.61 C 8.13 14.05 7.39 14.01 6.91 14.52 C 5.86 15.64 5 15.27 5 13.71 V 7.08 C 5 4.71 5.56 4.12 7.78 4.12 H 12.22 C 14.44 4.12 15 4.71 15 7.08 V 13.71 Z"/>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Receipts</span>
                </a>
            </li>
            <li>
                <button on:click={requestForm} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -32 576 576">
                        <path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Visitor Request Form</span>
                </button>
            </li>
            <li>
                <button on:click={maintenanceForm} class="flex items-center w-full p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 430 430">
                        <path d="M213.333333,7.10542736e-15 C330.959705,7.10542736e-15 426.666667,95.7069604 426.666667,213.333333 C426.666667,330.959705 330.959705,426.666667 213.333333,426.666667 C95.7069604,426.666667 7.10542736e-15,330.959705 7.10542736e-15,213.333333 C7.10542736e-15,95.7069604 95.7069604,7.10542736e-15 213.333333,7.10542736e-15 Z M214.247352,115.448129 C194.012816,100.058863 167.562553,94.7513198 148.606327,99.0378728 L148.606327,99.0378728 L181.426839,131.858386 L165.016583,164.678898 L132.19607,181.089155 L99.3755574,148.268642 C95.0886432,167.225458 100.396892,193.674631 115.785814,213.909668 C136.767529,230.046951 162.579882,235.491139 181.426839,230.319924 L181.426839,230.319924 L256.295918,301.394157 C270.493513,313.921446 284.691108,313.086294 298.888703,298.888699 C313.973648,283.803754 313.973648,268.71881 298.888703,253.633865 C252.755616,208.371626 230.011918,184.190056 230.657609,181.089155 C235.828347,162.243841 230.38415,136.430834 214.247352,115.448129 Z"> </path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Maintenance Request Form</span>
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
                    <span class="ms-3 text-sm lg:text-base">Change Password</span>
                </button>
            </li>
        </ul>
    </div>
</aside>

 