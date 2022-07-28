import React from 'react'
import './Navbar.css';
import { Grid, Button } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import pattern from '../Images/pattern1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <div>
            <Grid container spacing={2} style={{ backgroundColor: "#39587A", marginTop: "2vh", color: "white"  }}>
                <Grid item xs={12}style={{marginLeft:"15vh"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} style={{ textAlign: "left" }}>
                            <Grid container spacing={2} padding={2} style={{ fontSize: "1.3rem" }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <PanoramaFishEyeIcon style={{ color: "white", marginTop: "2vh" }} />
                                            <SquareIcon style={{ color: "white" }} />
                                        </Grid>
                                        <Grid item xs={10} style={{ marginTop: "1.7vh" }}>
                                            TRENDSETTERS
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{
                                        margin: "2vh 0vh", padding: "1vh 1.5vh",
                                        border: "1px solid white", fontSize: "1rem"
                                    }}>
                                        Enter email to recieve latest trending news
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.3rem" , marginBottom:"2vh"}} >
                                        Connect with us
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={2}><FacebookIcon style={{color:"white" , width:"5vh" , height:"5vh"}}/></Grid>
                                            <Grid item xs={2}><InstagramIcon style={{color:"white" , width:"5vh" , height:"5vh"}}/></Grid>
                                            <Grid item xs={2}><TwitterIcon style={{color:"white" , width:"5vh" , height:"5vh"}}/></Grid>
                                            <Grid item xs={2}><EmailIcon style={{color:"white" , width:"5vh" , height:"5vh"}}/></Grid>
                                            <Grid item xs={2}><PhoneIcon style={{color:"white" , width:"5vh" , height:"5vh"}}/></Grid>
                                            <Grid item xs={1}></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "left", margin: "6.5vh 2vh 0vh 2vh" }}>
                            <Grid container spacing={2}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                The Project
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Home
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Trends
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Products
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Blog
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                About Us
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                Learn More
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Pricing
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Vloggers
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Brands
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Teams
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Creators
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                Support
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Contact
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                FAQs
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Terms of use
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Privacy Policy
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Creator Terms
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} style={{textAlign:"left"}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ margin: "3.5vh 0vh 0vh 0vh", fontSize: "1.3rem" }}>
                                    Shop in Trend
                                </Grid>
                                <Grid item xs={12}>
                                <img src={pattern} style={{width:"25vh" , height:"18vh"}} />
                                </Grid>
                                <Grid item xs={12} style={{ margin: "0.5vh 0vh 0vh 0vh", fontSize: "0.9rem" }}>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit illo assumenda deleniti hic iure, nam
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} margin={2} style={{ fontSize: "1.1rem", fontWeight: "550" , marginTop:"-3vh"}}>
                    Copyright © 2022
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer