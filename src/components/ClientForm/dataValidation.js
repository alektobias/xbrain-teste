import * as Yup from 'yup';

export default async data => {
	try {
		const schema = Yup.object().shape({
			name: Yup.string().required('Campo obrigatório'),
			email: Yup.string()
				.email('Digite um email valido!')
				.required('Campo obrigatório'),
			gender: Yup.string(),
		});
		await schema.validate(data, { abortEarly: false });
		return { isValid: true };
	} catch (error) {
		return {
			isValid: false,
			error: error.inner.map(err => ({ path: err.path, message: err.message })),
		};
	}
};
