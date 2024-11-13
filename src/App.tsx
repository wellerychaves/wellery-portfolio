import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { DefaultTheme, ThemeProvider } from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Apresentation from "./components/Apresentation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import GlobalStyle from "./styles/global";
import at from "./styles/themes/at";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";

const App: React.FC = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

	const toggleTheme = () => {
		setTheme(theme.title === "dark" ? at : dark);
	};

	const aboutRef = useRef(null);
	const techsRef = useRef(null);
	const portfolioRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover={false}
					theme="dark"
					toastStyle={{
						backgroundColor: "rgba(0,0,0,1)",
						borderRadius: "3px"
					}}
				/>
				<Header aboutRef={aboutRef} techsRef={techsRef} portfolioRef={portfolioRef} contactRef={contactRef} />
				<Apresentation />
				<About ref={aboutRef} />
				<Skills ref={techsRef} />
				{/*<Portfolio ref={portfolioRef} />*/}
				<Contact ref={contactRef} />
				<Footer toggleTheme={toggleTheme} />
			</ThemeProvider>
		</>
	);
};

export default App;
