import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;

		colors: {
			primary: string;
			primaryD: string;

			background: string;
			background2: string;
			text: string;
		};
	}
}
