import React from 'react'
import { Grid } from '@mui/material'
import wallpaper from '../Images/wallpaper.jpg';
import wallpaper2 from '../Images/wallpaper2.jpg'
import wallpaper3 from '../Images/wallpaper3.jpg'
import Slider from "react-slick";

import './Navbar.css';
const Blog = () => {

  var hero = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  const wallp = [wallpaper2, wallpaper, wallpaper3];

  return (
    <div>
      <Grid container style={{overflowX:"hidden"}}>
        <Grid item xs={12}>
          <Slider {...hero}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} style={{ marginTop: "8vh", height: '70vh', backgroundImage: `url(${item})`, backgroundSize: 'cover', backgroundPositionY: "40%" }}>
                      <Grid container spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item sm={4} xs={6} md={4}
                          style={{
                            backgroundColor: "white", marginTop: "15vh", height: "50vh",
                            borderTop: "10px solid #023e84"
                          }}>
                          <Grid container spacing={2} >
                            <Grid item xs={12} style={{ fontSize: "2.3rem", textAlign: "left", color: "#023e84", fontWeight: "600" }} data-aos="fade-left">
                              LOOKING OUT <br /> THERE FOR FUTUTRE</Grid>
                            <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left", color: "#023e84" }}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  )
}

export default Blog