import classes from "./sideBar.module.css";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../../store/sideBar";
import closeMenu from "../assets/closeMenu.png";

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
				<button onClick={hideSideBarHandler} className={classes.btn}>
					<img src={closeMenu} alt=""></img>
				</button>
			</div>
		</div>
	);
};

export default SideBar;
