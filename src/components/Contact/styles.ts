import styled from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 100vh;
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
		margin-top: 20px;
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
