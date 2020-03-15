import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #eceff1;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 320px) {
		background-color: #ffffff;
	}
`;
export const Message = styled.div`
	background-color: #ffffff;
	padding: 64px 48px;
	width: 364px;
	height: 467px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.colors.primary};
	text-align: center;
	h3 {
		font-size: 24px;
		margin-bottom: 16px;
	}
	p {
		font-size: 18px;
		strong {
			color: #019cdf;
		}
	}
	img {
		height: 131px;
		width: 158px;
	}
	.MuiButton-root {
		font-weight: bold;
		color: #fff;
		background-color: #ff9800;
	}

	@media (max-width: 320px) {
		padding: 0 40px;
	}
`;
export const NewPurchaseButton = styled(Button).attrs({
	variant: 'contained',
})``;
