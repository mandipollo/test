import classes from "./productCard.module.css";

const ProductCard = props => {
	const { title, price, image } = props;
	return (
		<div key={props.id} className={classes.productCard}>
			<img
				style={{ height: `200px`, backgroundColor: `transparent` }}
				src={image}
				alt=""
			></img>
			<p className={classes.description}>{title}</p>
			<p className={classes.price}>{price}£ </p>
		</div>
	);
};

export default ProductCard;
