import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

const FORMSPARK_ACTION_URL = import.meta.env.VITE_FORMSPARK_ACTION_URL;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		try {
			await fetch(FORMSPARK_ACTION_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
				}, 
				body: JSON.stringify(
						form.data,
					),
				}
			);

			form.valid = true;
		} catch{
			form.valid = false;
		} 

		return {
			form
		};
	}
};
