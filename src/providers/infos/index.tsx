import type React from "react";
import { createContext } from "react";

type ProviderProps = {
	children: React.ReactNode;
};

export type Info = {
	label: string;
	value: string;
};

type Infos = { infos: Info[]; infos2: Info[] };

export const InfosContext = createContext<Infos>({ infos: [], infos2: [] });

export const InfosProvider = ({ children }: ProviderProps) => {
	const infos: Info[] = [
		{ label: "Name", value: "Wellery Chaves" },
		{ label: "Age", value: "24" },
		{ label: "Experience", value: "3 Years" }
	];
	const infos2: Info[] = [
		{ label: "Linkedin", value: "Wellery Chaves" },
		{ label: "GitHub", value: "wellerychaves" }
	];
	return <InfosContext.Provider value={{ infos, infos2 }}>{children}</InfosContext.Provider>;
};
