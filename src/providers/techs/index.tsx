import type React from "react";
import { createContext } from "react";

type ProviderProps = {
	children: React.ReactNode;
};

type Techs = {
	frontEnd: string[];
	backEnd: string[];
	database: string[];
	versionControl: string[];
	tests: string[];
	devops: string[];
	learning: string[];
};

export const TechsContext = createContext<Techs>({
	frontEnd: [],
	backEnd: [],
	database: [],
	versionControl: [],
	tests: [],
	devops: [],
	learning: []
});

export const TechsProvider = ({ children }: ProviderProps) => {
	const frontEnd = ["JavaScript", "TypeScript", "React", "ContextAPI", "HTML5", "Styled Components", "TailwindCSS"];
	const backEnd = ["Node.js", "Bun", "Express", "Honojs", "REST APIs"];
	const database = ["PostgreSQL", "Redis"];
	const versionControl = ["Git", "GitHub"];
	const tests = ["Bun test", "Jest"];
	const devops = ["Docker", "Google Cloud Platform", "Vercel"];
	const learning = ["Next.js", "DrizzleORM"];

	return (
		<TechsContext.Provider
			value={{
				frontEnd,
				backEnd,
				database,
				versionControl,
				tests,
				devops,
				learning
			}}
		>
			{children}
		</TechsContext.Provider>
	);
};
