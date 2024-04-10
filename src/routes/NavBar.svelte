<script>
	import logo from '$lib/broughtby.svg';
	import Button from './Button.svelte';

	const Hamburger_Menu = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`;

	const Right_Arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`;

	// @ts-ignore
	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			// @ts-ignore
			top: anchor.offsetTop + 50,
			behavior: 'smooth'
		});
	}
</script>

<div class="w-full flex flex-col items-center">
	<header class="flex flex-row justify-between items-center min-w-full max-w-[1500px]">
		<div class="flex-none">
			<a href="/">
				<img src={logo} alt="broughtby" />
			</a>
		</div>
		<nav class="">
			<ul class="flex-row justify-between font-light gap-[2.6rem] md:flex hidden items-center nav">
				<li><a href="#faq" on:click={handleAnchorClick}> FAQs </a></li>
				<li><a href="#contact" on:click={handleAnchorClick}> Contact Us </a></li>
				<li><Button licon={''} label={'Join the waitlist'} href={'#contact'} ricon={''} /></li>
			</ul>
			<div class="md:hidden block text-white">
				{@html Hamburger_Menu}
			</div>
		</nav>
	</header>
</div>

<style>
</style>
