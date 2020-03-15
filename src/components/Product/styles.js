import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	border-radius: 5px;
	overflow: hidden;
	height: 382px;
	z-index: 1;
	padding-top: 16px;
	background-image: url(${props => props.url});
	background-size: 237px 237px;
	background-position: center top;
	background-repeat: no-repeat;
	:hover {
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;

export const Details = styled.div`
	position: relative;
	width: 100%;
	padding: 16px;
	background: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.h5`
	font-size: 14px;
	line-height: 18px;
	font-weight: normal;
	color: ${props => props.theme.colors.primary};
	margin-bottom: 16px;
`;

export const Price = styled.h4`
	font-size: 18px;
	line-height: 18px;
	font-weight: bold;
	color: ${props => props.theme.colors.primary};
	margin-bottom: 8px;
`;

export const SplitPrice = styled.span`
	font-size: 12px;
	line-height: 18px;
	font-weight: normal;
	color: ${props => props.theme.colors.secondary};
	margin-bottom: 16px;
`;
export const Controller = styled.form`
	z-index: 2;
	display: ${props => (props.open ? 'block' : 'none')};
	height: ${props => (props.open ? '100%' : '0')};
	padding-top: 8px;
	div {
		display: inline-flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 16px;
		.MuiButton-root {
			background-color: ${props => props.theme.colors.secondary};
			min-width: 43px;
			height: 43px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			@media (max-width: 720px) {
				min-width: 35px;
				width: 35px;
				height: 35px;
			}
		}
		input {
			width: 127px;
			border-radius: 5px;
			border: 1px solid ${props => props.theme.colors.divider};
			text-align: center;
			@media (max-width: 720px) {
				width: 100px;
			}
		}
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
`;
export const ControllerSubmit = styled(Button).attrs({
	fullWidth: true,
	style: {
		backgroundColor: '#019CDF',
		color: 'white',
		fontWeight: 'bold',
	},
})``;
export const ControllerButton = styled(Button)`
	img {
		color: ${props => props.theme.colors.primary};
	}
`;
