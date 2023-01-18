import classes from "./sideBar.module.css";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBar";
import closeMenu from "../assets/closeMenu.png";

// imports for sidebar contents
import Trending from "./trending/Trending";
import CustomerID from "./CustomerID";
import Labels from "./labels/Labels";
import Settings from "./settings/Settings";

const SideBar = () => {
	const dispatch = useDispatch();

	const hideSideBarHandler = () => {
		dispatch(sideBarActions.hideSideBar());
	};

	return (
		<div className={classes.sideBar}>
			<div className={classes.sideBarContent}>
				<CustomerID />
				<hr></hr>
				<Trending />
				<hr></hr>
				<Labels />
				<hr></hr>
				<Settings />
			</div>
			<div className={classes.hideSideBar}>
				<button onClick={hideSideBarHandler} className={classes.btn}>
					<img src={closeMenu} alt=""></img>
				</button>
			</div>
		</div>
	);
};

export default SideBar;
