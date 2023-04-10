import React from "react";
import HorizontalScrollMenu from "./ScrollMenu";
import ScrollSubMenu from "./ScrollSubMenu";
import GalleryContainer from "./GalleryContainer";
import DesignerCollections from "./DesignerCollections";
import Footer from "./Footer";

const HomePage = () => {
  const items = [
    { id: 1, name: "HOME FURNITURES" },
    { id: 2, name: "CORPORATE FURNITURES" },
    { id: 3, name: "HOSPITAL FURNITURES" },
    { id: 4, name: "SOUND PROOFING" },
  ];
  const subItems = [
    { id: 1, name: "CHAIRS" },
    { id: 2, name: "SOFA" },
    { id: 3, name: "OCCASIONAL TABLES" },
    { id: 4, name: "COFFEE TABLES" },
    { id: 5, name: "BOOKSHELVES" },
    { id: 6, name: "CARPET" },
    { id: 7, name: "CURTAIN" },
  ];
  return (
    <>
      <div className="topbar">
        <HorizontalScrollMenu items={items} />
      </div>
      <div className="topbar-sub">
        <ScrollSubMenu items={subItems} />
      </div>
      <GalleryContainer />
      <DesignerCollections />
      <Footer />
    </>
  );
};

export default HomePage;
