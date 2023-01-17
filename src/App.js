import classes from "./app.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Shop from "./components/shop/Shop";

import SideBar from "./components/sideBar/SideBar";
import { useSelector } from "react-redux";

const App = () => {
	const sideBarState = useSelector(state => state.sideBar.isVisible);
	console.log(sideBarState);

	return (
		<div className={classes.app}>
			{sideBarState && <SideBar />}

			<Header />
			<Navbar />
			<Shop />
		</div>
	);
};

export default App;
