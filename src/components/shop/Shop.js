import ProductCard from "./ProductCard";
import classes from "./shop.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../../store/productSlice";
// const data = [
// 	{
// 		id: `p1`,
// 		title: "hermes",
// 		price: 90,
// 		category: "shirt",
// 		description: "a comfortable shirt made of cotton",
// 		image: "",
// 	},
// 	{
// 		id: `p2`,
// 		title: "hermes",
// 		price: 90,
// 		category: "shirt",
// 		description: "a comfortable shirt made of cotton",
// 		image: "",
// 	},
// ];

const Shop = () => {
	const dispatch = useDispatch();
	// retrieve the data from state
	const dataFromState = useSelector(state => state.product.data);

	// update the state once when the component loads and render the products from the fakeshop
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`https://fakestoreapi.com/products`);
				if (!response.ok) {
					throw new Error(`failed to fetch data!`);
				}
				const data = await response.json();
				dispatch(productActions.getData(data));
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [dispatch]);

	return (
		<div className={classes.shop}>
			{dataFromState.map(item => {
				return (
					<ProductCard
						key={item.id}
						id={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
					/>
				);
			})}
		</div>
	);
};

export default Shop;
