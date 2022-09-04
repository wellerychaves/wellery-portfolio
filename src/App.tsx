import { useCallback, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import at from "./styles/themes/at";
import Apresentation from "./components/Apresentation";
import About from "./components/About";

function App() {
	const [theme, setTheme] = useState(dark);

	const toggleTheme = useCallback(() => {
		setTheme(theme.title === "dark" ? at : dark);
	}, [theme]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
			<Apresentation />
			<About />
		</ThemeProvider>
	);
}

export default App;

