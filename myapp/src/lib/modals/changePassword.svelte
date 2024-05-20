<script lang="ts">
	import type { SvelteComponent } from 'svelte';

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


	const changepw = async (event: Event) => {
		event.preventDefault(); // Prevent default form submission

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const oldPassword = formData.get('oldpw') as string;
		const newPassword = formData.get('newpw') as string;
		const confirmPassword = formData.get('conpw') as string;



		if (newPassword !== confirmPassword) {
			alert('New Password and Confirm Password do not match.');
			return;
		}

		try {

			const {user , error} = await supabase.auth.updateUser({ password: new_password })

			if (error) {
				throw new Error('Failed to change password');
			}
			alert('Password changed successfully!');
			parent.onClose(); // Close the modal
		} catch (error) {
			alert(error.message);
		}
	};

</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Password Change</header>
		<!-- Enable for debugging: -->
		<form method="POST" action="?/changepw" class="modal-form {cForm}">
			<label class="label">
				<span>Old Password</span>
				<input name="oldpw" id="oldpw"  class="input" type="password" placeholder="••••••••••" />
			</label>

			<label class="label">
				<span>New Password</span>
				<input name="newpw" id="newpw" class="input" type="password" placeholder="••••••••••" />
			</label>

			<label class="label">
				<span>Confirm Password</span>
				<input name="conpw" id="conpw" class="input" type="password" placeholder="••••••••••" />
			</label>

			<footer class="modal-footer {parent.regionFooter}">
			<button type="submit" class="btn {parent.buttonPositive}">Change Password</button>
			<button type="button" class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
		</footer>
		</form>
		<!-- prettier-ignore -->
		
	</div>
{/if}