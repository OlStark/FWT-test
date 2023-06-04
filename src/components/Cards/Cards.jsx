import "./Cards.scss";
import { BASE_URL } from "../Helpers/Helper";
const Card = ({ picture }) => {
  return (
    <>
      <div className="card">
        {picture.map((element) => (
          <div key={element.id} className="pic">
            <div className="overlay">
              <h4>{element.name}</h4>
              <p>
                <strong>Author:</strong> {element.author?.name}
              </p>
              <p>
                <strong>Created: </strong>
                {element.created}
              </p>
              <p>
                <strong>Location: </strong>
                {element.location?.location}
              </p>
            </div>
            <img src={`${BASE_URL}` + element.imageUrl} alt="#" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
