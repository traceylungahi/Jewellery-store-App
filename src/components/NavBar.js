import React from "react";
import { Typography, AppBar, Button, CssBaseline, Toolbar, Stack, Badge } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import { NavLink } from 'react-router-dom';


function NavBar() {
    return(
        <div>
            <CssBaseline />
            <AppBar position='static' color='primary'>
                <Toolbar style={{ margin: "0.5px" }}>
                    <IconButton size='small' edge='start' color='inherit' aria-label='logo'>
                        Home
                    </IconButton>
                    <Typography variant='h4' component='div' sx={{ flexGrow: 3 }}>
                    </Typography>
                    <Stack direction='row' spacing={3}>
                        <Button color='inherit'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </Button>
                        <Button color='inherit'>
                            <NavLink to='/about'>About</NavLink>
                        </Button>
                        <Badge badgeContent={2}>
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