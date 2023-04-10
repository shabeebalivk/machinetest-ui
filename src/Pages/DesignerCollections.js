import React from "react";
import EastIcon from "@mui/icons-material/East";
import ChairIcon from "@mui/icons-material/Chair";
import image1 from '../images/table2.webp'
import image2 from '../images/table3.webp'

const DesignerCollections = () => {
  return (
    <div className="designer-collections">
      <div className="text-section">
        <div style={{ padding: "50px 130px" }}>
          <h1>
            DESIGNER
            <br /> COLLECTIONS
          </h1>
          <h3 style={{ fontWeight: "normal" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
            dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit
            amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </h3>
          <div>
            <div className="view-collection-button">
              <ChairIcon style={{ marginRight: 10 }} />
              View Collection
              <EastIcon style={{ marginLeft: 10 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={image1} alt="image1" width={400} style={{marginRight: 20}}/>
        <img src={image2} alt="image2" width={400} height={600}/>
      </div>
    </div>
  );
};

export default DesignerCollections;
