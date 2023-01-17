import classes from "./productCard.module.css";

const ProductCard = props => {
	const { title, price, category, description, image } = props;
	return (
		<div key={props.id} className={classes.productCard}>
			<p>{title}</p>
			<p>Price: {price}£ </p>

			<img
				style={{ height: `100px`, backgroundColor: `transparent` }}
				src={image}
				alt=""
			></img>
		</div>
	);
};

export default ProductCard;
