<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { redirect } from '@sveltejs/kit';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Maintenance Request Form</header>
		<article>This form is for notifying the manager about maintenance idk edit this pls.</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<div class="flex gap-2">
				<label class="label w-full">
					<span>Short Description of Maintenance Purpose</span>
					<input name="description" id="description" class="input" type="text" />
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label w-1/2">
					<span>Starting Date of Visit</span>
					<input name="startDate" id="startDate" class="input" type="date" />
				</label>
				<label class="label w-1/2">
					<span>Starting Time of Visit</span>
					<input name="startTime" id="startTime" class="input" type="time" />
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label w-1/2">
					<span>Ending Date of Visit</span>
					<input name="endDate" id="endDate" class="input" type="date" />
				</label>
				<label class="label w-1/2">
					<span>Ending Time of Visit</span>
					<input name="endTime" id="endTime" class="input" type="time" />
				</label>
			</div>

			<!-- prettier-ignore -->
		 <footer class="modal-footer {parent.regionFooter}">
                <button type="submit" class="btn {parent.buttonPositive}">Submit</button>
                <button type="button" class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            </footer>
			
		</form>
		
	</div>
{/if}
