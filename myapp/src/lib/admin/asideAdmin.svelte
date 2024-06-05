<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';


    const modalStore = getModalStore();

    import { createEventDispatcher } from 'svelte';

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
                <a href="/adminMain" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/issueBills" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 219 219">
                        <path d="M195.051,0c-4.749,0-11.726,6.327-14.557,9.063l-6.828,6.697c-1.167,1.128-2.715,1.749-4.399,1.749 c-1.685,0-3.243-0.621-4.407-1.745l-6.931-6.717C153.275,4.552,145.564,0,139.823,0c-5.743,0-13.457,4.552-18.11,9.048l-6.946,6.713 c-1.167,1.128-2.742,1.749-4.435,1.749s-3.268-0.621-4.435-1.749l-6.948-6.713C94.409,4.661,86.517,0,80.833,0 S67.257,4.661,62.717,9.048l-6.946,6.713c-1.168,1.128-2.743,1.749-4.437,1.749c-1.693,0-3.269-0.621-4.437-1.749l-6.947-6.713 C39.566,8.679,30.355,0,24.782,0C18.422,0,16,8.619,16,16v187c0,7.381,2.422,16,8.782,16c5.357,0,14-8.122,14.943-9.032l7.069-6.729 c1.167-1.128,2.769-1.749,4.473-1.749c1.703,0,3.295,0.621,4.466,1.753l6.964,6.709C67.236,214.338,75.133,219,80.823,219 c5.688,0,13.582-4.662,18.12-9.047l6.952-6.714c1.167-1.128,2.743-1.749,4.437-1.749s3.27,0.621,4.438,1.749l6.947,6.713 c4.539,4.386,12.431,9.048,18.116,9.048s13.577-4.662,18.116-9.048l6.948-6.713c1.167-1.128,2.742-1.749,4.437-1.749 c1.693,0,3.269,0.621,4.436,1.749l6.948,6.713c3.497,3.379,9.864,9.048,14.333,9.048c5.233,0,7.949-5.683,7.949-16V16 C203,5.683,200.285,0,195.051,0z M162,164.5h-46v-19h46V164.5z M162,118.5H58v-18h104V118.5z M162,73.5H58v-19h104V73.5z"></path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Issue Bill</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/rooms" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 307 307">
                        <path d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898 c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592 c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624 c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828 c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"></path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Rooms</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/tenants" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 56 56">
                        <path d="M 38.7232 28.5490 C 43.1399 28.5490 46.9403 24.6047 46.9403 19.4690 C 46.9403 14.3949 43.1193 10.6356 38.7232 10.6356 C 34.3271 10.6356 30.5061 14.4771 30.5061 19.5101 C 30.5061 24.6047 34.3066 28.5490 38.7232 28.5490 Z M 15.0784 29.0215 C 18.8994 29.0215 22.2274 25.5703 22.2274 21.1125 C 22.2274 16.6958 18.8789 13.4294 15.0784 13.4294 C 11.2575 13.4294 7.8885 16.7779 7.9090 21.1536 C 7.9090 25.5703 11.2370 29.0215 15.0784 29.0215 Z M 3.6155 47.5717 L 19.2281 47.5717 C 17.0917 44.4697 19.7006 38.2247 24.1173 34.8146 C 21.8371 33.2944 18.8994 32.1645 15.0579 32.1645 C 5.7931 32.1645 0 39.0053 0 44.6957 C 0 46.5445 1.0271 47.5717 3.6155 47.5717 Z M 25.8018 47.5717 L 51.6241 47.5717 C 54.8493 47.5717 56 46.6472 56 44.8395 C 56 39.5394 49.3644 32.2261 38.7026 32.2261 C 28.0616 32.2261 21.4262 39.5394 21.4262 44.8395 C 21.4262 46.6472 22.5766 47.5717 25.8018 47.5717 Z"></path>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Tenants</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/bills" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M 14.19 0 H 5.81 C 2.17 0 0 2.17 0 5.81 V 14.18 C 0 17.83 2.17 20 5.81 20 H 14.18 C 17.82 20 19.99 17.83 19.99 14.19 V 5.81 C 20 2.17 17.83 0 14.19 0 Z M 15 13.71 C 15 15.28 14.14 15.65 13.1 14.53 C 12.62 14.02 11.88 14.06 11.46 14.62 L 10.87 15.41 C 10.4 16.04 9.62 16.04 9.15 15.41 L 8.55 14.61 C 8.13 14.05 7.39 14.01 6.91 14.52 C 5.86 15.64 5 15.27 5 13.71 V 7.08 C 5 4.71 5.56 4.12 7.78 4.12 H 12.22 C 14.44 4.12 15 4.71 15 7.08 V 13.71 Z"/>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Bill History</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/visitors" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -32 576 576">
                        <path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path>
                    </svg>
                <span class="ms-3 text-sm lg:text-base">Visitor Logbook</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/maintenances" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 430 430">
                        <path d="M213.333333,7.10542736e-15 C330.959705,7.10542736e-15 426.666667,95.7069604 426.666667,213.333333 C426.666667,330.959705 330.959705,426.666667 213.333333,426.666667 C95.7069604,426.666667 7.10542736e-15,330.959705 7.10542736e-15,213.333333 C7.10542736e-15,95.7069604 95.7069604,7.10542736e-15 213.333333,7.10542736e-15 Z M214.247352,115.448129 C194.012816,100.058863 167.562553,94.7513198 148.606327,99.0378728 L148.606327,99.0378728 L181.426839,131.858386 L165.016583,164.678898 L132.19607,181.089155 L99.3755574,148.268642 C95.0886432,167.225458 100.396892,193.674631 115.785814,213.909668 C136.767529,230.046951 162.579882,235.491139 181.426839,230.319924 L181.426839,230.319924 L256.295918,301.394157 C270.493513,313.921446 284.691108,313.086294 298.888703,298.888699 C313.973648,283.803754 313.973648,268.71881 298.888703,253.633865 C252.755616,208.371626 230.011918,184.190056 230.657609,181.089155 C235.828347,162.243841 230.38415,136.430834 214.247352,115.448129 Z"> </path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Maintenance Logbook</span>
                </a>
            </li>
            <li>
                <a href="/adminMain/applications" class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-700 group">
                    <svg class="flex-shrink-0 w-5 h-5 text-surface-500 transition duration-75 dark:text-surface-400 group-hover:text-surface-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 52">
                        <path d="M31.4,15.3h8.2c0.6,0,1.1-0.5,1.1-1.1l0,0c0-0.3-0.1-0.5-0.3-0.8L30.2,3.3C29.9,3.1,29.7,3,29.4,3l0,0 c-0.6,0-1.1,0.5-1.1,1.1v8.1C28.3,13.9,29.7,15.3,31.4,15.3z"></path> <path d="M49.5,25.7l-0.9-0.9c-0.6-0.6-1.5-0.6-2.2,0L34.5,36.7c-0.1,0.1,0,0.2,0,0.3v2.5c0,0.2,0,0.4,0.2,0.4h2.6 c0.1,0,0.2-0.1,0.3-0.1L49.5,28C50.2,27.2,50.2,26.3,49.5,25.7z"></path> <path d="M39.9,44.4h-1.8h-3.6h-1.7c-1.6,0-2.9-1.3-2.9-2.9v-5.4c0-0.8,0.2-1.6,0.9-2.1l9.5-9.5 c0.3-0.3,0.5-0.7,0.5-1.1v-2c0-0.8-0.7-1.5-1.5-1.5H28.3c-2.6,0-4.6-2.1-4.6-4.6V4.5C23.7,3.7,23,3,22.1,3H6.6C4.1,3,2,5.1,2,7.6 v36.8C2,46.9,4.1,49,6.6,49h29.4c2.2,0,4.2-1.6,4.6-3.7C40.7,44.9,40.3,44.4,39.9,44.4z M8.2,16.8c0-0.8,0.7-1.5,1.5-1.5h6.2 c0.9,0,1.5,0.7,1.5,1.5v1.5c0,0.8-0.7,1.5-1.5,1.5H9.7c-0.9,0-1.5-0.7-1.5-1.5V16.8z M23.7,36.7c0,0.8-0.7,1.5-1.5,1.5H9.7 c-0.9,0-1.5-0.7-1.5-1.5v-1.5c0-0.8,0.7-1.5,1.5-1.5h12.4c0.9,0,1.5,0.7,1.5,1.5V36.7z M26.8,27.5c0,0.8-0.7,1.5-1.5,1.5H9.7 c-0.9,0-1.5-0.7-1.5-1.5V26c0-0.8,0.7-1.5,1.5-1.5h15.5c0.9,0,1.5,0.7,1.5,1.5V27.5z"></path>
                    </svg>
                    <span class="ms-3 text-sm lg:text-base">Incoming Applications</span>
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