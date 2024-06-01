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
    <div class="flex justify-between mx-auto sm:items-center">
        <span class="font-semibold text-xl">UPAD Management System</span>
        <div class="flex items-center gap-1">
            <p class="text-surface-300 text-sm pr-4">logged in as tenant</p>
            <button class="btn bg-inherit hover:variant-soft-primary rounded-none border-none px-5 py-2 font-semibold" on:click={handleLogout}>Log Out</button> 
        </div>
    </div>
</div>

<!--removed the a href value bc. baka di mag run ang log out-->