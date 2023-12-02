import React from "react";

function Footer() {
  const containerStyles = {
    textAlign: "center",
    backgroundColor: "white",
    padding: "10px",
    height: "40px", // Set the desired height in pixels
  };

  const hoverStyles = {
    backgroundColor: "yellow",
  };

  return (
    <React.Fragment>
      <footer className="bg-warning fixed-bottom">
        <div style={{ ...containerStyles, ...hoverStyles }} className="container">
          <div className="row">
            <div className="col-md-12 mt-0">
              <p>Contact Us | Terms of Service | Privacy policy | Careers</p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
