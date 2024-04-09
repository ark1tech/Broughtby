<script>
	// @ts-nocheck

	export let label;
	export let icon;
	export let href;

	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop - 50,
			behavior: 'smooth'
		});
	}
</script>

<div
	class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-lg overflow-clip
"
>
	<a
		class=" text-white flex flex-row items-center py-2 px-[0.9rem] gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a]
			"
		on:click={handleAnchorClick}
		{href}
	>
		{@html icon}
		{label}
	</a>
</div>
