import { ToastContainer } from "react-toastify";

import { DefaultTheme, ThemeProvider } from "styled-components";

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
import "react-toastify/dist/ReactToastify.css";
import usePersistedState from "./utils/usePersistedState";

function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

	const toggleTheme = () => {
		setTheme(theme.title === "dark" ? at : dark);
	};

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
