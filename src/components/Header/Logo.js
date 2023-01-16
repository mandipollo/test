import classes from "./logo.module.css";
import logo from "../assets/images/logo.jpg";

const Logo = () => {
	return (
		<div className={classes.logo}>
			<img style={{ height: `50px` }} alt="logo" src={logo}></img>
		</div>
	);
};

export default Logo;
