import CardStyle from "./CardStyle";

function Card({ image, title, description, imgDesc, className }) {
  return (
    <CardStyle className={className}>
      <div className="iconContent">
        <img src={image} alt={imgDesc} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardStyle>
  );
}

export default Card;
