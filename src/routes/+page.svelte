<script lang="ts">
	// @ts-nocheck
	import Marquee from './Marquee.svelte';
	import Button from './Button.svelte';
	import TextCard from './TextCard.svelte';
	import ClickURL from '$lib/click.png';
	import Receipt from '$lib/receipt.svg';
	import Slow from '$lib/zzz.svg';
	import Puzzle from '$lib/mood-puzzled.svg';
	import Form from './form.svelte';

	const Right_Arrow = `<svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>`;

	import * as Accordion from '$lib/components/ui/accordion';
	import { gsap } from 'gsap/dist/gsap.js';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';

	import type { PageData } from './$types.js';

	export let data: PageData;

	gsap.registerPlugin(ScrollTrigger);
</script>

<svelte:head>
	<title>Broughtby</title>
	<meta name="description" content="Broughtby" />

	<meta property="og:title" content="Broughtby" />
	<meta property="og:type" content="product" />
	<meta property="og:url" content="https://broughtby.us" />
	<meta property="og:image" content="./meta.png" />

	<meta property="og:title" content="Broughtby" />
	<meta property="og:type" content="product" />
	<meta property="og:url" content="https://broughtby.us" />
	<meta property="og:image" content="./meta.png" />
	<meta property="og:image:width" content="1432" />
	<meta property="og:image:height" content="753" />

	<meta name="twitter:title" content="Broughtby" />
	<meta
		name="twitter:description"
		content="A payment solution built for student org events—no bureaucracy required."
	/>
	<meta name="twitter:image" content="https://broughtby.us" />
	<meta name="twitter:card" content="../lib/meta.png" />
</svelte:head>

<header
	class="flex flex-col items-center justify-between gap-[3rem] pt-[8rem] min-h-[100dvh] w-full"
>
	<div class="flex flex-col items-center gap-[2rem] w-full">
		<h1 class="text-white md:w-[60%] w-[80%] text-center">
			Make payments easy for your <span class="text-[#0052FF]">sponsors</span>
		</h1>
		<p class="text-center">
			A payment solution built for student org events—no bureaucracy required.
		</p>
		<Button licon={''} label={'Join the waitlist'} href={'#overview'} ricon={''} />
	</div>
	<div class="flex flex-col items-center pb-[3rem] gap-[2rem]">
		<h5 class="w-fit text-center">Join 14 orgs from the top universities</h5>
		<Marquee />
	</div>
</header>

<section
	class="w-full min-h-[90dvh] flex flex-col items-center pt-[5rem] gap-[3rem] justify-between"
>
	<h2 class="text-white md:w-[60%] w-[80%] text-center">Your persistent problems...</h2>
	<div class="flex flex-grow lg:flex-row flex-col w-full justify-evenly gap-[2rem]">
		<TextCard
			src={Receipt}
			heading={'Can\'t issue official receipts'}
			content={'Your org needs to be SEC-registered, but that comes with documents and taxes. Too much bureaucracy.'}
		/>
		<TextCard
			src={Slow}
			heading={'Slow passthrough services'}
			content={"You partner with an incorporated org to issue receipts, but they haven't replied to your emails in weeks."}
		/>
		<TextCard
			src={Puzzle}
			heading={'Can\'t support payment methods'}
			content={"The payments are being sent to some member's bank account, or you're collecting cheques from far-away company offices."}
		/>
	</div>
	<h2 class="text-white w-full text-center">
		now have <span class="text-[#0052FF]">solutions</span>
	</h2>
</section>

<section class="w-full min-h-[100dvh] flex flex-col items-center relative gap-4 pt-[1rem]">
	<div class="absolute z-0 gradient-mask-t-70 w-screen h-full">
		<div class="gradient-mask-b-70 w-full h-full">
			<div class="w-full h-full flex flex-col flex-grow bg-[url('$lib/bg3.svg')] bg-repeat"></div>
		</div>
	</div>
	<div class="relative z-1 gradient-mask-l-40">
		<div class="gradient-mask-r-90">
			<img alt="ClickURL" src={ClickURL} class="w-[900px] lg:min-w-[20dvw] min-w-[80dvw] h-auto" />
		</div>
	</div>
	<div
		class="relative z-1 py-[3rem] w-full min-h-[30dvh] flex lg:flex-row gap-10 flex-col justify-between items-center"
	>
		<div class="lg:w-1/2 w-full flex flex-col gap-9">
			<h3 class="w-full">
				Process payments <span class="drop-shadow-[0_4px_10px_#0052FFEE]">instantly</span>
			</h3>
			<p class="w-full">
				We'll handle the invoices, payment processing, official receipts, and anything else your
				sponsors need to have a hassle-free, on-the-books transaction.
			</p>
		</div>
		<div></div>
	</div>
	<div
		class="relative z-1 py-[3rem] w-full min-h-[30dvh] flex lg:flex-row gap-10 flex-col justify-between items-center"
	>
		<div class="lg:w-1/2 w-full flex flex-col gap-9">
			<h3 class="w-full">
				Customize your <span class="drop-shadow-[0_4px_10px_#0052FFEE]">campaign page</span>
			</h3>
			<p class="w-full">
				Create a professional & sleek campaign page with an easily shareable short-link. Show your
				sponsors you mean business.
			</p>
		</div>
		<div></div>
	</div>
</section>

<faq id="faq" class="w-full flex flex-col items-center pt-[11rem] min-h-[100dvh] gap-[2rem]">
	<h2 class="text-white w-fit text-center">Frequently Asked Questions</h2>

	<Accordion.Root class="w-full text-white">
		<Accordion.Item value="item-1" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">Is Broughtby free?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					Yes, Broughtby is free to setup and use. However, we charge a 7% processing fee on
					transactions made on our platform.
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-2" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">How do I set up my campaign?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					Once you are granted access to our platform, you can customize your campaign using 
					our intuitive drag-and-drop campaign editor. 
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-3" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">
					How can I share my Broughtby campaign to potential sponsors?
				</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					You can customize a shortlink URL to point directly to your campaign website. It'll look
					like this: <span class="font-['JetBrains_Mono'] bg-[#3c3c3c86]"
						>yourevent.broughtby.us/</span
					>
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-4" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">How are payments handled?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					From sponsors, we accept direct bank transfers. For your organization, we can send money
					through your bank account or e-wallet. We issue official receipts and invoices automatically at
					no extra charge.
				</p></Accordion.Content
			>
		</Accordion.Item>
		<Accordion.Item value="item-5" class="border-[#4e535eac]">
			<Accordion.Trigger
				><p class="text-white w-fit text-left">Who runs Broughtby?</p></Accordion.Trigger
			>
			<Accordion.Content
				><p class="w-fit">
					We're a team of three student leaders with cumulatively 10 years of managing sponsorships
					in unincorporated organizations. We're unsatisfied with the current workarounds to this
					problem, and that's why we're building a platform to fix payments once and for all.
				</p></Accordion.Content
			>
		</Accordion.Item>
	</Accordion.Root>
</faq>

<section
	id="contact"
	class="w-full min-h-[100dvh] flex flex-col items-center relative justify-between"
>
	<div class="flex-1 w-screen h-full absolute z-0">
		<div class=" glowbg h-full w-full"></div>
	</div>
	<div
		class="relative z-1 pt-[11rem] pb-[3rem] w-full flex lg:flex-row gap-10 flex-col justify-between"
	>
		<div class="lg:w-[50%] w-full flex flex-col gap-9">
			<h2 class="text-white w-full text-left">
				Maximize your <span class="text-[#0052FF]">event revenue</span>
			</h2>
			<p class="w-full">
				Be the first in line when we launch Broughtby—the only platform you need to manage
				sponsor payments and market to your event's full potential.
			</p>
		</div>
		<Form data={data.form} />
	</div>
	<div class="relative w-screen h-full bg-[#0e0e10]">
		<div class="absolute z-0 gradient-mask-l-30 w-full h-full">
			<div class="h-full w-full gradient-mask-r-30">
				<div
					class="h-full w-full bg-[url('$lib/bg.svg')] border-t-[0.5px] border-[#e7e7e767]"
				></div>
			</div>
		</div>
		<footer
			class="relative z-1 w-full h-full py-[3rem] flex lg:flex-row flex-col items-center justify-evenly gap-5"
		>
			<div class="flex flex-col gap-2 items-center z-2">
				<p class="text-sm w-full text-center">Biz Dev & Operations</p>
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Paolo De los Santos</h5>
					<a
						class="w-full text-center font-normal inline_url"
						href="https://www.linkedin.com/in/paolodelossantos"
						target="__blank">@paolodelossantos</a
					>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-center">
				<p class="text-sm w-full text-center">Tech & Product</p>
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Jose Kristian Resabal</h5>
					<a
						class="w-full text-center font-normal inline_url"
						href="https://www.linkedin.com/in/jkresabal"
						target="__blank">@jkresabal</a
					>
				</div>
			</div>
			<div class="flex flex-col gap-2 items-center">
				<p class="text-sm w-full">Design & Experience</p>
				<div class="flex flex-col gap-1">
					<h5 class="w-full text-center">Arki Mañago</h5>
					<a
						class="w-full text-center font-normal inline_url"
						href="https://www.linkedin.com/in/ark1tech"
						target="__blank">@ark1tech</a
					>
				</div>
			</div>
		</footer>
	</div>
</section>
