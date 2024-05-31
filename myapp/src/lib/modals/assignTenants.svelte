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
	import { onMount } from 'svelte';


	const dormNo = Cookies.get('dormNo');
	const roomName = Cookies.get('roomName');
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
	interface Availability {
        dormNo: number;
        availability: boolean;
        availableSlots: number;
        preexistingTenants: number;
        // Add other columns as needed
    }
	let tenantRows: Tenant[] = [];
    let roomRows: Room[] = [];
	let availableRooms: Availability[] = [];
    
            
	onMount(async () => {
		const {data: allTenantData, error: allTenantDataError} = await supabase
			.from('Tenant')
			.select('*');

		const { data: roomData, error: roomError } = await supabase
			.from('Dorm Room')
			.select('*');

		const {data: availableData, error: availableError} = await supabase
			.from('Availability')
			.select('*')
			.eq('dormNo', dormNo);
		try {
            tenantRows = allTenantData || [];
            roomRows = roomData || [];
			availableRooms = availableData || [];
        } catch (error) {
            console.error(allTenantDataError);
            tenantRows = [];
        }
		console.log(allTenantData);
		console.log(roomData);
	});

	const addTenant = async (event: Event) => { 

		event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

		let tenants = [];
		for (let i = 1; i <= availableRooms[0]?.availableSlots; i++) {
			const tenantID = formData.get(`tenant${i}`);
			if (tenantID) {
				tenants.push(tenantID);
			}
		}
		
		console.log('Selected Tenants:', tenants);

		//inserting to Application Form
		for (const tenantID of tenants) {
			const { error: tenantError } = await supabase
				.from('Tenant')
				.update({
					dormNo: dormNo,
				})
				.eq('tenantID', tenantID);

			if (tenantError) {
				alert(tenantError);
				alert('There was an error with the maintenance request');
				return;
			}
			const { data: currentAvailability, error: availabilityFetchError } = await supabase
				.from('Availability')
				.select('availableSlots, preexistingTenants')
				.eq('dormNo', dormNo)
				.single();

			if (availabilityFetchError || !currentAvailability) {
				alert(`Error fetching availability data for dorm ${dormNo}: ${availabilityFetchError.message}`);
				continue;
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
		}
		  

		  alert('Tenants room assignment updated!');
		  remCookie();
		  window.location.reload();
		  parent.onClose();

	};
	function remCookie(){
		Cookies.remove('dormNo');
		Cookies.remove('roomName');
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
		<form on:submit={addTenant} class="modal-form {cForm}">
			<label class="label">
				<span>Room {roomName}</span>
				<input class="input" value={dormNo} type="text" disabled />
			</label>

			{#each availableRooms as availableRoom}
				{#each Array(availableRoom.availableSlots) as _, index}
					<label class="label">
						<span>Tenant {index + 1}</span>				
							<select name={"tenant" + (index + 1)} class="select">
								<option value="">None</option>
								{#each tenantRows as tenantRow}{#if tenantRow.dormNo != dormNo}<option value= {tenantRow.tenantID}>{tenantRow.tenantName}</option>{/if}{/each}
							</select>
					</label>

				{/each}
			{/each}
		<!-- prettier-ignore -->
			<footer class="modal-footer {parent.regionFooter}">
				<button class="btn {parent.buttonPositive}">Confirm</button>
				<button class="btn {parent.buttonNeutral}" on:click={() => { parent.onClose(); remCookie(); }}>{parent.buttonTextCancel}</button>
			</footer>
		</form>
	</div>
{/if}