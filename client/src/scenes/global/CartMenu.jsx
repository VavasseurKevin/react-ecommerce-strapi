import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux"; 
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
    descreaseCount,
    inscreaseCount,
    removeFromCart,
    setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

// créer un composant FlexBox qui est une extension du composant Box de Material-UI
const Flexbox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);
    const isCartOpen = useSelector((state)=>state.cart.isCartOpen);
    
    return(
        <Box 
            display={isCartOpen ? "block" : "none"}
            backgroundColor="rgba(0,0,0.4)"
            position="fixed"
            zIndex={10}
            width="100%"
            height="100%"
            left="0"
            top="0"
            overflow="auto"
        >
            <Box
                position="fixed"
                right="0"
                bottom="0"
                width="max(400px, 30%)"
                height="100%"
                backgroundColor="white"
            >
                <Box>
                    {/* HEADER */}
                    <Flexbox>
                        <Typography variant="h3">SHOPING BAG({cart.length})</Typography>
                        <IconButton onClick={()=>dispatch(setIsCartOpen({}))}>
                            <CloseIcon/>
                        </IconButton>
                    </Flexbox>
                </Box>

            </Box>

        </Box>)
}

export default CartMenu;