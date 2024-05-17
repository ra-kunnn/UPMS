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
		<header class={cHeader}>To proceed, you must have an account.</header>
		<article>Log in to apply for a room you like!</article>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<a href="/login" class="btn {parent.buttonPositive}">Log In</a>
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Not Now</button>
		</footer>
	</div>
{/if}