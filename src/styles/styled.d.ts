import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeInterface {
		title: string;

		colors: {
			primary: string;
			primaryD: string;

			background: string;
			mica: string;
			background2: string;
			text: string;
		};
	}
}
