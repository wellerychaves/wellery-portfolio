import { createGlobalStyle } from "styled-components";

import { DefaultTheme } from "./styled.d";

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		text-decoration: none;
		color: ${(props: DefaultTheme) => props.theme.colors.text};

		-webkit-transition: all .4s ease-in-out;
		-moz-transition: all .4s ease-in-out;
		-o-transition: all .4s ease-in-out;
		-ms-transition: all .4s ease-in-out;
		transition: all .4s ease-in-out;


			/* width */
		::-webkit-scrollbar {
			width: 10px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: ${(props) => props.theme.colors.background};
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: ${(props) => props.theme.colors.primary};
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: ${(props) => props.theme.colors.primaryD};
		}
	}

	h2 {
		font-weight: 500;
		user-select: none;
		font-family: var(--tajawal);
		font-size: calc(var(--csize) * 4);

		@media only screen and (min-width: 700px) {
			font-size: calc(var(--csize) * 5);
		}
	}

	.logo {
		all: unset;
		cursor: pointer;
		line-height: 50px;
		padding-bottom: 10px;
		font-family: var(--zen);
		font-size: calc(var(--csize) * 6);
		color: ${(props: any) => props.theme.colors.primary};
		display: flex;
		justify-content: center;
		align-items: center;
		:hover {
			font-weight: bold;
		}
	}

	body {
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
		color: ${(props: any) => props.theme.colors.text};
		background:${(props: any) => props.theme.colors.background};
	}

	#root {
		--csize: 62.5%;
		
		--zen: "Zen Antique", sans-serif;
		--tajawal: "Tajawal", sans-serif;
		--montserrat: "Montserrat", sans-serif;
	}

	button {
		cursor: pointer;
	}

	input, textarea{
		color: black;
		border-radius: 0;
		border-style: none;
		background-color: transparent;
		font-family: var(--montserrat);
	}

`;
