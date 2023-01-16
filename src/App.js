import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
	return (
		<div className={classes.app}>
			<Header />
			<Navbar />
		</div>
	);
};

export default App;
