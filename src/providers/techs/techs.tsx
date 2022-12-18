import React, { createContext, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiDjango, DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
	SiJavascript,
	SiTypescript,
	SiStyledcomponents,
	SiPython,
	SiGit,
	SiPostgresql,
	SiNodedotjs,
	SiJsonwebtokens,
	SiJest,
} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

type ProviderProps = {
	children: React.ReactNode;
};

export const TechsContext = createContext([]);

export const TechsProvider = ({ children }: ProviderProps) => {
	const techs = [
		{ name: "HTML", icon: <AiFillHtml5 /> },
		{ name: "CSS", icon: <DiCss3 /> },
		{ name: "Styled Components", icon: <SiStyledcomponents /> },
		{ name: "JavaScript", icon: <SiJavascript /> },
		{ name: "TypeScript", icon: <SiTypescript /> },
		{ name: "Python", icon: <SiPython /> },
		{ name: "React", icon: <FaReact /> },
		{ name: "Django", icon: <DiDjango /> },
		{ name: "GIT", icon: <SiGit /> },
		//{ name: "Vite", icon: <TbBrandCss3 /> },
		{ name: "ContextAPI", icon: <FaReact /> },
		{ name: "PostgreSQL", icon: <SiPostgresql /> },
		{ name: "Node.js", icon: <SiNodedotjs /> },
		//{ name: "TypeORM", icon: <TbBrandCss3 /> },
		{ name: "JWT", icon: <SiJsonwebtokens /> },
		{ name: "Jest", icon: <SiJest /> },
		{ name: "API RESTful", icon: <TbBrandCss3 /> },
	];

	const tools = [{ name: "Vite", icon: <AiFillHtml5 /> }];

	return (
		<TechsContext.Provider value={{ techs, tools }}>
			{children}
		</TechsContext.Provider>
	);
};
