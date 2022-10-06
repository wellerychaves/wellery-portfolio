import GlobalStyle from "./styles/global";
import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import at from "./styles/themes/at";

import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [theme, setTheme] = useState(dark);

	const toggleTheme = useCallback(() => {
		setTheme(theme.title === "dark" ? at : dark);
	}, [theme]);

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
						borderRadius: "3px",
					}}
				/>
				<Header />
				<Apresentation />
				<About />
				<Skills />
				<Portfolio />
				<Contact />
				<Footer toggleTheme={toggleTheme} />
			</ThemeProvider>
		</>
	);
}

export default App;
