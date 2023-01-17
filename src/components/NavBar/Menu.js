import classes from "./menu.module.css";
import menu from "../assets/images/menu-white.png";

import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBar";

const Menu = () => {
	const dispatch = useDispatch();

	const showSideBarHandler = () => {
		dispatch(sideBarActions.showSideBar());
	};

	return (
		<div className={classes.menu}>
			<button onClick={showSideBarHandler}>
				<img src={menu} alt="menu"></img>
			</button>
		</div>
	);
};

export default Menu;
