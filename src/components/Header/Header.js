import classes from "./header.module.css";
import Logo from "./Logo";
import Address from "./Address";
import CustomerId from "./CustomerID";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

import { useState, useEffect, Fragment } from "react";
const Header = () => {
	// state for navBar postion
	const [isSticky, setIsSticky] = useState(false);

	// useEffect whenever the user scrolls and handleScroll function as callback
	useEffect(() => {
		window.addEventListener(`scroll`, handleScroll);
		return () => {
			window.removeEventListener(`scroll`, handleScroll);
		};
	}, []);

	// sets navbar position to sticky, whenever the user scrolls Y
	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	const stickyHeader = (
		<div style={{ position: `sticky` }} className={classes.header}>
			<Logo />
			<Address />
			<SearchBar />
			<CustomerId />
			<Cart />
		</div>
	);

	const staticHeader = (
		<div className={classes.header}>
			<Logo />
			<Address />
			<SearchBar />
			<CustomerId />
			<Cart />
		</div>
	);

	return (
		<Fragment>
			{/* conditionally update header position  */}
			{!isSticky ? staticHeader : stickyHeader}
		</Fragment>
	);
};

export default Header;
