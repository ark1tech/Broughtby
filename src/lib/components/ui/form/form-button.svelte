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
		class="font-[500] tracking-[0.015em] flex flex-row items-center px-[1rem] gap-[0.6rem]
			bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] text-white
			"
	>
		<Button.Root type="submit" on:click on:keydown {...$$restProps}>Submit</Button.Root>
	</div>
</div>
