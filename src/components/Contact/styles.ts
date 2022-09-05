import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 530px;
	background-color: ${(props) => props.theme.colors.background};

	#email {
		gap: 20px;
		margin-top: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	h2 {
		padding-top: 20px;
		margin-left: 20px;
	}
`;

export const CustomInput = styled.input`
	min-height: 26px;
	min-width: 288px;
	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 3px;
	background-color: #00000000;
	width: fit-content;
	padding-left: 10px;
	font-size: calc(var(--csize) * 1);
	font-family: var(--montserrat);

	@media only screen and (min-width: 700px) {
		border-radius: 7px;
	}

	:nth-child(4) {
		padding-top: 10px;
		padding-bottom: 40px;
	}
`;

export const Line = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	width: 94px;
	height: 3px;
	border-radius: 3px;
	margin-left: 20px;

	@media only screen and (min-width: 700px) {
		margin-left: 0;
		width: 146px;
	}
`;

export const Buttons = styled.div`
	width: 280px;
	display: flex;
	margin: 50px auto;
	justify-content: space-around;

	a {
		width: 43px;
		height: 43px;
		border-radius: 5px;
		background-color: #00000000;
		border: 2px solid ${(props) => props.theme.colors.primary};
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 20px;
			stroke: white;
		}

		:hover {
			color: pink;
			text-decoration: pink;

			img {
				stroke: pink;
			}
		}
	}
`;

export const ContactButton = styled.button``;
