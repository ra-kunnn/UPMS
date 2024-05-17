<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		room: "A"
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
		<header class={cHeader}>Change Room</header>
		<article>mm/dd/yyyy</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Room (automate)</span>
				<input class="input" bind:value={formData.room} type="text" disabled />
			</label>

			<label class="label">
				<span>Tenant 1</span>				
					<select class="select">
						<option value="id1">Gian Paolo Plariza</option>
						<option value="id2">Arwen Eve Veralio</option>
						<option value="id3">Chester John Ratilla</option>
						<option value="id4">Violette Gwen Rai Rosales</option>
						<option value="id5">Melyssa Villaflores</option>
					</select>
			</label>

			<label class="label">
				<span>Tenant 2</span>				
					<select class="select">
						<option value="id1">Gian Paolo Plariza</option>
						<option value="id2">Arwen Eve Veralio</option>
						<option value="id3">Chester John Ratilla</option>
						<option value="id4">Violette Gwen Rai Rosales</option>
						<option value="id5">Melyssa Villaflores</option>
					</select>
			</label>

			<label class="label">
				<span>Tenant 3</span>				
					<select class="select">
						<option value="id1">Gian Paolo Plariza</option>
						<option value="id2">Arwen Eve Veralio</option>
						<option value="id3">Chester John Ratilla</option>
						<option value="id4">Violette Gwen Rai Rosales</option>
						<option value="id5">Melyssa Villaflores</option>
					</select>
			</label>

			<label class="label">
				<span>Tenant 4</span>				
					<select class="select">
						<option value="id1">Gian Paolo Plariza</option>
						<option value="id2">Arwen Eve Veralio</option>
						<option value="id3">Chester John Ratilla</option>
						<option value="id4">Violette Gwen Rai Rosales</option>
						<option value="id5">Melyssa Villaflores</option>
					</select>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Confirm</button>
		</footer>
	</div>
{/if}