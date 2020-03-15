import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { useDispatch } from 'react-redux';

import { FormControl, TextField, Select, InputLabel } from '@material-ui/core';

import { setUser } from '~/store/modules/user/actions';

import { Container } from './styles';

function ClientForm(props, ref) {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('');

	useEffect(() => {
		let persistedData = localStorage.getItem('persist:XBRAIN_SECRET');
		if (persistedData) {
			persistedData = JSON.parse(
				JSON.parse(localStorage.getItem('persist:XBRAIN_SECRET')).user
			);
			setName(persistedData.name);
			setEmail(persistedData.email);
			setGender(persistedData.gender);
		}
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(setUser({ name, email, gender }));
	}

	useImperativeHandle(ref, () => ({
		submit: () => dispatch(setUser({ name, email, gender })),
	}));

	return (
		<Container onSubmit={handleSubmit}>
			<TextField
				placeholder="Nome do cliente aqui"
				label="Nome"
				variant="outlined"
				required
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<TextField
				label="Email"
				placeholder="Digite seu email aqui"
				variant="outlined"
				required
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
					{/* <option value="" disabled>
						Selecione
					</option> */}
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
					<option value="o">Outro</option>
				</Select>
			</FormControl>
		</Container>
	);
}
export default forwardRef(ClientForm);
