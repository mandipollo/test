import classes from "./rollProducts.module.css";
import { rollProductsAction } from "../../store/rollSlice";
import { useDispatch } from "react-redux";

const RollProducts = () => {
	const dispatch = useDispatch();

	const rollHandler = () => {
		dispatch(rollProductsAction.showRoll());
	};
	return (
		<div className={classes.rollProducts}>
			<button onClick={rollHandler}>Roll Today's Deal</button>
		</div>
	);
};

export default RollProducts;
