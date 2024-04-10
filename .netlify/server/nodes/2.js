import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.0oN11EDR.js","_app/immutable/chunks/scheduler.xWR2Cpgj.js","_app/immutable/chunks/index.B8aPND5F.js","_app/immutable/chunks/Button.XZjpIQgU.js","_app/immutable/chunks/entry.BcSbjBUI.js","_app/immutable/chunks/stores.BdlTtvVr.js"];
export const stylesheets = ["_app/immutable/assets/2.Crp_yK76.css"];
export const fonts = [];