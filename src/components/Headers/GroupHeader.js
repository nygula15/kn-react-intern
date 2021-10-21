/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function GroupHeader() {
  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "400px",
          backgroundImage:
            'url("' +
            require("assets/img/care/team.jpg").default +
            '")',
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />

      </div>
    </>
  );
}

export default GroupHeader;
