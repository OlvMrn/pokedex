import PropTypes from "prop-types";

function PokemonCard(props) {
  return(
    <figure>
      {props.pokemon.imgSrc ? (<img src={props.pokemon.imgSrc} alt={props.pokemon.name}/>) : (<p>???</p>)}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  )
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;