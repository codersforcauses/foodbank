//import './index.css';
import chars from './characters.json';

interface CharacterProps {
  baseName: string;
  aliasName: string;
  baseImageUrl: string;
  aliasImageUrl: string;
  about: string;
  recipe: string;  
  superPowers: string;
  foodGroup: string;
  location: string;
}

const Character: React.FC<CharacterProps> = ({
  baseName,
  // aliasName,
  baseImageUrl,
  // aliasImageUrl,
  about,
  recipe,
  superPowers,
  foodGroup,
  location,
 }) => {

  // const [isTransformed, setIsTransformed] = useState(false);
  // const getName = () => isTransformed ? aliasName : baseName;
  // const getImageUrl = () => isTransformed ? aliasImageUrl : baseImageUrl;

  return (
    <div className="main-window">
      <button className="bg-primary"></button>
      <div className="character-card-container">
        <div className="character-image-container">
          <img src={baseImageUrl} alt={baseName}></img>
        </div>
        <button>Activate super form!</button>
      </div>
      <div className="info-window">
        <div className="name-window">{baseName}</div>
        <div className="about-window">{about}</div>
        <div className="recipe-window">{recipe}</div>
        <div className="superpowers-window">{superPowers}</div>
        <div className="foodgroup-window">{foodGroup}</div>
        <div className="location">{location}</div>
        <div className="navigation">
          <button>Previous</button>
          <button>Grid</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Character;