<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		tenant: "John Pork",
		contact: "09666666666",
		room: "102"
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
		<header class={cHeader}>Edit Details for (last name)</header>
		<article>mm/dd/yyyy</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Tenant (automate)</span>
				<input class="input" bind:value={formData.tenant} type="text" disabled />
			</label>

			<label class="label">
				<span>Contact Number (automate)</span>
				<input class="input" bind:value={formData.contact} type="text" />
			</label>

			<label class="label">
				<span>Room Assignment (selected should be current room)</span>				
					<select class="select">
						<option value="A">Room A</option>
						<option value="B">Room B</option>
						<option value="C">Room C</option>
						<option value="D">Room D</option>
						<option value="101">Room 101</option>
					</select>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Assign Room</button>
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
		</footer>
	</div>
{/if}