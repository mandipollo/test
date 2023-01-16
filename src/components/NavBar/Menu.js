import classes from "./menu.module.css";
import menu from "../assets/images/menu-white.png";

const Menu = () => {
	return (
		<div className={classes.menu}>
			<img src={menu} alt="menu"></img>
		</div>
	);
};

export default Menu;
