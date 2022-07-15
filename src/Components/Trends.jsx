import React, { useEffect, useState, useCallback } from 'react'
import { Grid, Card, Button } from '@mui/material'
import wallpaper from '../Images/wallpaper.jpg';
import wallpaper2 from '../Images/wallpaper2.jpg'
import wallpaper3 from '../Images/wallpaper3.jpg'
import Slider from "react-slick";
import Fashion from "../Images/fashion.jpg";
import Mobile from "../Images/mobile.jpg";
import Electronics from "../Images/electronics.jpg";
import Home from "../Images/home.jpg";
import Travel from "../Images/travel.jpg";
import Grocery from "../Images/grocery.jpg";
import './Navbar.css';

const Trends = () => {

  var hero = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }
  const loops = [1, 2, 3, 4, 5, 6];
  const wallp = [wallpaper, wallpaper3, wallpaper2];
  const social = [
    { name: "FACEBOOK", color: "#023e84" },
    { name: "INSTAGRAM", color: "#db224e" },
    { name: "SNAPCHAT", color: "#ffc424" },
    { name: "TWITTER", color: "#4fcbe9" },
    { name: "YOUTUBE", color: "red" },
  ];
  const category = [
    {
      name: Fashion, x: "1", id: "Fashion", align: "left", color: "#f2f2f2",
      card: "#ead3d8", stylename: "fashionhead", font: "6rem"
    },
    {
      name: Mobile, x: "2", id: "Mobile", align: "right", color: "#fefefe",
      card: "#f6f6f2", stylename: "mobilehead", font: "5rem"
    },
    {
      name: Electronics, x: "3", id: "Electronics", align: "left", color: "#f0f0f0",
      card: "#f0f0f0", stylename: "elchead", font: "3rem"
    },
    {
      name: Home, x: "4", id: "Home Decor", align: "right", color: "#f3f3f3",
      card: "#f8e6d8", stylename: "btnstyle", font: "4.5rem"
    },
    {
      name: Travel, x: "5", id: "Travel", align: "left", color: "#ffffff",
      card: "#dde7f1", stylename: "mobilehead", font: "5rem"
    },
    {
      name: Grocery, x: "6", id: "Grocery", align: "right", color: "#f1f1f1",
      card: "#f1f1f1", stylename: "btn", font: "5rem"
    },
  ]
  return (
    <div >
      <Grid container style={{ overflowX: "hidden" }}>
        {/*hero*/}
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
                            <Grid item xs={12} style={{ fontSize: "2.5rem", textAlign: "left", color: "#023e84", fontWeight: "600" }} data-aos="fade-left">
                              ALWAYS BE IN <br />TREND WITH US  </Grid>
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
        {/*category*/}
        <Grid container spacing={2} padding={2} paddingTop={5}>
          <Grid item sm={5} md={5} xs={12}>
            <Card sx={{ backgroundColor: "#ead3d8", height: "35vh", boxShadow: "none" }}>
              <Grid container xs={12}>
                <Grid item xs={12} style={{
                  fontSize: "8rem", marginTop: "5vh", textAlign: "left",
                  marginLeft: "5vh"
                }} className="fashionhead">
                  FASHION
                </Grid>
                <Grid item xs={12} style={{ textAlign: "right", marginRight: "2vh", marginTop: "2vh" }}>
                  <a href="#Fashion" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "black", border: "2px solid black", fontWeight: "600",
                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                      }}
                      className="btn">LEARN MORE</Button>
                  </a>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={7} md={7} >
            <Card sx={{ backgroundColor: "#fefefe", height: "35vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2} style={{ textAlign: "Right", marginRight: "10vh" }}>
                    <Grid item xs={12} style={{ fontSize: "4rem" }} className="mobilehead">
                      <div>Mobile</div>
                    </Grid>
                    <Grid item xs={12}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Mobile" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f0f0f0", height: "35vh", boxShadow: "none" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ fontSize: "3.2rem", marginLeft: "1vh", marginTop: "2vh" }}
                  className="elchead">
                  Electronic Appliances
                </Grid>
                <Grid item xs={12}>
                  <a href="#Electronics" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: "black", border: "2px solid black", fontWeight: "600",
                        "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                      }}
                      className="btn">LEARN MORE</Button>
                  </a>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f8f8f8", height: "35vh", boxShadow: "none" }}></Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ backgroundColor: "#f8e6d8", height: "35vh", boxShadow: "none" }}>
              <Grid container xs={12}>
                <Grid item xs={12} style={{ padding: "12vh 3vh" }}>
                  <a href="#Home Decor" style={{ textDecoration: "none" }}>
                    <Button sx={{
                      color: "black", fontSize: "3rem",
                      fontWeight: "600", paddingLeft: "2vh",
                      "&:hover": { backgroundColor: "transparent" }
                    }}><div className='btnstyle'>HOME  DECOR</div></Button>
                  </a>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <Card sx={{ backgroundColor: "#dde7f1", height: "40vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={6}>
                  <Grid container spacing={2} style={{ textAlign: "left", marginLeft: "1vh" }}>
                    <Grid item xs={12} style={{ fontSize: "4rem" }} className="mobilehead">
                      <div>Travel</div>
                    </Grid>
                    <Grid item xs={12}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Travel" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <Card sx={{ backgroundColor: "#f1f1f1", height: "40vh", boxShadow: "none" }}>
              <Grid container paddingRight={3}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                  <Grid container spacing={2} style={{ textAlign: "right", marginRight: "10vh", marginTop: "2vh" }}>
                    <Grid item xs={12} style={{ fontSize: "3rem", fontWeight: "600" }}>
                      <div>Grocery</div>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Grid>
                    <Grid item xs={12}>
                      <a href="#Grocery" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            color: "black", border: "2px solid black", fontWeight: "600",
                            "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                          }}
                          className="btn">LEARN MORE</Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        {/*mobile*/}
        <Grid item xs={12}>
          <Grid container id="fashion" spacing={4} padding={2}>
            {category.map((item) => {
              return (
                <>
                  <Grid item xs={12} id={item.id} >
                    <Card sx={{ height: "100vh", fontSize: "10vh", boxShadow: "none", backgroundColor: "#f8f8f8" }}>
                      <Grid container style={{ backgroundColor: "#f8f8f8" }}
                        spacing={2}>
                        {loops.map((cardno) => {
                          return (
                            <>
                              {cardno == item.x ?
                                <>
                                  <Grid item xs={12} sm={4} md={4}>
                                    <Card sx={{
                                      backgroundColor: item.card, justifyContent: "center", fontSize: item.font,
                                      height: "50vh", boxShadow: "none",
                                      "&:hover": { backgroundColor: "#ffffff" }
                                    }} className={item.stylename}>
                                      <Grid container>
                                        <Grid item xs={12} style={{ height: "30vh", padding: "12vh 0vh" }}>
                                          {item.id}
                                        </Grid>
                                        <Grid item xs={12}>
                                          <Button
                                            sx={{
                                              color: "black", border: "2px solid black", fontWeight: "600",
                                              "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                            }}
                                            className="btn">LETS SHOP MORE</Button>
                                        </Grid>
                                      </Grid>
                                    </Card>
                                  </Grid>
                                </>
                                : <>
                                  <Grid item xs={12} sm={4} md={4} >
                                    <Card sx={{
                                      boxShadow: "none", height: "50vh",
                                      "&:hover": { backgroundColor: item.card }
                                    }} >
                                      <Grid container>
                                        <Grid item xs={12} style={{
                                          height: "35vh",
                                          backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPositionY: "40%"
                                        }}></Grid>
                                        <Grid item xs={12}>
                                          <Grid container>
                                            <Grid item xs={4}>
                                              <Button
                                                sx={{
                                                  color: "black", border: "2px solid black", fontWeight: "600",
                                                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                                }}
                                                className="btn">
                                                KNOW MORE
                                              </Button>
                                            </Grid>
                                            <Grid item xs={4}></Grid>
                                            <Grid item xs={4}></Grid>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Card>
                                  </Grid>
                                </>
                              }
                            </>
                          )
                        })}
                      </Grid>
                    </Card>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Trends