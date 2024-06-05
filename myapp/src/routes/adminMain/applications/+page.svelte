<script lang="ts">
	import Header from '$lib/admin/headerAdmin.svelte';
    import Aside from '$lib/admin/asideAdmin.svelte';
    import HideOverflow from '$lib/hideOverflowX.svelte';
    import Profile from '$lib/admin/profileAdmin.svelte';
    import { Modal, getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    const modalStore = getModalStore();
    import { createEventDispatcher } from 'svelte';
    import { supabase } from '$lib/supabaseClient';


    const dispatch = createEventDispatcher();

    function assignTenants(): void {
        const modal: ModalSettings = {
        type: 'component',
        component: 'AssignTenants',
        };
        modalStore.trigger(modal);
    }
    export let data:PageData;

    const logout = async () => {
        const { supabase } = data; // Destructure supabase from data
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error);
        }
    };
    
    interface User {
        customerName: string;
        customerID: number;
        customerSex: string;
        customerPhone: number;
        customerEmail: string;
    }
    interface Application {
        applicationID: number;
        customerID: number;
        dormNo: number;
        startOfTenancy: Date;
    }
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
    let roomRows: Room[] = [];
    let applicationRows: Application[] = [];
    let userRows: User[] = [];

    onMount(() => {
        try {
            roomRows = data.rooms || [];
            applicationRows = data.application || [];
            userRows = data.user || [];
        } catch (error) {
            console.error(error);
            roomRows = [];
        }
    });


const acceptApplication = async (appID: number, customerID: number, dormNo: number) => {

     console.log("accepting to tenant "+ appID, customerID, dormNo)

     //appid for deletion, customerid for reference in customer and deletion after, dorm no for dorm update


    const { data: user, error: userError } = await supabase
        .from('Potential Customer')
        .select('*')
        .eq('customerID',customerID)
        .single();

    if (userError) {
        alert('Error fetching user details');
        return;
    }

    console.log("fetched user data")

    const { data: application, error: applicationError } = await supabase
        .from('Application Form')
        .select('startOfTenancy')
        .eq('applicationID', appID )
        .single();

    if (applicationError) {
    alert('Error fetching application details');
    console.error(applicationError);
    return;
    }

    const startOfTenancy = new Date(application.startOfTenancy);

        console.log("start of tenancy?" +startOfTenancy)

        if (isNaN(startOfTenancy.getTime())) {
      throw new Error('Invalid start of tenancy date');
    }

     //adding user to tenant
     const { error: insertTenantError } = await supabase
       .from('Tenant') 
       .insert([
         {
           tenantName: user.customerName, 
           tenantSex: user.customerSex, 
           userID: user.userID, 
           dormNo: dormNo,
           tenantEmail: user.customerEmail, 
           tenantPhone: user.customerPhone,
           startOfTenancy: startOfTenancy,
         },
       ]);

       console.log("checking tenant details: " +user.customerName, user.customerSex, user.userID, dormNo, user.customerEmail, user.customerPhone, startOfTenancy.toISOString().split('T')[0] )

       if(insertTenantError){
             alert(' There was an error with adding the tenant');
             return;
        }

        console.log("inserted tenant")

       //deleting application
        const { error: deleteAppError } = await supabase
            .from('Application Form')
            .delete()
            .eq('applicationID',appID);

         if(deleteAppError){
             alert(' There was an error with clearing applications');
             return;
        }

        console.log("deleted app")

        //deleting user
        const { error: deleteUserError } = await supabase
            .from('Potential Customer')
            .delete()
            .eq('customerID',customerID); 

        if(deleteUserError){
             alert(' There was an error with converting user account');
             return;
        }

        console.log("deleted user")

        //get availableSlots value
        const { data: availData, error: availError } = await supabase
            .from('Availability')
            .select('availableSlots')
            .eq('dormNo', dormNo )
            .single();

        let availSlots = availData.availableSlots - 1;

        console.log("slots")

        //get preexistingTenants value
        const { data: preexData, error: preexError } = await supabase
            .from('Availability')
            .select('preexistingTenants')
            .eq('dormNo', dormNo )
            .single();

          let preexTenants = preexData.preexistingTenants + 1;  

          console.log("preex")

        //update availableSlots & preexisting tenants
        const { error: updateSlotsError } = await supabase
            .from('Availability')
            .update({ availableSlots: availSlots , preexistingTenants: preexTenants})
            .eq('dormNo', dormNo);

        if(updateSlotsError){
             alert(' There was an error with updating availability 1');
             return;
        }

        console.log("slots and preex update")


        if(availSlots===0){
            //update Availlability if updated available slots = 0
            const { error: updateAvailError } = await supabase
                .from('Availability')
                .update({ availability: false })
                .eq('dormNo', dormNo);

            if(updateAvailError){
             alert(' There was an error with updating availability 2');
             return;
            }

            console.log("avail update")

        }

        //get currppl value
        const { data: currdata, error: currerror } = await supabase
            .from('Dorm Room')
            .select('currentPeople')
            .eq('dormNo', dormNo )
            .single();

          let currppl = currdata.currentPeople - 1; 

          console.log("currppl") 

        //update room
        const { error: updateDormError } = await supabase
          .from('Dorm Room')
          .update({ currentPeople: currppl })
          .eq('dormNo', dormNo);

        if(updateDormError){
             alert(' There was an error with updating dorm values');
             return;
        }

        console.log("updated dorm")

        alert('Tenant applied successfully');
        window.location.reload();
    };


    const denyApplication = async (appID: number, customerID: number) => {

        console.log("cancelling application "+ appID)

           const { error: deleteError } = await supabase
               .from('Application Form')
               .delete()
               .eq('applicationID',appID);

           if (deleteError) {
                       console.error('Error deleting application:', error);
                       alert('Error deleting application');
                   } 

           const { error: updateError } = await supabase
               .from('Potential Customer')
               .update({ hasApplied: false })
               .eq('customerID', customerID);

           if(updateError){
             alert(' There was an error with the dorm application');
             return;
           }

           alert('Application deleted successfully');
           window.location.reload();    

    };




</script>
<HideOverflow />
<div class="min-h-screen flex-auto w-full h-full font-sans text-surface-900 bg-gradient-to-br from-primary-100 via-slate-300 to-secondary-300">
    <Header {logout}/>
    <Aside />
    <header class="sm:ml-60 lg:ml-80">
        <div class="w-auto p-10">
            <div>
                <div class="flex pb-8 max-md:pb-4">
                    <h1 class="h1 font-bold md:text-5xl">Room Applications</h1>
                </div>
                
                <div class="col-span-3 grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-4 text-surface-800">

                    {#each applicationRows as applicationRow}
                        <div class="col-span-1 card card-hover overflow-hidden shadow bg-white">
                            <header>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="object-cover aspect-square w-full" alt="profile pic" />
                            </header>

                            <div class="p-4">
                                <div class="flex m-auto justify-between">
                                    <div class="block">
                                        {#each userRows as userRow} {#if userRow.customerID === applicationRow.customerID}<h4 class="h4 pr-3 text-2 xl font-semibold tracking-tight">{userRow.customerName}</h4>{/if}{/each}
                                        {#each roomRows as roomRow} {#if roomRow.dormNo === applicationRow.dormNo}<p class="text-base">applied for <span class="font-semibold">Room {roomRow.roomName}</span></p>{/if}{/each}
                                        <p class="text-base pb-2">starting on: {applicationRow.startOfTenancy}</p>
                                        {#each userRows as userRow} {#if userRow.customerID === applicationRow.customerID}<p class="text-sm text-surface-400">{userRow.customerPhone}<br>{userRow.customerEmail}</p>{/if}{/each}
                                    </div>
                                </div>
                            </div>

                            <div class="flex p-4 py-2 gap-2">
                                <button on:click={() => {acceptApplication(applicationRow.applicationID, applicationRow.customerID, applicationRow.dormNo); }}  class="btn btn-sm text-white variant-filled-success w-full">Accept</button>
                            </div>

                            <div class="flex p-4 pt-0 gap-2">
                                <button on:click={() => {denyApplication(applicationRow.applicationID, applicationRow.customerID); }} class="btn btn-sm text-white variant-filled-error w-full">Deny</button>
                            </div>
                        </div>
                    {/each}
                    
                </div>

                <hr class="my-10 max-md:my-8 h-0.5 border-t-0 bg-neutral-100" />
                
            </div>
        </div>
    </header>
</div>