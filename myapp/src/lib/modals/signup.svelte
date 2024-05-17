<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { redirect } from '@sveltejs/kit';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const formData = {
		email: 'test@gmail.com'
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
		<header class={cHeader}>Sign Up</header>
		<article>Create your account if you don't have one yet!</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<div class="flex gap-2">
				<label class="label">
					<span>First Name</span>
					<input class="input" type="text" />
				</label>
	
				<label class="label">
					<span>Last Name</span>
					<input class="input" type="text" />
				</label>

				<label class="label">
					<span>Sex</span>
					<select class="select">
						<option selected hidden></option>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label">
					<span>E-mail</span>
					<input class="input" type="email" placeholder="name@company.com" />
				</label>
	
				<label class="label">
					<span>Contact Number</span>
					<input class="input" type="text" placeholder="09..." />
				</label>
			</div>

			<label class="label">
				<span>Password</span>
				<input class="input" type="password" placeholder="••••••••••" />
			</label>

			<label class="label">
				<span>Confirm Password</span>
				<input class="input" type="password" placeholder="••••••••••" />
			</label>
			
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<a href="/userMain" class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Sign Up</a>
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
		</footer>
	</div>
{/if}