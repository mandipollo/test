import classes from "./sideBar.module.css";

const SideBar = () => {
	return (
		<div className={classes.sideBar}>
			<div className={classes.sideBarNav}>
				<p>SideBar</p>
			</div>
			<div className={classes.overlay}>
				<p>OverLay</p>
			</div>
		</div>
	);
};

export default SideBar;
