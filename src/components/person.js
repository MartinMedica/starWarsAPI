import React from "react";

const Person = props => {
  return (
    //   "homeworld": "https://swapi.co/api/planets/1/",
    <div className="results">
      <h1 className="results__title">
        {!props.isLoaded ? "Loading..." : props.items.name}
      </h1>
      <ul className="results__list">
        <li className="results__list__item">
          Height:
          <span>
            {props.items.height} {props.items.height === "unknown" ? "" : "cm"}
          </span>
        </li>
        <li className="results__list__item">
          Mass:{" "}
          <span>
            {props.items.mass} {props.items.mass === "unknown" ? "" : "kg"}
          </span>
        </li>
        <li className="results__list__item">
          Hair color: <span>{props.items.hair_color}</span>
        </li>
        <li className="results__list__item">
          Skin color: <span>{props.items.skin_color}</span>
        </li>
        <li className="results__list__item">
          Eye color: <span>{props.items.eye_color}</span>
        </li>
        <li className="results__list__item">
          Birth year: <span>{props.items.birth_year}</span>
        </li>
        <li className="results__list__item">
          Gender: <span>{props.items.gender}</span>
        </li>
      </ul>
    </div>
  );
};

export default Person;
