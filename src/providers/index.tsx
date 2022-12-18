import { TechsProvider } from "./techs/techs";

type ProviderProps = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
	return <TechsProvider>{children}</TechsProvider>;
};

export default Providers;
