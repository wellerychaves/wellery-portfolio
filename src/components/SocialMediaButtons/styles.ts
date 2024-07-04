import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 20rem;
	max-height: 21.5rem;
	display: flex;
	justify-content: space-between;

	.buttonDiv {
		gap: 20px;
		display: flex;
		align-items: center;
	}

	.iconButton {
		width: 43px;
		height: 43px;
		border-radius: 5px;
		background-color: #00000000;
		border: 2px solid ${(props) => props?.theme?.colors?.primary};
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

	.buttonText {
		all: unset;
		display: none;
		font-family: var(--montserrat);
		font-size: calc(var(--csize) * 2);
		color: ${(props) => props?.theme?.colors?.text};
		cursor: pointer;
	}

	@media only screen and (min-width: 756px) {
		width: fit-content;

		gap: 1rem;
		flex-direction: column;

		.buttonText {
			display: block;
		}
	}
`;
