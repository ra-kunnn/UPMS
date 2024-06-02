<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	import { supabase } from '$lib/supabaseClient';

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

	const handleSubmit = async (event: Event) => {

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error: signInError } = await supabase.auth.signInWithPassword({
			email,
			password: password,
		});

		if (signInError) {
			console.error('Sign-in error:', signInError);
			alert('Incorrect Credentials.');
			return;
		}

	};
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Log In</header>
		<article>Enter your credentials to access UPMS.</article>
		<!-- Enable for debugging: -->
		<form method="POST" action="?/login" on:submit={handleSubmit} class="modal-form {cForm}">
			<label class="label">
				<span>Email</span>
				<input name="email" id="email" class="input" type="email" placeholder="name@company.com" required/>
			</label>

			<label class="label">
				<span>Password</span>
				<input name="password" id="password" class="input" type="password" placeholder="••••••••••" required/>
			</label>
			<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button type="submit" class="btn {parent.buttonPositive}">Log In</button>
			<button type="button" class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
		</footer>
		</form>
	</div>
{/if}