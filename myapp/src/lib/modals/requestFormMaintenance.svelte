<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import Cookies from 'js-cookie';
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

	const dormNo = Cookies.get('dormNo');
	
	const requestMaintenance = async (event: Event) => { 

		event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);


		const description = formData.get('description') as string;
		const startDate = formData.get('startDate') as string; 
    	const startTime = formData.get('startTime') as string;
		const endDate = formData.get('endDate') as string; 
    	const endTime = formData.get('endTime') as string;
		
		const startDateTimeString = `${startDate}T${startTime}:00`; // e.g., '2024-06-01T14:30:00'
    	const startDateTime = new Date(startDateTimeString);
		const endDateTimeString = `${endDate}T${endTime}:00`; // e.g., '2024-06-01T14:30:00'
    	const endDateTime = new Date(endDateTimeString);
		const startTimestamp = startDateTime.toISOString();
		const endTimestamp = endDateTime.toISOString();


		//inserting to Application Form
		const { error: maintenanceError } = await supabase
		  .from('Maintenance Info') 
		  .insert([
		    {
			  maintenanceRequest: description,
		      dormNo: dormNo,
			  startDateOfMaintenance: startTimestamp,
			  endDateOfMaintenance: endTimestamp,
			  isDone: false,

		    },
		  ]);

		  if(maintenanceError){
			alert(maintenanceError);
		  	alert(' There was an error with the maintenance request');
		  return;
		  }
		  

		  alert('Request sent!');
		  remCookie();
		  window.location.reload();
		  parent.onClose();

	};
	function remCookie(){
		Cookies.remove('dormNo');
	}
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Maintenance Request Form</header>
		<article>This form is for notifying the manager about maintenance idk edit this pls.</article>
		<!-- Enable for debugging: -->
		<form on:submit={requestMaintenance} class="modal-form {cForm}">
			<div class="flex gap-2">
				<label class="label w-full">
					<span>Short Description of Maintenance Purpose</span>
					<input name="description" id="description" class="input" type="text" />
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label w-1/2">
					<span>Starting Date of Maintenance</span>
					<input name="startDate" id="startDate" class="input" type="date" />
				</label>
				<label class="label w-1/2">
					<span>Starting Time of Maintenance</span>
					<input name="startTime" id="startTime" class="input" type="time" />
				</label>
			</div>

			<div class="flex gap-2">
				<label class="label w-1/2">
					<span>Ending Date of Maintenance</span>
					<input name="endDate" id="endDate" class="input" type="date" />
				</label>
				<label class="label w-1/2">
					<span>Ending Time of Maintenance</span>
					<input name="endTime" id="endTime" class="input" type="time" />
				</label>
			</div>

			<!-- prettier-ignore -->
		 <footer class="modal-footer {parent.regionFooter}">
                <button type="submit" class="btn {parent.buttonPositive}">Submit</button>
                <button type="button" class="btn {parent.buttonNeutral}"on:click={() => { parent.onClose(); remCookie(); }}>{parent.buttonTextCancel}</button>
            </footer>
			
		</form>
		
	</div>
{/if}
