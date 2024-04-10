<script>
	// @ts-nocheck

	export let label;
	export let licon;
	export let href;
	export let ricon;

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop + 50,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-xl overflow-clip
"
>
	<a
		class="font-[500] tracking-[0.015em] flex flex-row items-center py-[0.5rem] px-[1.2rem] gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] hover:shadow-[inset_0_0px_50px_#013294] transition-all ease-linear
			"
		{href}
		on:click={handleAnchorClick}
	>
		{@html licon}
		{label}
		{@html ricon}
	</a>
</div>
