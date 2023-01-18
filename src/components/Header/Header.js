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

	return (
		<Fragment>
			{/*render when isSticky is true and position is sticky */}
			{isSticky && (
				<div style={{ position: `sticky` }} className={classes.header}>
					<Logo />
					<Address />
					<SearchBar />
					<CustomerId />
					<Cart />
				</div>
			)}

			{/* renders when the isSticky is false so position is relative */}
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
