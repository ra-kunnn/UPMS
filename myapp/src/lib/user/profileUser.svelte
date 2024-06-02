
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let customerName;

  function onModalOpen() {
    dispatch('modalOpen', {customerName});
  }
</script>

<div on:show={onModalOpen}>
	<div class="flex bg-gradient-to-br variant-gradient-primary-secondary text-surface-50 p-3 sm:p-5 lg:p-9 rounded-3xl max-sm:rounded-xl">
	    <img class="object-cover size-20 sm:size-24 md:size-40 rounded-xl shadow-md" src="https://yt3.ggpht.com/F4Hc9ZLwy6PkyNfXr04K7SdwWUIHExFv9MWpHiBG5x-81SiZ2ysEUmodvWR4oDGAAU1-EpxI=s800-c-k-c0x00ffffff-no-rj" alt="pic">
	    <div class="flex items-end pl-2 md:pl-3 lg:pl-5">
	        <div class="block">
	            <h1 class="h1 break-words font-bold leading-none text-xl max-[480px]:text-xl max-sm:text-3xl md:text-4xl lg:text-5xl">{customerName}</h1>
	            <p class="font-bold text-xs max-[480px]:text-xs lg:text-base max-sm:font-semibold">User</p>
	        </div>
	    </div>
	</div>
</div>
