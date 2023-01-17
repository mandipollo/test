import classes from "./header.module.css";
import Logo from "./Logo";
import Address from "./Address";
import CustomerId from "./CustomerID";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

import { useState, useEffect, Fragment } from "react";
const Header = () => {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.addEventListener(`scroll`, handleScroll);
		return () => {
			window.removeEventListener(`scroll`, handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	return (
		<Fragment>
			{isSticky && (
				<div style={{ position: `sticky` }} className={classes.header}>
					<Logo />
					<Address />
					<SearchBar />
					<CustomerId />
					<Cart />
				</div>
			)}
			{!isSticky && (
				<div className={classes.header}>
					<Logo />
					<Address />
					<SearchBar />
					<CustomerId />
					<Cart />
				</div>
			)}
		</Fragment>
	);
};

export default Header;
