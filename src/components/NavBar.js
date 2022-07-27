import React from "react";
import { Typography, AppBar, Button, CssBaseline, Toolbar, Stack, Badge } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import { NavLink } from 'react-router-dom';


function NavBar() {
    return(
        <div>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar style={{ margin: "5px" }}>
                    <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                        Home
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </Button>
                        <Button color='inherit'>
                            <NavLink to='/about'>About</NavLink>
                        </Button>
                        <Badge badgeContent={2} color="secondary">
                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <NavLink to='/cart'> <AddShoppingCartIcon /></NavLink>
                            </IconButton>
                        </Badge>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;