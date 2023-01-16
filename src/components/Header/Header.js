import classes from "./header.module.css";
import Logo from "./Logo";
import Address from "./Address";
import CustomerId from "./CustomerID";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
const Header = () => {
	return (
		<div className={classes.header}>
			<Logo />
			<Address />
			<SearchBar />
			<CustomerId />
			<Cart />
		</div>
	);
};

export default Header;
