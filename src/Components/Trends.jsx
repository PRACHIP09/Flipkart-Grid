import React from 'react'
import { Grid, Card } from '@mui/material'
import wallpaper from '../Images/wallpaper.jpg';
import wallpaper2 from '../Images/wallpaper2.jpg'
import wallpaper3 from '../Images/wallpaper3.jpg'
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
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
  const loops = [1, 2];
  const wallp = [wallpaper, wallpaper3, wallpaper2];
  const social = [
    { name: "FACEBOOK", color: "#023e84" },
    { name: "INSTAGRAM", color: "#db224e" },
    { name: "SNAPCHAT", color: "#ffc424" },
    { name: "TWITTER", color: "#4fcbe9" },
    { name: "YOUTUBE", color: "red" },
  ];
  const category = [
    { name: Fashion, x: "0", y: "40%", id: "Fashion" , align:"left" , color:"#a1d2cf"},
    { name: Mobile, x: "0", y: "55%", id: "Mobile" ,align:"right" , color:"#e2c091" },
    { name: Electronics, x: "50%", y: "0", id: "Electronics" ,align:"left", color:"#a1d2cf"},
    { name: Home, x: "90%", y: "0", id: "Home" ,align:"right" , color:"#e2c091" },
    { name: Travel, x: "0", y: "0", id: "Travel" ,align:"left", color:"#a1d2cf"},
    { name: Grocery, x: "30%", y: "0", id: "Grocery" ,align:"right" , color:"#e2c091"},
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
          <Grid item xs={5} >
            <a href="#Fashion"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
          <Grid item xs={7} >
            <a href="#Mobile"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
          <Grid item xs={4} >
            <a href="#Electronics"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
          <Grid item xs={4} >
            <Card sx={{ backgroundColor: "#f8f8f8", height: "35vh", boxShadow: "none" }}></Card>
          </Grid>
          <Grid item xs={4} >
            <a href="#Home"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
          <Grid item xs={6} >
            <a href="#Travel"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
          <Grid item xs={6} >
            <a href="#Grocery"><Card sx={{ backgroundColor: "blue", height: "35vh", boxShadow: "none" }}></Card></a>
          </Grid>
        </Grid>
        {/*mobile*/}
        <Grid item xs={12}>
          <Grid container id="fashion">
            {category.map((item) => {
              return (
                <>
                {item.align =="left" ? 
                <>
                <Grid item xs={12} id={item.id}>
                  <Card sx={{ height: "50vh", fontSize: "10vh" , boxShadow:"none" , backgroundColor:"#f8f8f8"}}>
                    <Grid container spacing={2}>
                      <Grid item xs={6} style={{backgroundColor:item.color , height:"50vh"}}>{item.id}</Grid>
                      <Grid item xs={6}></Grid>
                    </Grid>
                  </Card>
                </Grid>
                </>
                :<>
                
                <Grid item xs={12} id={item.id}>
                  <Card sx={{ height: "50vh", fontSize: "10vh" , boxShadow:"none" , backgroundColor:"#f8f8f8"}}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={6} style={{backgroundColor:item.color , height:"50vh"}}>{item.id}</Grid>
                    </Grid>
                  </Card>
                </Grid>
                </>}
                </>
              )
            })}
          </Grid>
        </Grid>
        {/*<Grid item xs={12}>
          <Grid container spacing={2} style={{padding:"1vh"}}>
            {category.map(item => {
              return (
                <Grid item xs={2} style={{margin:"5vh 0vh"}}>
                  <Card style={{
                    height: '30vh', backgroundImage: `url(${item.name})`,
                    backgroundSize: "cover", backgroundPositionY: item.y, backgroundPositionX: item.x ,
                    boxShadow:"none"
                  }}>
                  </Card>
                </Grid>
              )
            })}
            {category.map(item => {
              return (
                <Grid item xs={2} 
                style={{fontSize: "1.5rem", marginTop:"-5vh" ,
                fontWeight: "600"}}
                >{item.id}</Grid>
              )
            })}
          </Grid>
          </Grid>*/}

      </Grid>
    </div>
  )
}

export default Trends