import "styled-components";
<<<<<<< HEAD
declare module "styled-components" {
	export interface DefaultTheme extends ThemeInterface {
=======

declare module "styled-components" {
	export interface DefaultTheme {
>>>>>>> main
		title: string;

		colors: {
			primary: string;
			primaryD: string;

<<<<<<< HEAD
			text: string;
			darkText: string;
			mica: string;
			background: string;
			background2: string;
=======
			background: string;
			background2: string;
			text: string;
>>>>>>> main
		};
	}
}
