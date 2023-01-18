import MensTrending from "./MensTrending";
import WomensTrending from "./WomensTrending";
import UniSexTrending from "./UniSexTrending";

const Trending = () => {
	return (
		<div style={{ lineHeight: `30px` }}>
			<h2>Trending</h2>
			<MensTrending />
			<WomensTrending />
			<UniSexTrending />
		</div>
	);
};

export default Trending;
