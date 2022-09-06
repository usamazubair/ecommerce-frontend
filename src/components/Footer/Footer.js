import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerHeading">
        <span>Custom Service</span>
      </div>
      <div className="footerDetail">
        <div>
          <h3>CONTACT</h3>
          <div className="footerContactInfo">
            <p className="info">
              <b>BRANCHES</b>
              <span>D block, Sabzazar Lahore Pakistan</span>
            </p>
            <p className="info">
              <b>PHONE</b>
              <span>03110470721</span>
            </p>
            <p className="info">
              <b>WHATSAPP</b>
              <span>03110470721</span>
            </p>
            <p className="info">
              <b>EMAIL</b>
              <span>uzubair31@gmail.com</span>
            </p>
            <p className="info">
              <b>WORKING DAYS/HOURS</b>
              <span>Mon - Sat/ 11:00 AM - 8:00 PM</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="priceCaution">PRICE CAUTION</h3>
            <p>
              <span>
                All prices are subject to change without prior notice due to
                dollar fluctuation. Please confirm price before placing an order
                to avoid inconvenience.
              </span>
            </p>
          </div>
          <div className="footerRoute">
            <div className="leftSide">
              <h3>Information</h3>
              <p>About us</p>
              <p>Contact us</p>
              <p>My Account</p>
            </div>
            <div className="rightSide">
              <h3>Policy</h3>
              <p>Warranty</p>
              <p>Refund & Exchange</p>
              <p>Security & Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
