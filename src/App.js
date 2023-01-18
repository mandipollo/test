import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Shop from "./components/shop/Shop";

import SideBar from "./components/sideBar/SideBar";
import { useSelector } from "react-redux";
import RollProducts from "./components/rollProducts/RollProducts";

const App = () => {
	const sideBarState = useSelector(state => state.sideBar.isVisible);
	const showContent = useSelector(state => state.roll.isVisible);

	return (
		<div className={classes.app}>
			{sideBarState && <SideBar />}
			<Header />
			<Navbar />
			{showContent ? <Shop /> : <RollProducts />}
		</div>
	);
};

export default App;
