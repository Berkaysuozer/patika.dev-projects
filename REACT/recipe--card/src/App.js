import './App.css';
import Card from './components/Card/Card';
import food from './assets/food.jpg'; // Tell webpack this JS file uses this image
import heartFill from './assets/heart-fill.png';
import heartOutline from './assets/heart-outline.png';

function App() {
	const recipeAuthor = 'Kodluyoruz';
	const recipeItem = {
		title: 'Avokado Ezmeli Taco',
		date: '12 Ocak 2021, Salı',
		image: food,
		description:
			"Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",

		heartFill: heartFill,
		heartOutline: heartOutline,
		likeCount: '193',
	};

	return (
		<div className="App">
			<header className="App-header">
				<Card
					/* prop ismi = { değişken } */

					author={recipeAuthor}
					title={recipeItem.title}
					date={recipeItem.date}
					image={recipeItem.image}
					description={recipeItem.description}
					likeCount={recipeItem.likeCount}
					isLiked={false}
					heartFill={heartFill}
					heartOutline={heartOutline}
				/>
			</header>
		</div>
	);
}

export default App;
