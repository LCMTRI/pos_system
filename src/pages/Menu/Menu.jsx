import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "../../components/card/Card";
import Foodcard from "../../components/foodCard/FoodCard";
import FAIcom from "../../components/icon/FontAwesomeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Menu = () => {
  return (
    <div>
      {/* <Card name="Haha xerath go boom boom" amount={10} backgroundColor="#cfdddb" icon={<FAIcom name='fa fa-beer'></FAIcom>} />
            <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" /> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={3}>
            <Card
              name="Breakfast"
              amount={10}
              backgroundColor="#cfdddb"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Soups"
              amount={10}
              backgroundColor="#e4cdee"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Pasta"
              amount={10}
              backgroundColor="#c2dbe9"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Sushi"
              amount={10}
              backgroundColor="#c9caee"
              icon={<FAIcom name="fa fa-coffee"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Main course"
              amount={10}
              backgroundColor="#fac2d9"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Desserts"
              amount={10}
              backgroundColor="#e6dade"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Drinks"
              amount={10}
              backgroundColor="#f0c8cf"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Alcohol"
              amount={10}
              backgroundColor="#c3e9de"
              icon={<FAIcom name="fa fa-beer"></FAIcom>}
            />
          </Grid>
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
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
          <Grid item xs={3}>
          <Foodcard name="ur mom is fat" price={420} from="huhu" to="haha" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Menu;
