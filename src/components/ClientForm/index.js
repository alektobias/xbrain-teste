import React, {
	useState,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FormControl, TextField, Select, InputLabel } from '@material-ui/core';

import { setUser } from '~/store/modules/user/actions';

import dataValidation from './dataValidation';
import { Container } from './styles';

function ClientForm({ totalPrice }, ref) {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector(state => state.user)
	const [errors, setErrors] = useState([]);
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [gender, setGender] = useState(user.gender);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(setUser({ name, email, gender }));
	}

	useImperativeHandle(ref, () => ({
		submit: async () => {
			const validation = await dataValidation({ name, email, gender });
			if (validation.isValid) {
				console.log({ name, email, gender })
				dispatch(setUser({ name, email, gender }));
				history.push('/confirmation', { price: totalPrice });
			} else {
				setErrors(validation.error);
			}
		},
	}));

	return (
		<Container onSubmit={handleSubmit}>
			<TextField
				placeholder="Nome do cliente aqui"
				error={!!errors.find(error => error.path === 'name')}
				helperText={errors.find(error => error.path === 'name')?.message}
				label="Nome"
				variant="outlined"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<TextField
				label="Email"
				placeholder="Digite seu email aqui"
				error={!!errors.find(error => error.path === 'email')}
				helperText={errors.find(error => error.path === 'email')?.message}
				variant="outlined"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<FormControl variant="outlined">
				<InputLabel
					htmlFor="gender"
					style={{ backgroundColor: '#fff', padding: '0 3px' }}
				>
					Sexo
				</InputLabel>
				<Select
					native
					id="gender"
					defaultValue={gender}
					onChange={e => setGender(e.target.value)}
				>
					<option value="" disabled>
					</option>
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
					<option value="o">Outro</option>
				</Select>
			</FormControl>
		</Container>
	);
}
export default forwardRef(ClientForm);
