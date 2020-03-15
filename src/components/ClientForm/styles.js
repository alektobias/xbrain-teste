import styled from 'styled-components';

export const Container = styled.form`
	display: grid;
	grid-template-columns: 5fr 5fr 2fr;
	grid-gap: 16px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(2, 1fr) !important;
		max-width: 720px;
	}
	@media (max-width: 320px) {
		grid-template-columns: repeat(1, 1fr) !important;
	}
`;
