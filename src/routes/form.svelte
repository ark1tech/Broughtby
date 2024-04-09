<script lang="ts">
	import Button from './Button.svelte';
	import * as Form from '$lib/components/ui/form';
	import FormField from '$lib/components/ui/form/form-field.svelte';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Textarea } from '$lib/components/ui/textarea';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<div
	class="lg:w-[45%] h-full rounded-[0.75rem] overflow-clip bg-gradient-to-b from-[#ffffff2c] via-[#a2a2a220] to-[#a2a2a200] p-[0.065rem]"
>
	<div class="w-full h-full p-10 flex flex-col gap-[1rem] bg-[#19191b] rounded-[0.75rem]">
		<form method="POST" use:enhance class=" flex flex-col gap-6">
			<div class="flex flex-col gap-4">
				<div class="flex flex-row w-full justify-between">
					<Form.Field {form} name="name" class="text-white w-[45%]">
						<Form.Control let:attrs>
							<Form.Label><p class="text-white">Name</p></Form.Label>
							<Input
								{...attrs}
								bind:value={$formData.name}
								placeholder={'John Doe'}
								class="border-[#4e535eac]"
							/>
						</Form.Control>
						<Form.FieldErrors class={'text-red-400'} />
					</Form.Field>
					<Form.Field {form} name="email" class="text-white w-[45%]">
						<Form.Control let:attrs>
							<Form.Label><p class="text-white">Email</p></Form.Label>
							<Input
								{...attrs}
								bind:value={$formData.email}
								placeholder={'hello@jdoe.com'}
								class="border-[#4e535eac]"
							/>
						</Form.Control>
						<Form.FieldErrors class={'text-red-400'} />
					</Form.Field>
				</div>
				<Form.Field {form} name="message" class="text-white">
					<Form.Control let:attrs>
						<Form.Label><p class="text-white">Message</p></Form.Label>
						<Textarea {...attrs} bind:value={$formData.message} class="border-[#4e535eac]" />
					</Form.Control>
					<Form.FieldErrors class={'text-red-400'} />
				</Form.Field>
			</div>
			<Form.Button></Form.Button>
		</form>
	</div>
</div>
