import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.D2icFqCe.js","_app/immutable/chunks/scheduler.gV0qV3bm.js","_app/immutable/chunks/index.518o1Yy6.js","_app/immutable/chunks/Button.DF1r-uyb.js","_app/immutable/chunks/entry.CyL1i50K.js","_app/immutable/chunks/stores.DQx5VqXD.js"];
export const stylesheets = ["_app/immutable/assets/2.Crp_yK76.css"];
export const fonts = [];
