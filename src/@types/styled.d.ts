import "styled-components";
import type theme from "../styles/themes/dark";

type Theme = typeof theme;

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
