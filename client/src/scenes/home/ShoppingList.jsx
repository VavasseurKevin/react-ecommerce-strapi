import React, {useState, useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";


const ShoppingList = () => {
    const dispatch = useDispatch();
   
    const items = useSelector((state) => state.cart.items);
    
  
  
  
    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );
      
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
     
    }
  
    useEffect(() => {
      getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

    console.log(items);

    const topRatedItems = items.filter(
        (item) => item.attributes.category === "topRated"
      );
      const newArrivalsItems = items.filter(
        (item) => item.attributes.category === "newArrivals"
      );
      const bestSellersItems = items.filter(
        (item) => item.attributes.category === "bestSellers"
      );
    
    console.log(topRatedItems);
    console.log(newArrivalsItems);
    console.log(bestSellersItems);
    
      return (
        <Box>
          {/* Mettez votre code JSX ici */}
        </Box>
      );
   
  };
  
  export default ShoppingList;
  


