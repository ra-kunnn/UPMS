<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import Cookies from 'js-cookie';
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();
	const tenantID = Cookies.get('tenantID');
	const roomName = Cookies.get('roomName');
	const tenantName = Cookies.get('tenantName')
	const tenantPhone = Cookies.get('tenantPhone')
	interface Room {
        dormNo: number;
        PAX: number;
        airconStatus: boolean;
        personalCrStatus: boolean;
        personalSinkStatus: boolean;
        monthlyRent: number;
        floor: number;
        roomName: string;
        // Add other columns as needed
    }
    interface Tenant{
        tenantID: number;
        tenantName: string;
        tenantSex: string;
        dormNo: number;
        tenantEmail: string;
        tenantPhone: number;
    }
	let tenantRows: Tenant[] = [];
    let roomRows: Room[] = [];

	onMount(async () => {
		const {data: allTenantData, error: allTenantDataError} = await supabase
			.from('Tenant')
			.select('*')
			.eq('tenantID', tenantID)
			.single();

		const { data: roomData, error: roomError } = await supabase
			.from('Dorm Room')
			.select('*');

		try {
            tenantRows = allTenantData || [];
            roomRows = roomData || [];
        } catch (error) {
            console.error(allTenantDataError);
            tenantRows = [];
        }
		console.log(allTenantData);
		console.log(roomData);
	});

	

	// We've created a custom submit function to pass the response and close the modal.
	const editTenant = async (event: Event) => { 

		event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

		const name = formData.get('name') as string;
		const phone = formData.get('contact');
		const dormNo = formData.get('roomName');

		//inserting to Application Form
		const { error: tenantError } = await supabase
		  .from('Tenant') 
		  .update([
		    {
			  dormNo : dormNo,
		    },
		  ])
		  .eq('tenantID', tenantID);

		  if(tenantError){
			alert(tenantError);
		  	alert(' There was an error with the maintenance request');
		  	return;
		  }
		  const { data: currentAvailability, error: availabilityFetchError } = await supabase
				.from('Availability')
				.select('availableSlots, preexistingTenants')
				.eq('dormNo', dormNo)
				.single();

			if (availabilityFetchError || !currentAvailability) {
				alert(`Error fetching availability data for dorm ${dormNo}: ${availabilityFetchError.message}`);
				return;
			}

			const updatedAvailableSlots = currentAvailability.availableSlots - 1;
			const updatedPreexistingTenants = currentAvailability.preexistingTenants + 1;

			const { error: availabilityUpdateError } = await supabase
				.from('Availability')
				.update({
					availableSlots: updatedAvailableSlots,
					preexistingTenants: updatedPreexistingTenants,
				})
				.eq('dormNo', dormNo);

			if (availabilityUpdateError) {
				alert(`Error updating availability for dorm ${dormNo}: ${availabilityUpdateError.message}`);
			}
			if(updatedAvailableSlots==0){
            //update Availlability if updated available slots = 0
            const { error: updateAvailError } = await supabase
                .from('Availability')
                .update({ availability: false })
                .eq('dormNo', dormNo);
        }
		  alert('Request sent!');
		  remCookie();
		  window.location.reload();
		  parent.onClose();

	};
	function remCookie(){
		Cookies.remove('tenantID');
		Cookies.remove('roomName');
		Cookies.remove('tenantName')
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
		<form on:submit={editTenant} class="modal-form {cForm}">
			<label class="label">
				<span>Tenant</span>
				<input class="input" name="tenant" id="tenant" value={tenantName} type="text" disabled />
			</label>

			<label class="label">
				<span>Contact Number</span>
				<input class="input" name="contact" id="contact" value={tenantPhone} type="text" />
			</label>

			<label class="label">
				<span>Room Assignment</span>				
					<select name="roomName" id="roomName" class="select">
						{#each roomRows as roomRow}<option value= {roomRow.dormNo}>Room {roomRow.roomName}</option>{/each}
					</select>
			</label>
		
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}">Submit</button>
			<button class="btn {parent.buttonNeutral}" on:click={() => { parent.onClose(); remCookie(); }}>{parent.buttonTextCancel}</button>
		</footer>
		</form>
	</div>
{/if}