import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context";

export default function Results() {
  const { name, element, artwork } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!element) navigate("/");
  }, [element, navigate]);

  return (
    <div>
      <p>
        <strong>{name}</strong>, your element is: {element}
      </p>
      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          {artwork.primaryImage && <img src={artwork.primaryImage} alt={artwork.title} />}
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}
