import BestSeller from "./BestSeller";
import BuyAgain from "./BuyAgain";
import Menu from "./Menu";
import NewRelease from "./NewRelease";
import TodaysDeal from "./TodaysDeal";

import classes from "./navbar.module.css";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<Menu />
			<TodaysDeal />
			<NewRelease />
			<BestSeller />
			<BuyAgain />
		</div>
	);
};

export default Navbar;
