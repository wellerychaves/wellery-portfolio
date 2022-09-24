import GlobalStyle from "./styles/global";
import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import at from "./styles/themes/at";

import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import Apresentation from "./components/Apresentation";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	const [theme, setTheme] = useState(dark);

	const toggleTheme = useCallback(() => {
		setTheme(theme.title === "dark" ? at : dark);
	}, [theme]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<HeaderMobile />
			<HeaderDesktop />
			<Apresentation />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer toggleTheme={toggleTheme} />
		</ThemeProvider>
	);
}

export default App;
