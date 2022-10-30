import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../../components/card/Card";
import Foodcard from "../../components/foodCard/FoodCard";
import FAIcon from "../../components/icon/FontAwesomeIcon";
import { useState } from "react";

const Menu = () => {
  const [card, setCard] = useState({name:"", item:[]});
  const categoryData = [
    {
      name: "",
      color: "",
      icon: "",
      item: []
    },
    {
      name: "Coffee",
      color: "#cfdddb",
      icon: "fa fa-beer",
      item: [
        {
          name: "Coffee 1",
          price: 12000,
        },
        {
          name: "Coffee 2",
          price: 12000,
        },
        {
          name: "Coffee 3",
          price: 12000,
        },
        {
          name: "Coffee 4",
          price: 12000,
        },
        {
          name: "Coffee 5",
          price: 12000,
        },
        {
          name: "Coffee 6",
          price: 12000,
        },
        {
          name: "Coffee 7",
          price: 12000,
        },
        {
          name: "Coffee 8",
          price: 12000,
        },
      ],
    },
    {
      name: "Tea",
      color: "#e4cdee",
      icon: "fa fa-beer",
      item: [
        {
          name: "Tea 1",
          price: 23000,
        },
        {
          name: "Tea 2",
          price: 23000,
        },
        {
          name: "Tea 3",
          price: 23000,
        },
        {
          name: "Tea 4",
          price: 23000,
        },
        {
          name: "Tea 5",
          price: 23000,
        },
        {
          name: "Tea 6",
          price: 23000,
        },
        {
          name: "Tea 7",
          price: 23000,
        }
      ],
    },
    {
      name: "Milk tea",
      color: "#c2dbe9",
      icon: "fa fa-beer",
      item: [
        {
          name: "Milk tea 1",
          price: 20000,
        },
        {
          name: "Milk tea 2",
          price: 20000,
        },
        {
          name: "Milk tea 3",
          price: 20000,
        },
        {
          name: "Milk tea 4",
          price: 20000,
        },
        {
          name: "Milk tea 5",
          price: 20000,
        },
        {
          name: "Milk tea 6",
          price: 20000,
        },
        {
          name: "Milk tea 7",
          price: 20000,
        },
        {
          name: "Milk tea 8",
          price: 20000,
        }
      ],
    },
    {
      name: "Alcohol",
      color: "#c9caee",
      icon: "fa fa-beer",
      item: [
        {
          name: "Alcohol 1",
          price: 30000,
        },
        {
          name: "Alcohol 2",
          price: 30000,
        },
        {
          name: "Alcohol 3",
          price: 30000,
        },
        {
          name: "Alcohol 4",
          price: 30000,
        },
        {
          name: "Alcohol 5",
          price: 30000,
        },
        {
          name: "Alcohol 6",
          price: 30000,
        }
      ],
    },
    {
      name: "Breakfast",
      color: "#fac2d9",
      icon: "fa fa-beer",
      item: [
        {
          name: "Breakfast 1",
          price: 24000,
        },
        {
          name: "Breakfast 2",
          price: 24000,
        },
        {
          name: "Breakfast 3",
          price: 24000,
        },
        {
          name: "Breakfast 4",
          price: 24000,
        },
        {
          name: "Breakfast 5",
          price: 24000,
        },
        {
          name: "Breakfast 6",
          price: 24000,
        },
        {
          name: "Breakfast 7",
          price: 24000,
        },
        {
          name: "Breakfast 8",
          price: 24000,
        }
      ],
    },
    {
      name: "Dessert",
      color: "#e6dade",
      icon: "fa fa-beer",
      item: [
        {
          name: "Dessert 1",
          price: 16000,
        },
        {
          name: "Dessert 2",
          price: 16000,
        },
        {
          name: "Dessert 3",
          price: 16000,
        },
        {
          name: "Dessert 4",
          price: 16000,
        },
        {
          name: "Dessert 5",
          price: 16000,
        }
      ],
    },
    {
      name: "Snacks",
      color: "#f0c8cf",
      icon: "fa fa-beer",
      item: [
        {
          name: "Snack 1",
          price: 10000,
        },
        {
          name: "Snack 2",
          price: 10000,
        },
        {
          name: "Snack 3",
          price: 10000,
        },
        {
          name: "Snack 4",
          price: 10000,
        },
        {
          name: "Snack 5",
          price: 10000,
        }
      ],
    },
  ];

  const handle = (name) => {
    if (card.name == name) {
      setCard({name:"",item:[]});
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
          {categoryData.map((element) => (
              element.name == "" ? <div></div> :(
              <Grid item xs={3}>
                <Card
                  name={element.name}
                  amount={element.item.length}
                  backgroundColor={element.color}
                  icon={<FAIcon name={element.icon}></FAIcon>}
                  updateState={handle}
                />
              </Grid>
            )
          ))}
        </Grid>
      </Box>
      <hr
        style={{
          background: '#2B2D2E',
          color: '#2B2D2E',
          borderColor: '#2B2D2E',
          height: '1.5px',
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          {card.item.map((element) => (
            <Grid item xs={3}>
              <Foodcard 
                name={element.name} 
                price={element.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Menu;
