import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../../components/card/Card";
import Foodcard from "../../components/foodCard/FoodCard";
import FAIcon from "../../components/icon/FontAwesomeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { categoryData } from "./MenuData";

const Menu = () => {
  const [card, setCard] = useState({ name: "", item: [] });
  
  const handle = (name) => {
    if (card.name == name) {
      setCard({ name: "", item: [] });
    } else {
      for (var i = 0; i < categoryData.length; i++) {
        if (categoryData[i].name == name) {
          setCard(categoryData[i]);
          break;
        }
      }
    }
  };

  return (
    <div className="menu-con">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          {categoryData.map((element) =>
            element.name == "" ? (
              <div></div>
            ) : (
              <Grid item xs={3}>
                <Card
                  name={element.name}
                  amount={element.item.length}
                  backgroundColor={element.color}
                  icon={<div className="icon-container"><FontAwesomeIcon id="icon" icon={element.icon} /></div>}
                  updateState={handle}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
      <hr
        style={{
          background: "#2B2D2E",
          color: "#2B2D2E",
          borderColor: "#2B2D2E",
          height: "1.5px",
          margin: "5px 0px 9px 0px",
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          {card.item.map((element) => (
            <Grid item xs={3}>
              <Foodcard name={element.name} price={element.price} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Menu;

{
  /* <div className="icon-container"><FontAwesomeIcon id="icon" icon={element.icon} /></div>   <FAIcon name={element.icon}></FAIcon> */
}
