<script>
	import LoginHeader from '$lib/loginHeader.svelte';
	import PolygonBG from '$lib/polygonBG.svelte';
	import HideOverflow from '$lib/hideOverflow.svelte';
</script>

<HideOverflow />

<div class="min-h-screen font-sans text-slate-800 bg-slate-300">
	<div class="mx-auto w-full">

		<LoginHeader />

		<div class="h-screen flex items-center justify-center relative z-20 mx-auto">
			<div class="block rounded-lg bg-white shadow-lg float-left w-5/12 m-10 px-12 pt-12 pb-6">
				<div class="flex flex-row gap-3 pb-4">
					<h1 class="font-semibold text-4xl my-auto">Sign up</h1>
				</div>
				<div class="text-base text-slate-400 pb-8">Create your account if you don't have one yet!</div>

				<form class="flex flex-col">
					<div class="flex flex-row pb-2">
						<div class="flex-auto pr-1">
							<label for="fname" class="block mb-2 text-xs font-medium text-black">First Name</label>
							<div class="relative text-slate-400"> 
								<input type="text" name="fname" id="fname" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
							</div>
						</div>
						<div class="flex-auto px-1">
							<label for="lname" class="block mb-2 text-xs font-medium text-black">Last Name</label>
							<div class="relative text-slate-400"> 
								<input type="text" name="lname" id="lname" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
							</div>
						</div>
						<div class="flex-1 pl-1">
							<label for="sex" class="block mb-2 text-xs font-medium text-black">Sex</label>
							<div class="relative text-slate-400"> 
								<select id="sex" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
									<option selected hidden></option>
									<option value="M">Male</option>
									<option value="F">Female</option>
								</select>
							</div>
						</div>
					</div>

					<div class="flex flex-row pb-2">
						<div class="flex-auto pr-1">
							<label for="email" class="block mb-2 text-xs font-medium text-black">Email Address</label>
							<div class="relative text-slate-400">
								<input type="email" name="email" id="email" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="name@company.com" autocomplete="off">
							</div>
						</div>
						<div class="pl-1">
							<label for="text" class="block mb-2 text-xs font-medium text-black">Phone Number</label>
							<div class="relative text-slate-400">
								<input type="text" name="text" id="text" placeholder="09..." class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
							</div>
						</div>
					</div>

					<div class="flex flex-row pb-2">
						<div class="flex-auto pr-1">
							<label for="password" class="block mb-2 text-xs font-medium text-black">Password</label>
							<div class="relative text-slate-400">
								<input type="password" name="password" id="password" placeholder="••••••••••" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
							</div>
						</div>
					</div>

					<div class="flex flex-row pb-6">
						<div class="flex-auto pr-1">
							<label for="confirmPassword" class="block mb-2 text-xs font-medium text-black">Confirm Password</label>
							<div class="relative text-slate-400">
								<input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••••" class="mb-2 bg-slate-50 text-slate-600 border focus:border-transparent border-slate-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-slate-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autocomplete="off">
							</div>
						</div>
					</div>
					<button type="submit" class="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Sign up</button>
				</form>
			</div>
		</div>
		
		<PolygonBG />
	</div>
</div>