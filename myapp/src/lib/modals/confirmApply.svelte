<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import Cookies from 'js-cookie';

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

	//cookies
	const customerID = Cookies.get('userID');
	const dormNo = Cookies.get('dormNo');

	console.log(customerID, dormNo);
	//releasing cookie
	//Cookies.remove('userID');


	const applyroom = async (event: Event) => { 

		event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);


		const startOfTenancy = formData.get('startOfTenancy') as Date;

		const currentDate = new Date().toISOString().split('T')[0];

		console.log(formData.get('startOfTenancy'));

		console.log(startOfTenancy, currentDate);

		if(startOfTenancy < currentDate){
			alert('Please enter valid date.');
		  return;
		}

		

		//setting hasApplied to true
		const { error: boolChangeError } = await supabase
		    .from('Potential Customer')
		    .update({ hasApplied: true })
		    .eq('customerID', customerID);

		if(boolChangeError){
		  alert(' There was an error with the dorm application');
		  return;
		}

		//inserting to Application Form
		const { error: applicationError } = await supabase
		  .from('Application Form') 
		  .insert([
		    {
		      customerID: customerID,
		      dormNo: dormNo,
		      startOfTenancy: startOfTenancy,
		    },
		  ]);

		  if(applicationError){
		  alert(' There was an error with the dorm application');
		  return;
		  }
		  

		  alert(' Application sent! See application status on your dashboard.');
		  remCookie();
		  window.location.reload();
		  parent.onClose();

	};

	function remCookie(){
		Cookies.remove('userID');
		Cookies.remove('dormNo');
	}


</script>

{#if $modalStore[0]}
	<div class="{cBase}">
		<header class={cHeader}>Confirm Application</header>
		<article>When is your preferred start of tenancy to {dormNo}?</article>
		<form on:submit={applyroom}>
			<input type="date" id="startOfTenancy" name="startOfTenancy" required/>
			<!-- prettier-ignore -->
			<footer class="modal-footer {parent.regionFooter}">
				<button type="submit" class="btn {parent.buttonPositive}">Yes</button>
				<button class="btn {parent.buttonNeutral}" on:click={() => { parent.onClose(); remCookie(); }}>No</button>
			</footer>
		</form>
	</div>
{/if}


