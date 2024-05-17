<script lang="ts">
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

    const modalStore = getModalStore();

    function testModal(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'Form',
        };
        modalStore.trigger(modal);
    }
</script>

<button class="btn variant-filled-primary" on:click={testModal}>Show Modal</button>