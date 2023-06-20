import React, { useContext, useState } from "react";
import {Avatar, Card,CardActions, CardContent,CardHeader, CardMedia, Collapse, IconButton,Typography,} from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getDron } from "../../Context/UserProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./Main.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Cards = () => {
  const { data, cart, setCartQuantity, buyProducts, heart, setHeartQuantity, AddFavorites } = useContext(getDron);
  const [cardStates, setCardStates] = useState({});
  const [filter, setFilter] = useState(null);

  const handleExpandClick = (id) => {
    setCardStates((prevState) => ({
      ...prevState,
      [id]: {
        expanded: !prevState[id]?.expanded,
        isFavorite: prevState[id]?.isFavorite,
      },
    }));
  };

  const handleFavoriteClick = (id) => {
    setCardStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isFavorite: !prevState[id]?.isFavorite,
      },
    }));

    // Guardar el ID en el almacenamiento local
    localStorage.setItem("favoriteId", id);
  };

  setCartQuantity(cart.length);
  setHeartQuantity(heart.length);

  const isFilterActive = (filterOption) => {
    return filter === filterOption;
  };

  return (
    <div className="main-cards-container">
      <div className="filters">
        <button onClick={() => setFilter(null)} className={isFilterActive(null) ? "active" : ""}>
          Todos
        </button>
        <button onClick={() => setFilter("Recreativo")} className={isFilterActive("Recreativo") ? "active" : ""}>
          Recreativo
        </button>
        <button
          onClick={() => setFilter("Semiprofesional")}
          className={isFilterActive("Semiprofesional") ? "active" : ""}
        >
          Semiprofesional
        </button>
        <button onClick={() => setFilter("Profesional")} className={isFilterActive("Profesional") ? "active" : ""}>
          Profesional
        </button>
      </div>
      <div className="cards-title-container">
        <h3 className="card-section">Nuestros productos :</h3>
      </div>

      <div className="cards">
        {data
          .filter((dron) => filter === null || dron.type === filter)
          .map((dron) => (
            <Card
              key={data.indexOf(dron)}
              sx={{
                maxWidth: 345,
                bgcolor: "#f8f9fa",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.8s ease-in-out",
                },
              }}
            >
              <CardHeader
                title={
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    {dron.name}
                  </Typography>
                }
                avatar={
                  <Avatar sx={{ bgcolor: "#f8f9fa" }} aria-label="recipe">
                    <img
                      src="/assets/Fotos/icon_dron.png"
                      alt="Logo"
                      style={{ width: "40px", height: "auto", margin: "auto" }}
                    />
                  </Avatar>
                }
                action={
                  <IconButton caria-label="settings">
                    <button className="buybutton" onClick={() => buyProducts(dron)}>
                      <ShoppingCartCheckoutOutlinedIcon />
                    </button>
                  </IconButton>
                }
              />
              <Link to={`/detail/${dron.id}`}>
                <CardMedia component="img" height="194" image={dron.image} alt="dron.img" />
              </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                  {dron.price}€
                </Typography>
              </CardContent>

              <CardActions disableSpacing>

                <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick(data.indexOf(dron))}>
                  <button className='heart' onClick={() => AddFavorites(dron)}>
                    <FavoriteIcon
                      className={cardStates[data.indexOf(dron)]?.isFavorite ? "heart active" : "heart"}
                    /></button>

                </IconButton>
                <ExpandMore
                  expand={cardStates[data.indexOf(dron)]?.expanded}
                  onClick={() => handleExpandClick(data.indexOf(dron))}
                  aria-expanded={cardStates[data.indexOf(dron)]?.expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={cardStates[data.indexOf(dron)]?.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    {dron.description.length > 100 ? dron.description.substring(0, 200) + "..." : dron.description}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </div>
    </div>
  );
};