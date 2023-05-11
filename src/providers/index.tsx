import { InfosProvider } from "./infos";
import { TechsProvider } from "./techs";

type ProviderProps = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
	return (
		<TechsProvider>
			<InfosProvider>{children}</InfosProvider>
		</TechsProvider>
	);
};

export default Providers;
