import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1140px;
	margin-top: 64px;
	width: 100%;
`;
export const Header = styled.h2`
	font-size: 24px;
	line-height: 24px;
	padding-bottom: 8px;
	color: ${props => props.theme.colors.primary};
	border-bottom: 1px solid ${props => props.theme.colors.divider};
`;

export const ProductsGrid = styled.div`
	margin-top: 46px;
	margin-bottom: 80px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 16px;
`;
export const ClientForm = styled.form`
	margin-top: 24px;
	display: grid;
	grid-template-columns: 5fr 5fr 2fr;
	grid-gap: 16px;
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