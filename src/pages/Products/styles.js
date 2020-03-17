import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1140px;
	margin-top: 64px;
	width: 100%;
	@media (max-width: 720px) {
		margin: 32px 8px 0 8px;
	}
`;
export const Header = styled.h2`
	font-size: 24px;
	line-height: 24px;
	padding-bottom: 8px;
	color: ${props => props.theme.colors.primary};
	border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

export const ProductsGrid = styled.div`
	margin-top: 48px;
	margin-bottom: 80px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 320px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const Client = styled.div`
	margin-top: 24px;
`;

export const Total = styled.div`
	padding: 88px 0 64px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	.MuiButton-root {
		background-color: #ff9800;
		font-weight: bold;
		color: #fff;
	}
`;
export const TotalPrice = styled.h3`
	font-size: 24px;
	color: ${props => props.theme.colors.primary};
	margin-bottom: 16px;
`;
export const FinishButton = styled(Button).attrs({
	variant: 'contained',
})``;
