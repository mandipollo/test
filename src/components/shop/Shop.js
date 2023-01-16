import ProductCard from "./ProductCard";
import classes from "./shop.module.css";

const data = [
	{
		id: `p1`,
		title: `jacket`,
		brand: `gucci`,
		price: 105,
	},
	{
		id: `p2`,
		title: `shirt`,
		brand: `hermes`,
		price: 25,
	},
	{
		id: `p3`,
		title: `shoes`,
		brand: `calvin klein`,
		price: 185,
	},
	{
		id: `p4`,
		title: `jacket`,
		brand: `gucci`,
		price: 105,
	},
	{
		id: `p5`,
		title: `jacket`,
		brand: `gucci`,
		price: 105,
	},
	{
		id: `p6`,
		title: `jacket`,
		brand: `gucci`,
		price: 105,
	},
	{
		id: `p7`,
		title: `jacket`,
		brand: `gucci`,
		price: 105,
	},
];
const Shop = () => {
	return (
		<div className={classes.shop}>
			{data.map(item => {
				return (
					<ProductCard
						key={item.id}
						title={item.title}
						id={item.id}
						brand={item.brand}
						price={item.price}
					/>
				);
			})}
		</div>
	);
};

export default Shop;
