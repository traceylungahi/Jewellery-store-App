import React from "react";
import { Typography, Stack, AppBar, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <AppBar position='static'>
                <Button color='white'>Home</Button>
                <Button color='white'>About Us</Button>
                <Button color='white'>Contacts</Button>
                <IconButton color='blue' sans-serif='Add To Shopping Cart'></IconButton>
                <Typography variant='h4' component='div'>
                    JEWELLERY
                </Typography>
                <Stack direction='row' spacing={3}>
                    <Button color='white'>
                        <Navlink to='/'>Home</Navlink>
                    </Button>
                    <Button color='white'>
                        <Navlink to='/contact'>Contacts</Navlink>
                    </Button>
                    <Button color='white'>
                        <Navlink to='/about'>About</Navlink>
                    </Button>
                </Stack>
            </AppBar>
        </div>
    )
}

export default NavBar;