import React, { createContext } from "react";

type ProviderProps = {
	children: React.ReactNode;
};

type InfosItem = {
	Name?: string;
	Age?: string;
	Experience?: string;
};

type InfosItem2 = {
	Linkedin?: string;
	GitHub?: string;
	Phone?: string;
};

type Infos = { infos: InfosItem[]; infos2: InfosItem2[] };

export const InfosContext = createContext<Infos>({ infos: [], infos2: [] });

export const InfosProvider = ({ children }: ProviderProps) => {
	const infos = [
		{ Name: "Wellery T. Chaves" },
		{ Age: "22" },
		{ Experience: "1 Year" },
	];
	const infos2 = [
		{ Linkedin: "Wellery Chaves" },
		{ GitHub: "wellerychaves" },
		{ Phone: "+55 83 9 8225-1204" },
	];
	return (
		<InfosContext.Provider value={{ infos, infos2 }}>
			{children}
		</InfosContext.Provider>
	);
};
