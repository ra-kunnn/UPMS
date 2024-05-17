<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		room: 'Jane Doe',
		monthlyRent: 5000
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Billing Form</header>
		<article>mm/dd/yyyy</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Room (automate)</span>
				<input class="input" type="text" disabled />
			</label>

			<label class="label">
				<span>Monthly Rent</span>
				<input class="input" type="number" bind:value={formData.monthlyRent} placeholder="" />
			</label>
            
			<label class="label">
				<span>Water Bill</span>
				<input class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Electricity Bill</span>
				<input class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Hut Rent</span>
				<input class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Visitor Overnight Bill</span>
				<input class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Maintenance Bill</span>
				<input class="input" type="number" placeholder="" />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Release Bill</button>
		</footer>
	</div>
{/if}