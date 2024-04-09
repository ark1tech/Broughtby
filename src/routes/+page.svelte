<script>
	// @ts-nocheck
	import Button from './Button.svelte';
	import Univ from '$lib/univ.svg';
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<svelte:head>
	<title>Broughtby</title>
	<meta name="description" content="CS 132 Pocari" />
</svelte:head>

<header class="flex flex-col items-center gap-[2rem] pt-[10rem] min-h-[100dvh] w-full">
	<h1 class="text-white w-fit text-center">
		Make payments easy <br /> for your <span class="text-[#0052FF]">sponsors</span>
	</h1>
	<p class="text-center">
		A payment solution built for student orgs and their events—no bureaucracy required.
	</p>
	<Button icon={''} label={'Join the waitlist'} href={'#overview'} />
</header>
<section class="w-full flex flex-col items-center gap-[4rem] mb-[10rem]">
	<h2 class="text-white w-fit text-center">Join orgs from top universities</h2>
	<div class="gradient-mask-l-60">
		<div class="marquee gradient-mask-r-60">
			<img src={Univ} alt="univ" class="marquee__content" />
			<img src={Univ} alt="univ" aria-hidden="true" class="marquee__content" />
		</div>
	</div>
</section>
<faq id="faq" class="w-full flex flex-col items-center min-h-[100dvh] gap-[2rem]">
	<h2 class="text-white w-fit text-center">FAQs</h2>

	<Accordion.Root class="w-full sm:max-w-[70%] text-white">
		<Accordion.Item value="item-1" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">Is Broughtby free?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					Yes, Broughtby is free to setup and use. However, we charge a 10% commission fee on
					transactions made on our platform.
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-2" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">
					How can I share my Broughtby campaign to potential sponsors?
				</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					You can customize a shortlink URL to point directly to your campaign website. It'll look
					like this: <span class="font-['JetBrains_Mono'] bg-[#3c3c3c86]"
						>broughtby.us/yourevent</span
					>
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-3" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">How are payments handled?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					From sponsors, we accept direct bank transfers. For your organization, we can send money
					through your bank or e-wallets. We issue official receipts and invoices automatically at
					no extra charge.
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-4" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">
					How do I share event metrics with my sponsors?
				</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					You can connect your execution platforms (i.e. Facebook/Instagram page, Zoom metrics) and
					we collect reach & audience data through their Analytics API. We provide dashboard
					templates where you can set targets for each metric so your sponsors know what to expect.
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-5" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">Who runs Broughtby?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					We're a team of three student leaders with cumulatively 10 years of experience in external
					affairs. We felt unsatisfied with how sponsorships were managed, so we decided to build a
					tool to streamline the process and allow marketing teams to maximize their potential.
				</p></Accordion.Content
			>
		</Accordion.Item>
	</Accordion.Root>
</faq>
