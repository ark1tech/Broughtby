<script>
	import NavBar from './NavBar.svelte';
	import './app.css';

	import { Toaster } from "$lib/components/ui/sonner";
</script>

<div class="w-full flex flex-col items-center">
	<div class="px-[7dvw] min-h-screen flex flex-col w-full max-w-[1500px] items-center">
		<navbar
			class="z-50 px-[7dvw] py-[1.5dvh] backdrop-blur-[10px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]"
		>
			<NavBar />
		</navbar>
		<main class="w-full">
			<Toaster />
			<slot />
		</main>
	</div>
</div>
