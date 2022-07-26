import React from "react"
import { Typography, AppBar, Button, CssBaseline, Toolbar, Stack } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import { NavLink } from 'react-router-dom';


function NavBar() {
    return(
        <div>
            <CssBaseline />
            <AppBar position='static' color='error'>
                <Toolbar style={{ margin: "0.5px" }}>
                    <IconButton size='small' edge='start' color='inherit' sans-serif='logo'>
                    <NavLink to='/' color='white'>HOME</NavLink>
                    </IconButton>
                    <Typography variant='h4' component='div' sx={{ flexGrow: 3 }}>
                    </Typography>
                    <Stack direction='row' spacing={3}>
                        <Button color='inherit'>
                            <NavLink to='/about' color='white'>About</NavLink>
                        </Button>
                        <Button color='inherit'>
                            <NavLink to='/addproduct'>Add Product</NavLink>
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;