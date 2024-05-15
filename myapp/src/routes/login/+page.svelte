<script>
	import LoginHeader from '$lib/headerLogin.svelte';
	import HideOverflow from '$lib/hideOverflowY.svelte';
</script>

<HideOverflow />

<div class="min-h-screen font-sans text-surface-900 bg-gradient-to-br from-surface-300 via-primary-200 to-primary-500">
	<div class="mx-auto w-full">

		<LoginHeader />

		<div class="h-screen flex items-center justify-center relative z-20 mx-auto">
			<div class="block rounded-lg bg-white shadow-lg float-left w-3/12 m-10 p-10">
				<div class="flex flex-row gap-3 pb-4">
					<h1 class="h1 font-bold my-auto">Log in Form</h1>
				</div>
				<div class="text-base text-surface-400 pb-8">Enter your credentials to access UPMS.</div>

				<form class="flex flex-col">
					<div class="pb-2">
						<label for="email" class="block mb-2 text-xs font-medium text-surface-900">E-mail</label>
						<div class="relative text-surface-400"><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span> 
							<input type="email" name="email" id="email" class="pl-12 mb-2 bg-neutral-100 text-surface-600 border focus:border-transparent border-surface-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-surface-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off">
						</div>
					</div>
					<div class="pb-6">
						<label for="password" class="block mb-2 text-xs font-medium text-surface-900">Password</label>
						<div class="relative text-surface-400"><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span> 
							<input type="password" name="password" id="password" placeholder="••••••••••" class="pl-12 mb-2 bg-neutral-100 text-surface-600 border focus:border-transparent border-surface-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-surface-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="new-password">
						</div>
					</div>
						<button type="submit" class="w-full text-white btn variant-filled-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Login</button>
						<div class="text-sm font-light text-surface-400">Don't have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline">Sign Up</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>