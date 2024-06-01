<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { supabase } from '$lib/supabaseClient';
	import Cookies from 'js-cookie';

	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

	const email = Cookies.get('email');
	console.log('email in chpw:', email);


	const changepw = async (event: Event) => {
		event.preventDefault(); // Prevent the default form submission

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const oldPassword = formData.get('oldpw') as string;
		const newPassword = formData.get('newpw') as string;
		const confirmPassword = formData.get('conpw') as string;

		console.log('Form data working');

		if (newPassword !== confirmPassword) {
			alert('New Password and Confirm Password do not match.');
			return;
		}

		console.log(email, oldPassword)

		// Authenticate with current password
		const { error: signInError } = await supabase.auth.signInWithPassword({
			email,
			password: oldPassword,
		});

		if (signInError) {
			console.error('Sign-in error:', signInError);
			alert('Current password is incorrect.');
			return;
		}

		// Update password if authentication successful
		const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

		if (updateError) {
			console.error('Update error:', updateError);
			alert('Password change failed: ' + updateError.message);
			return;
		}

		alert('Password changed successfully!');
		Cookies.remove('email');
		parent.onClose(); // Close the modal
	};

	function remCookie(){
		Cookies.remove('email');
	}

	
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Password Change</header>
		<form on:submit={changepw} class="modal-form {cForm}">

			<label class="label">
				<span>Email</span>
				<input name="email" id="email" class="input" type="email" value="{email}" readonly />
			</label>

			<label class="label pb-3">
				<span>Old Password</span>
				<input name="oldpw" id="oldpw" class="input" type="password" placeholder="••••••••••" required />
			</label>

			<label class="label">
				<span>New Password</span>
				<input name="newpw" id="newpw" class="input" type="password" placeholder="••••••••••" required />
			</label>

			<label class="label">
				<span>Confirm Password</span>
				<input name="conpw" id="conpw" class="input" type="password" placeholder="••••••••••" required />
			</label>

			<footer class="modal-footer {parent.regionFooter}">
				<button type="submit" class="btn {parent.buttonPositive}">Change Password</button>
				<button type="button" class="btn {parent.buttonNeutral}" on:click={() => { parent.onClose(); remCookie(); }}>{parent.buttonTextCancel}</button>
			</footer>
		</form>
	</div>
{/if}
