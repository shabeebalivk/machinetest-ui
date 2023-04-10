import styled from "@emotion/styled";
import { Box, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import EastIcon from "@mui/icons-material/East";
import ChairIcon from "@mui/icons-material/Chair";

const GalleryContainer = () => {
  const [style, setStyle] = useState({ display: "none" });
  // const
  const products = [
    { id: 1, name: "CRESCENT SWIVEL CHAIR", image: image1 },
    { id: 2, name: "MILLIE CHAIR", image: image2 },
    { id: 3, name: "PLEATED SWIVEL CHAIR", image: image3 },
    { id: 4, name: "LEATHER ARMCHAIR", image: image4 },
    { id: 5, name: "LEATHER ARMCHAIR", image: image5 },
    { id: 6, name: "PLEATED SWIVEL CHAIR", image: image6 },
    { id: 7, name: "MILLIE CHAIR", image: image7 },
    { id: 8, name: "CRESCENT SWIVEL CHAIR", image: image8 },
  ];
  return (
    <>
      <div className="gallery-container">
        <Box sx={{ width: "100%", padding: "20px 100px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {products.map((item, index) => (
              <Grid item xs={3} className="product-card">
                <div
                  style={{
                    width: "100%",
                    height: 500,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    //   backgroundColor: 'yellow',
                    textAlign: "center",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    setStyle({ display: "block" });
                  }}
                  onMouseLeave={(e) => {
                    setStyle({ display: "none" });
                  }}
                  className="card"
                >
                  <img src={item.image} alt={index} />
                  <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                  <h6
                    style={{
                      fontSize: 20,
                      fontWeight: "normal",
                      color: "grey",
                      marginTop: 0,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h6>
                  <button>
                    Get a quote
                    <EastIcon style={{ marginLeft: 10 }} />
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <div className="discover-container">
        <div className="discover-button">
          <ChairIcon style={{ marginRight: 10 }}/>
          Discover
          <EastIcon style={{ marginLeft: 10 }} />
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;
