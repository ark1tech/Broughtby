import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","meta.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DsgVVSVx.js","app":"_app/immutable/entry/app.DCEw2H8V.js","imports":["_app/immutable/entry/start.DsgVVSVx.js","_app/immutable/chunks/entry.CyL1i50K.js","_app/immutable/chunks/scheduler.gV0qV3bm.js","_app/immutable/entry/app.DCEw2H8V.js","_app/immutable/chunks/scheduler.gV0qV3bm.js","_app/immutable/chunks/index.518o1Yy6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
