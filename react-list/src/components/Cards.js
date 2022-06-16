import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>TOP 5 Lithuania's websites</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/alfa.png"
              text="Alfa.lt naujausios žinios, naujienos, komentarai iš Lietuvos ir pasaulio."
              label="News"
              path="/alfa"
            />
            <CardItem
              src="images/delfi.jpg"
              text="DELFI.lt naujausios žinios, politika, verslas, sportas, pramogos, orai, horoskopai, TV programa, piliečių nuomonės ir komentarai, nuotraukos ir video."
              label="News"
              path="/delfi"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/lrt.jpg"
              text="LRT – tai visuomeninis transliuotojas, siūlantis kokybišką, prasmingą televizijos, radijo ir naujienų portalo turinį."
              label="News"
              path="/lrt"
            />
            <CardItem
              src="images/skelbiu.jpg"
              text="Skelbimų portalas: baldai, kompiuteriai, telefonai, buitinė technika, foto, video, gyvūnai, knygos, turizmas, drabužiai, vežimėliai, statyba, nuoma ir t.t"
              label="Marketplace"
              path="/skelbiu"
            />
            <CardItem
              src="images/lrytas.png"
              text="Naujienų portalas, kuriame pateikiamos karščiausios naujienos iš Lietuvos ir viso pasaulio."
              label="News"
              path="/lrytas"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
