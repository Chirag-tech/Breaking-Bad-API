import React from "react";
import CharacterGrid from "./characterGrid";
import Spinner from "./spinner";
const CharacterItem = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterGrid key={item.char_id} item={item}></CharacterGrid>
      ))}
    </section>
  );
};

export default CharacterItem;
