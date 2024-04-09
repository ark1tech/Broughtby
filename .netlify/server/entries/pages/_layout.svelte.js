import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
const logo = "/_app/immutable/assets/broughtby.D38P5xDZ.svg";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Hamburger_Menu = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>`;
  return `<div class="w-full flex flex-col items-center"><header class="flex flex-row justify-between items-center min-w-full max-w-[1500px]"><div class="flex-none" data-svelte-h="svelte-9kt9bj"><a href="/"><img${add_attribute("src", logo, 0)} alt="broughtby"></a></div> <nav class=""><ul class="flex-row justify-between font-light gap-[2.6rem] md:flex hidden items-center nav"><li><a href="#faq" data-svelte-h="svelte-1jj1isx">FAQs</a></li> <li><a href="#contact" data-svelte-h="svelte-iexvai">Contact Us</a></li> <li>${validate_component(Button, "Button").$$render(
    $$result,
    {
      licon: "",
      label: "Join the waitlist",
      href: "#overview",
      ricon: ""
    },
    {},
    {}
  )}</li></ul> <div class="md:hidden block text-white"><!-- HTML_TAG_START -->${Hamburger_Menu}<!-- HTML_TAG_END --></div></nav></header> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex flex-col items-center"><div class="px-[7dvw] min-h-screen flex flex-col w-full max-w-[1500px] items-center"><navbar class="z-50 px-[7dvw] py-[1.5dvh] backdrop-blur-[10px] fixed left-0 w-full border-b-[0.5px] border-[#5664803d]">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}</navbar> <main class="w-full">${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  Layout as default
};
