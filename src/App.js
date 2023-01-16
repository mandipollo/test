import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Shop from "./components/shop/Shop";

const App = () => {
	return (
		<div className={classes.app}>
			<Header />
			<Navbar />
			<Shop />
		</div>
	);
};

export default App;
