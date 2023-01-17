import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Shop from "./components/shop/Shop";

import SideBar from "./components/sideBar/SideBar";

const App = () => {
	return (
		<div className={classes.app}>
			<SideBar />

			<Header />
			<Navbar />
			<Shop />
		</div>
	);
};

export default App;
