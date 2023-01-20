import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigator = useNavigate();
  const navigationHandler = () => {
    navigator(`/shop/${title}`);
  };
  
  return (
    <div className="directory-item-container" onClick={navigationHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>shop</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
