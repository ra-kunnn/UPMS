<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let tenantName;
  console.log("test"+tenantName);

  function onModalOpen() {
    dispatch('modalOpen', {tenantName});
  }
</script>

<div on:show={onModalOpen}>
	<div class="flex bg-gradient-to-br variant-gradient-primary-secondary text-surface-50 p-3 sm:p-5 lg:p-9 rounded-3xl max-sm:rounded-xl">
	    <img class="object-cover size-20 sm:size-24 md:size-40 rounded-xl shadow-md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic">
	    <div class="flex items-end pl-2 md:pl-3 lg:pl-5">
	        <div class="block">
	            <h1 class="h1 break-words font-bold leading-none text-xl max-[480px]:text-xl max-sm:text-3xl md:text-4xl lg:text-5xl">{tenantName}</h1>
	        </div>
	    </div>
	</div>
</div>
