<script lang="ts">
	import Button from './Button.svelte';
	import * as Form from '$lib/components/ui/form';
	import FormField from '$lib/components/ui/form/form-field.svelte';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from "svelte-sonner";
	import { Textarea } from '$lib/components/ui/textarea';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated: ({form: f}) => {
			if (f.valid) {
				toast.success("You have submitted the form successfully")
			} else {
				toast.error("There was an error in submitting the form.")
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div
	class="lg:w-[45%] h-full rounded-[0.75rem] overflow-clip bg-gradient-to-b from-[#ffffff2c] via-[#a2a2a220] to-[#a2a2a200] p-[0.065rem]"
>
	<div class="w-full h-full p-10 flex flex-col gap-[1rem] bg-[#19191b] hover:bg-[#202023]  ease-linear transition-all rounded-[0.75rem]">
		<form method="POST" use:enhance class=" flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<div class="flex xlg:flex-row flex-col w-full justify-between gap-2">
					<Form.Field {form} name="name" class="text-white xlg:w-[45%] w-full">
						<Form.Control let:attrs>
							<Form.Label><h5>Name</h5></Form.Label>
							<Input
								{...attrs}
								bind:value={$formData.name}
								placeholder={'John Doe'}
								class="border-[#4e535eac]"
							/>
						</Form.Control>
						<Form.FieldErrors class={'text-red-400'} />
					</Form.Field>
					<Form.Field {form} name="email" class="text-white xlg:w-[45%] w-full">
						<Form.Control let:attrs>
							<Form.Label><h5>Email</h5></Form.Label>
							<Input
								{...attrs}
								bind:value={$formData.email}
								placeholder={'hello@jdoe.com'}
								class="border-[#4e535eac]"
							/>
						</Form.Control>
						<Form.FieldErrors class={'text-red-400'} />
					</Form.Field>
					<Form.Field {form} name="org" class="text-white xlg:w-[45%] w-full">
						<Form.Control let:attrs>
							<Form.Label><h5>Organization</h5></Form.Label>
							<Input
							{...attrs}
							bind:value={$formData.org}
							placeholder={'Association of John Does'}
							class="border-[#4e535eac]"
							/>
						</Form.Control>
						<Form.FieldErrors class={'text-red-400'} />
					</Form.Field>
				</div>
			</div>
			<Form.Button></Form.Button>
		</form>
	</div>
</div>
