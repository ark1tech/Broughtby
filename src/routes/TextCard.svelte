<script>
	// @ts-nocheck

	export let heading;
	export let content;
	export let src;
</script>

<div class="flex-[1_1_0%]">
	<div
		class="w-full h-full rounded-[0.75rem] overflow-clip bg-gradient-to-b from-[#ffffff2c] via-[#a2a2a220] to-[#a2a2a200] p-[0.065rem]"
	>
		<div
			class=" relative w-full h-full p-10 flex flex-col gap-[3rem] bg-[#19191b] hover:bg-[#202023] ease-linear transition-all rounded-[0.75rem] justify-start"
		>
			<img {src} class="h-auto min-w-[20px] lg:w-[10dvh] w-[15dvh]" alt="" />
			<div class = "w-full flex flex-col justify-center gap-3 items-center">
				<h4 class="w-full">{heading}</h4>
				<p class="w-full">{content}</p>
			</div>
		</div>
	</div>
</div>

<!-- <div
	class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-xl overflow-clip
"
>
	<a
		class="font-[500] tracking-[0.015em] flex flex-row items-center py-[0.5rem] px-[1.2rem] gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a]
			"
		on:click={handleAnchorClick}
		{href}
	>
		{@html licon}
		{label}
		{@html ricon}
	</a>
</div> -->
