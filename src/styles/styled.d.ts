import "styled-components";
declare module "styled-components" {
	export interface DefaultTheme extends ThemeInterface {
		title: string;

		colors: {
			primary: string;
			primaryD: string;

			text: string;
			darkText: string;
			mica: string;
			background: string;
			background2: string;
		};
	}
}
