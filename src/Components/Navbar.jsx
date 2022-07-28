import React from 'react'
import './Navbar.css';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <Grid container spacing={2} sx={{ marginTop: "3vh" }}>
                <Grid item xs={5}></Grid>
                <Grid item xs={7}>
                    <Grid container spacing={2}
                        sx={{ fontSize: "1.35rem", textDecoration: "none" }}>
                        <Grid item xs={2}>
                            <NavLink exact activeClassName="active" to='/' className="indicator">HOME</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink activeClassName="active" to='/trends' className="indicator">TRENDS</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink activeClassName="active" to='/products' className="indicator">PRODUCTS</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink activeClassName="active" to='/blog' className="indicator">BLOG</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink activeClassName="active" to='/about' className="indicator">ABOUT US</NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar