import classes from "./menu.module.css";
import menu from "../assets/images/menu-white.png";

const Menu = () => {
	return (
		<div className={classes.menu}>
			<button>
				<img src={menu} alt="menu"></img>
			</button>
		</div>
	);
};

export default Menu;
