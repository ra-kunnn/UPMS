<script>

    export let logout; // Receive the logout function through props

    // Use the logout function when the logout button is clicked
    const handleLogout = async () => {
        if (logout) {
            await logout(); // Call the logout function
        }
    };

</script>

<div class="sticky top-0 z-40 w-full px-5 py-5 mx-auto sm:px-8 xl:px-12 bg-white shadow-xl">
    <div class="flex justify-between mx-auto items-center">
        <span class="font-semibold max-sm:font-bold text-xl max-sm:text-base max-[480px]:text-xs">UPAD Management System</span>
        <div class="flex items-center gap-1">
            <p class="text-surface-300 text-sm text-right pr-4 max-sm:pr-1 max-sm:text-[10px]">logged in as user</p>
            <button class="btn bg-inherit hover:variant-soft-primary rounded-none border-none px-5 max-md:px-2 py-2 max-sm:text-sm max-[480px]:text-xs font-semibold" on:click={handleLogout}>Log Out</button> 
        </div>
    </div>
</div>