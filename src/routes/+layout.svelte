<script>
	import NavBar from './NavBar.svelte';
	import './app.css';
</script>

<div class="w-full flex flex-col items-center">
	<div class="px-[7vw] min-h-screen flex flex-col w-full max-w-[1500px] items-center">
		<navbar
			class="z-50 px-[7vw] py-[2vh] backdrop-blur-[10px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]"
		>
			<NavBar />
		</navbar>
		<main class="w-full">
			<slot />
		</main>
		<footer></footer>
	</div>
</div>
