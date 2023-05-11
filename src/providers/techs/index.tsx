import React, { createContext } from "react";

type ProviderProps = {
	children: React.ReactNode;
};

type Techs = {
	programmingLanguages: string[];
	frontEndDev: string[];
	backEndDev: string[];
	softwareAndTools: string[];
};

export const TechsContext = createContext<Techs>({
	programmingLanguages: [],
	frontEndDev: [],
	backEndDev: [],
	softwareAndTools: [],
});

export const TechsProvider = ({ children }: ProviderProps) => {
	const programmingLanguages = ["JavaScript", "Python", "TypeScript"];
	const frontEndDev = [
		"Axios",
		"CSS3",
		"ContextAPI",
		"HTML5",
		"Styled Components",
		"React",
		"Redux",
	];
	const backEndDev = [
		"Django",
		"Docker",
		"Express",
		"Jest",
		"JWT",
		"NodeJS",
		"PostgreSQL",
		"Rest Framework",
	];
	const softwareAndTools = [
		"Figma",
		"Git",
		"GitHub",
		"Insomnia",
		"NPM",
		"Obsidian",
		"Trello",
		"Visual Studio Code",
		"Vite",
		"Windows Terminal",
		"WSL2",
		"Yarn",
	];

	return (
		<TechsContext.Provider
			value={{
				programmingLanguages,
				frontEndDev,
				backEndDev,
				softwareAndTools,
			}}
		>
			{children}
		</TechsContext.Provider>
	);
};
