import React from "react";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Detail() {
  return (
    <div className="detailRoot">
      <div className="container">
        <div>
          <AirportShuttleIcon />
        </div>
        <div className="detailContent">
          <h3>FREE SHIPPING</h3>
          <p className="description">All Over Pakistan (conditions apply)</p>
        </div>
      </div>
      <div className="container">
        <div>
          <CardGiftcardIcon />
        </div>
        <div className="detailContent">
          <h3>BRAND NEW, FACTORY SEALED</h3>
          <p className="description">100% original genuine products only</p>
        </div>
      </div>
      <div className="container">
        <div>
          <SupportAgentIcon />
        </div>
        <div className="detailContent">
          <h3>SUPPORT</h3>
          <p className="description">Comprehensive service & support</p>
        </div>
      </div>
    </div>
  );
}
