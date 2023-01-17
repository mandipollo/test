import classes from "./productCard.module.css";

const ProductCard = props => {
	const { title, price, category, description, image } = props;
	return (
		<div key={props.id} className={classes.productCard}>
			<h3>TYPE: {category}</h3>
			<p>Manufacturer :{title}</p>
			<p>Price: {price}£ </p>
			<p>description: {description}</p>
			<img style={{ height: `100px` }} src={image} alt=""></img>
		</div>
	);
};

export default ProductCard;
