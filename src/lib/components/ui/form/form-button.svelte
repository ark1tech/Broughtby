<script lang="ts">
	import * as Button from '$lib/components/ui/button/index.js';

	type $$Props = Button.Props;
	type $$Events = Button.Events;
</script>

<div
	class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-xl overflow-clip
"
>
	<div
		class="w-full font-[500] tracking-[0.015em] flex flex-row items-center gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] hover:shadow-[inset_0_0px_50px_#013294] transition-all ease-linear text-white
			"
	>
		<Button.Root type="submit" class="px-[2rem]" on:click on:keydown {...$$restProps}
			>Submit</Button.Root
		>
	</div>
</div>
