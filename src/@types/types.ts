import { RefObject } from "react";

export interface SectionProps {
	id: string;
}

export interface HeaderProps {
	aboutRef: RefObject<HTMLElement>;
	techsRef: RefObject<HTMLElement>;
	portfolioRef: RefObject<HTMLElement>;
	contactRef: RefObject<HTMLElement>;
}
