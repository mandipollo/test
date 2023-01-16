import classes from "./productCard.module.css";

const ProductCard = props => {
	const { title, brand, price, id } = props;
	return (
		<div key={props.id} className={classes.productCard}>
			<h3>TYPE: {title}</h3>
			<p>Manufacturer :{brand}</p>
			<p>Price: {price}£ </p>
		</div>
	);
};

export default ProductCard;
