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
	const roomName = Cookies.get('roomName');
	const dormNo = Cookies.get('dormNo');
	const monthlyRent = Cookies.get('monthlyRent');
	// We've created a custom submit function to pass the response and close the modal.
	const currentDate = new Date();
	const issueBill = async (event: Event) => { 

		event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

		const waterBill = formData.get('waterBill');
		const electricBill = formData.get('electricBill');
		const hutRent = formData.get('hutRent');
		const visitorBill = formData.get('visitorBill');
		const maintenanceBill = formData.get('maintenanceBill');

		//inserting to Application Form
		const { error: billError } = await supabase
		  .from('Tenant Bill') 
		  .insert([
		    {
		      dormNo: dormNo,
			  dateIssued: currentDate,
			  paymentStatus: false,
			  datePaid: null,
			  monthlyRent: monthlyRent,
			  waterBill: waterBill,
			  electricityBill: electricBill,
			  hutRent: hutRent,
			  visitorOvernightBill: visitorBill,
			  maintenanceBill: maintenanceBill

		    },
		  ]);

		  if(billError){
			alert(billError);
		  	alert(' There was an error with bill issuance');
		  return;
		  }
		  

		  alert('Bill issued!');
		  remCookie();
		  window.location.reload();
		  parent.onClose();

	};
	function remCookie(){
		Cookies.remove('dormNo');
		Cookies.remove('roomName');
		Cookies.remove('monthlyRent');
	}
	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>Billing Form for Room {roomName}</header>
		<article>{currentDate}</article>
		<!-- Enable for debugging: -->
		<form on:submit={issueBill} class="modal-form {cForm}">
			<label class="label">
				<span>Monthly Rent</span>
				<input name="monthlyRent" class="input" type="number" value={monthlyRent} placeholder={monthlyRent} disabled/>
			</label>
            
			<label class="label">
				<span>Water Bill</span>
				<input name="waterBill" class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Electricity Bill</span>
				<input name="electricBill" class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Hut Rent</span>
				<input name="hutRent"class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Visitor Overnight Bill</span>
				<input name="visitorBill" class="input" type="number" placeholder="" />
			</label>

            <label class="label">
				<span>Maintenance Bill</span>
				<input name="maintenanceBill" class="input" type="number" placeholder="" />
			</label>
		
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonPositive}" >Release Bill</button>
			<button class="btn {parent.buttonNeutral}" on:click={() => { parent.onClose(); remCookie(); }}>{parent.buttonTextCancel}</button>
		</footer>
		</form>
	</div>
{/if}