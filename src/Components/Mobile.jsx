import React, { useState, useEffect } from 'react'
import { Grid, Card, Button, TextField } from '@mui/material'
import axios from 'axios';
import Modal from "react-modal";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import noresult from '../Images/noresult.gif';
import Swal from 'sweetalert2'
const Mobile = () => {

  const [ProductList, setProductList] = useState([]);
  const [currentPost, setcurrentPost] = useState("");
  const [ModalOpen, setModalOpen] = useState(false);
  const [Avail, setAvail] = useState(true);
  const [BrandName, setBrandName] = useState("");
  const [BrandList, setBrandList] = useState([]);

  useEffect(() => {
    loadlist();
  }, []);

  const loadlist = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Mobiles"] }
      }
    )
      .then(function (response) {
        setProductList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const loadBrandList = async (e) => {
    axios(
      {
        method: 'post',
        url: 'https://flipkart-grid.herokuapp.com/product',
        headers: {
          'Content-Type': 'application/json'
        },
        data: { "filter": ["Mobiles", "", BrandName] }
      }
    )
      .then(function (response) {
        setBrandList(response.data);
        setAvail(response.data.length)
      })
      .catch(function (error) {
        if (error.response.status == 404) {
          Swal.fire(
            error.response.data.failure,
            'Please try again !',
            'error'
          )
        }
      });
  }
  function details(id) {
    setcurrentPost(id);
    console.log(id);
  }
  function handleOpen() {
    setModalOpen(true);
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{ backgroundColor: "#f6f6f2", boxShadow: "none", height: "50vh" }}>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}
            style={{ textDecoration: "none" }}>
            <Grid item xs={2}>
              <a href="#Appliances" className='fashioninner' style={{ color: "black" }}>
                <div style={{ fontSize: "4rem", marginTop: "1.2vh" }}>Apple</div>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a href="#Audio" className='mobileinner' style={{ color: "black" }}>
                <div style={{ fontSize: "3.2rem" }}>Realme</div>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a href="#Laptops & Desktops" className='electronicsinner' style={{ color: "black" }}>
                <div style={{ marginTop: "1vh", fontSize: "2.2rem" }}>Samsung</div>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a href="#Ethnic Wear" className='homeinner' style={{ color: "black" }}>
                <div>Oppo</div>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a href="#Storage" className='travelinner' style={{ color: "black" }}>
                <div style={{ marginTop: "-1vh" }}>Redmi</div>
              </a>
            </Grid>
            <Grid item xs={2}>
              <a href="#Cameras" className='groceryinner' style={{ color: "black" }}>
                <div style={{ fontSize: "2.5rem" }}>Nokia</div>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
              <TextField
                placeholder='Search products from your Trending Fashion Brand'
                required
                variant="outlined"
                name="brand"
                value={BrandName}
                onChange={(e) => setBrandName(e.target.value)}
                sx={{ width: "70vh", height: "5vh", backgroundColor: "transparent", color: "white", marginBottom: "2vh" }}
              />
              <Button onClick={loadBrandList}
                sx={{
                  color: "black", fontWeight: "700", backgroundColor: "#E2C091", fontSize: "1rem", marginLeft: "5vh", marginTop: "1vh",
                  "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                }}
                className="btn">Search</Button>
            </Grid>
          </Grid>
        </Grid>
        {BrandName ?
          <>
            {Avail != 0 ?
              <>
                {BrandList.map((item) => {
                  return (
                    <Grid item xs={12} sm={3} md={3}>
                      <Card sx={{
                        boxShadow: "none", height: "53vh",
                        "&:hover": { backgroundColor: "#ead3d8" }
                      }} >
                        <Grid container >
                          <Grid item xs={12} style={{
                            height: "35vh",
                            backgroundColor: "white", border: "1px solid #ead3d8", padding: "0.5vh",
                          }}>
                            <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                              style={{ height: "32vh", padding: " 0vh 0vh" }} />
                          </Grid>
                          <Grid item xs={12}
                            style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                            {item.name}
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={6}>
                                <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                  {item.discount ?
                                    <>
                                      <Grid item xs={12}
                                        style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                      >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                      </Grid>
                                    </>
                                    : <>
                                      <Grid item xs={12}
                                        style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                      >Rs. {item.price}
                                      </Grid>
                                    </>}
                                  <Grid item xs={12}
                                    style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                  ><i>In stock : {item.stock}</i>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                <Button
                                  onClick={() => { handleOpen(); details(item.id); }}
                                  sx={{
                                    color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                    "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                  }}
                                  className="btn">
                                  KNOW MORE
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  )
                })}
              </>
              : <>
                <Grid container spacing={2} padding={3} style={{ backgroundColor: "white", marginLeft: "5vh", marginTop: "5vh" }}>
                  <Grid item xs={12}>
                    <img src={noresult} />
                  </Grid>
                </Grid>
              </>}
          </> :
          <>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {ProductList.map((item) => {
                  return (
                    <Grid item xs={12} sm={3} md={3}>
                      <Card sx={{
                        boxShadow: "none", height: "53vh",
                        "&:hover": { backgroundColor: "#f6f6f2" }
                      }} >
                        <Grid container >
                          <Grid item xs={12} style={{
                            height: "35vh",
                            backgroundColor: "white", border: "1px solid #f6f6f2", padding: "0.5vh",
                          }}>
                            <img src={"https://flipkart-grid.herokuapp.com" + item.image} alt="image"
                              style={{ height: "32vh", padding: " 0vh 0vh" }} />
                          </Grid>
                          <Grid item xs={12}
                            style={{ fontSize: "1.1rem", color: "black", padding: "1vh 0vh 0vh 2vh ", textAlign: "left", fontWeight: "600" }}>
                            {item.name}
                          </Grid>
                          <Grid item xs={12}>
                            <Grid container>
                              <Grid item xs={6}>
                                <Grid container spacing={1} style={{ padding: "2vh 0vh 0vh 2vh" }}>
                                  {item.discount ?
                                    <>
                                      <Grid item xs={12}
                                        style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                      >Rs. {item.offer_price} <span style={{ fontSize: "0.8rem" }}><i>in offer</i></span>
                                      </Grid>
                                    </>
                                    : <>
                                      <Grid item xs={12}
                                        style={{ fontSize: "1.1rem", color: "black", textAlign: "left", fontWeight: "600" }}
                                      >Rs. {item.price}
                                      </Grid>
                                    </>}
                                  <Grid item xs={12}
                                    style={{ fontSize: "1rem", color: "black", textAlign: "left" }}
                                  ><i>In stock : {item.stock}</i>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={6} style={{ padding: "1vh", marginTop: "3vh" }}>
                                <Button
                                  onClick={() => { handleOpen(); details(item.id); }}
                                  sx={{
                                    color: "black", border: "2px solid black", fontWeight: "600", width: "20vh", height: "5vh",
                                    "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                  }}
                                  className="btn">
                                  KNOW MORE
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </>
        }
      </Grid>
      <Modal isOpen={ModalOpen}
        style={{
          content: {
            backgroundColor: "#f6f6f2"
          }
        }}>
        {ProductList.map((item) => {
          return (
            (item.id == currentPost) ?
              <>
                <Grid container spacing={1} padding={2}>
                  <Grid item xs={12} sm={5} md={5}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}
                        style={{
                          backgroundColor: "white",
                          height: "45vh", marginTop: "3vh", borderRadius: "5vh"
                        }}><Grid container spacing={2} style={{ borderRadius: "10vh" }}>
                          <Grid item xs={4}></Grid>
                          <Grid item xs={4} >
                            <img src={"https://flipkart-grid.herokuapp.com" + item.image} style={{ height: "40vh" }} />
                          </Grid>
                          <Grid item xs={4}></Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                        <Grid container >
                          <Grid item xs={9}>{item.name}</Grid>
                          <Grid item xs={3} style={{ marginTop: "2vh" }}>
                            <Grid container spacing={2} style={{
                              backgroundColor: "#E2C091", height: "5vh",
                              borderRadius: "5px", fontSize: "1rem"
                            }}>
                              <Grid item xs={12} style={{ marginTop: "-1.5vh" }}>
                                {item.stock} items in stock
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} style={{ fontSize: "1rem" }}>{item.description}</Grid>
                      <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                        <Grid container spacing={1}>
                          {item.discount ?
                            <>
                              <Grid item xs={8} style={{ textAlign: "left", fontSize: "1.1rem" }}><i>Deal of the day &nbsp;&nbsp;&nbsp;</i>
                                <span style={{
                                  fontSize: "1.1rem", fontWeight: "600", backgroundColor: "#e2c091", padding: "1vh 2vh", border: "2px solid black",
                                  borderRadius: "5px"
                                }}>${item.offer_price}</span>
                                <span style={{
                                  fontSize: "1.1rem", fontWeight: "600", backgroundColor: "transparent", padding: "1vh 2vh", border: "2px solid black",
                                  borderRadius: "5px", marginLeft: "3vh"
                                }}><s>${item.price}</s></span>
                              </Grid>
                              <Grid item xs={4}>
                                <Button
                                  sx={{
                                    color: "black", border: "2px solid black", fontWeight: "600", height: "5vh", marginLeft: "10vh"
                                    , "&:hover": { backgroundColor: "black", color: "#ffffff", border: "2px solid transparent" }
                                  }}
                                  className="btn">
                                  BUY NOW
                                </Button>
                              </Grid>
                            </>
                            : <>
                              <Grid item xs={12} style={{ textAlign: "left", fontSize: "1.1rem" }}><i>Deal of the day &nbsp;&nbsp;&nbsp;</i>
                                <span style={{
                                  fontSize: "1.1rem", fontWeight: "600", backgroundColor: "#e2c091", padding: "1vh 2vh", border: "2px solid black",
                                  borderRadius: "5px"
                                }}>${item.price}</span></Grid>
                            </>}

                        </Grid>
                      </Grid>
                      <Grid item xs={12} style={{ margin: "4vh 0vh 0vh 0vh", fontSize: "1rem", fontWeight: "600" }}>
                        <Grid container spacing={5}>
                          <Grid item xs={4}>
                            <Grid container spacing={2} style={{
                              height: "5vh",
                              borderRadius: "5px", border: "2px solid #E2C091"
                            }}>
                              <Grid item xs={12} style={{ marginTop: "-1.5vh", textAlign: "center", marginLeft: "-2vh", fontSize: "1rem", msOverflowY: "hidden" }}>
                                {item.brand.name}
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}></Grid>

                          <Grid item xs={7}>
                            <Grid container spacing={2} style={{
                              height: "5vh",
                              borderRadius: "5px"
                            }}>
                              <Grid item xs={6}>
                                <Grid container spacing={1}>
                                  <Grid item xs={2} style={{ marginTop: "-2vh" }}><GradeIcon /></Grid>
                                  <Grid item xs={10} style={{ marginTop: "-1.7vh", textAlign: "right", fontSize: "0.9rem" }}>
                                    {item.rating} rating points
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={6}>
                                <Grid container spacing={1}>
                                  <Grid item xs={2} style={{ marginTop: "-2vh" }}><RemoveRedEyeIcon style={{ marginLeft: "2vh" }} /></Grid>
                                  <Grid item xs={10} style={{ marginTop: "-1.7vh", textAlign: "center" }}>
                                    {item.viewers} views
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={7} md={7} style={{ marginTop: "8vh" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} style={{ textAlign: "left" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={10}></Grid>
                          <Grid item xs={2} style={{ marginTop: "-10vh" }}>
                            <CloseIcon style={{ color: "red", marginLeft: "12vh" }} onClick={() => setModalOpen(false)} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
              : <>
              </>
          )
        })}
      </Modal>
    </div >
  )
}

export default Mobile