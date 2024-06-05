
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let managerName, managerEmail;

  function onModalOpen() {
    dispatch('modalOpen', { managerName, managerEmail });
  }
</script>

<div on:show={onModalOpen}>
  <div class="flex bg-gradient-to-br from-error-500 to-warning-600 text-surface-50 p-3 sm:p-5 lg:p-9 rounded-3xl max-sm:rounded-xl">
    <img class="object-cover size-20 sm:size-24 md:size-40 rounded-xl shadow-md" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic">
    <div class="flex items-end pl-2 md:pl-3 lg:pl-5">
        <div class="block">
            <h1 class="h1 break-words font-bold leading-none text-xl max-[480px]:text-xl max-sm:text-3xl md:text-4xl lg:text-5xl">{managerName}</h1>
            <h3 class="h3 text-sm max-[480px]:text-xs max-sm:text-sm md:text-xl lg:text-2xl">{managerEmail}</h3>
            <p class="font-bold text-xs max-[480px]:text-xs lg:text-base max-sm:font-semibold">Admin</p>
        </div>
    </div>
  </div>
</div>


