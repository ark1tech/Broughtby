import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { licon } = $$props;
  let { href } = $$props;
  let { ricon } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.licon === void 0 && $$bindings.licon && licon !== void 0)
    $$bindings.licon(licon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ricon === void 0 && $$bindings.ricon && ricon !== void 0)
    $$bindings.ricon(ricon);
  return `<div class="w-fit border border-[#24478c] shadow-[0_0_5px_0_#19346a] rounded-xl overflow-clip "><a class="font-[500] tracking-[0.015em] flex flex-row items-center py-[0.5rem] px-[1.2rem] gap-[0.6rem] bg-[#091742] shadow-[inset_0_-8px_20px_#19346a] "${add_attribute("href", href, 0)}><!-- HTML_TAG_START -->${licon}<!-- HTML_TAG_END --> ${escape(label)} <!-- HTML_TAG_START -->${ricon}<!-- HTML_TAG_END --></a></div>`;
});
export {
  Button as B
};
