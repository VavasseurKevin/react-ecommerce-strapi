import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemID } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);
  const [item, serItem] = useState(null);

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:2000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/*ACTIONS */}
        <Box flex="1 1 50%">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes.longDescription}
            </Typography>
          </Box>

          <Box display="flex" alignContent="center" minHeight="50px">
            <Box>
              <IconButton>
                <RemoveIcon />
              </IconButton>
              <Typography sm={{ p: "0 5px" }}>{count}</Typography>
              <IconButton>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
            >
              ADD TO CART
            </Button>
          </Box>

          {/*WISHLIST*/}
          <Box>
            <Box m="20px 0 5px" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sm={{ ml: "5px" }}>ADD TO WHISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES : {item?.attributes?.category}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATIONS */}
      <Box m="20px 0">
              <Tabs>
                <Tab label="DESCRIPTION" value="description"/>
                <Tab label="REVIEWS" value="reviews"/>
              </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
            <div>{item?.attributes?.longDescription}</div>
        )}
        {value === "reviews" && <div>reviews</div>}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography>
            Related Products
        </Typography>
        <Box
            mt="20px"
            display="flex"
            flexWrap="wrap"
            columnGap="1.33%"
            justifyContent="space-between"
        >
            
        </Box>

      </Box>
    </Box>
  );
};
export default ItemDetails;
