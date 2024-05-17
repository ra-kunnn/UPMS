<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
</script>

{#if $modalStore[0]}
	<div class="{cBase}">
		<header class={cHeader}>Confirm Application</header>
		<article>Would you like to apply to (room)?</article>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Yes</button>
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>No</button>
		</footer>
	</div>
{/if}