import classes from "./sideBar.module.css";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBar";

const SideBar = () => {
	const dispatch = useDispatch();

	const hideSideBarHandler = () => {
		dispatch(sideBarActions.hideSideBar());
	};

	return (
		<div className={classes.sideBar}>
			<div className={classes.sideBarContent}>
				<p>SideBar</p>
			</div>
			<div className={classes.hideSideBar}>
				<button onClick={hideSideBarHandler}>Close</button>
			</div>
		</div>
	);
};

export default SideBar;
