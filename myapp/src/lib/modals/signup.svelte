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
		<header class={cHeader}>Sign Up</header>
		<article>Create your account if you don't have one yet!</article>
		<!-- Enable for debugging: -->
		<form method="POST" action="?/signup" class="modal-form {cForm}">
			<div class="flex gap-2">
				<label class="label">
					<span>First Name</span>
					<input name="fname" id="fname"  class="input" type="text" />
				</label>
	
				<label class="label">
					<span>Last Name</span>
					<input name="lname" id="lname" class="input" type="text" />
				</label>

				<label class="label">
					<span>Sex</span>
					<select id="sex" name ="sex" class="select">
						<option selected hidden></option>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label">
					<span>E-mail</span>
					<input name="email" id="email"  class="input" type="email" placeholder="name@company.com" />
				</label>
	
				<label class="label">
					<span>Contact Number</span>
					<input name="phone" id="phone" class="input" type="text" placeholder="09..." />
				</label>
			</div>

			<label class="label">
				<span>Password</span>
				<input name="password" id="password" class="input" type="password" placeholder="••••••••••" />
			</label>

			<label class="label">
				<span>Confirm Password</span>
				<input name="conpassword" id="conpassword" class="input" type="password" placeholder="••••••••••" />
			</label>

			<!-- prettier-ignore -->
		 <footer class="modal-footer {parent.regionFooter}">
                <button type="submit" class="btn {parent.buttonPositive}">Sign Up</button>
                <button type="button" class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
            </footer>
			
		</form>
		
	</div>
{/if}
