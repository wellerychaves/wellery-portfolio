import styled from "styled-components";

export const Container = styled.div`
	width: 280px;
	max-width: 280px;
	height: 370px;
	background-color: ${(props: any) => props.theme.colors.background};
	border-radius: 7px;

	#buttons {
		all: unset;
		height: 50px;
		margin-top: 15px;
		gap: 20px;

		display: flex;
		align-items: center;
		justify-content: space-evenly;

		button {
			all: unset;
			cursor: pointer;
			border-radius: 3px;
			font-size: calc(var(--csize) * 1.8);
			padding: 0.4rem 1.1rem;
			background-color: #00000000;
			font-family: var(--tajawal);
			color: ${(props: any) => props.theme.colors.text};
			border: 2px solid ${(props: any) => props.theme.colors.primary};

			:hover {
				background-color: ${(props: any) => props.theme.colors.primary};
			}
		}
	}
`;

export const Figure = styled.figure`
	width: 93%;
	margin: 0 auto;

	h5 {
		margin-top: 10px;
		font-family: var(--montserrat);
		font-size: calc(var(--csize) * 1.8);
	}

	div {
		height: 148px;
		margin-top: 10px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-family: var(--zen);
		font-size: calc(var(--csize) * 3);
		color: ${(props: any) => props.theme.colors.primary};
		background-color: ${(props: any) => props.theme.colors.background2};
	}

	p {
		margin-top: 8px;
		line-height: 16px;
		font-size: 1rem;
		font-family: var(--tajawal);
	}
`;
