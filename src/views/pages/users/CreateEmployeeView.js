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
import {useState} from "react";
import faker from "faker";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";

// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import CreateEmployeePage1 from "views/demo/CreateEmployeePage"; //added

function CreateEmployeePage(props) {

  return (
    <>
       <GradientEmptyHeader name="Employees"  /> 
      <Container className="mt--6" fluid>    
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3>Create User</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6>User Info</h6>
                  <div>
                    <Row>
                      <Col>
                        <label htmlFor="input-first-name">Firstname</label>
                        <Input
                          id="input-first-name"
                          value={faker.name.firstName()}
                          />
                      </Col>
                      <Col>
                        <label htmlFor="input-last-name">Lastname</label>
                        <Input
                          id="input-last-name"
                          value={faker.name.lastName()}
                          />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="input-inter-name">International Name</label>
                        <Input
                          id="input-inter-name"
                          value={faker.internet.userName()}
                          />
                      </Col>
                      <Col>
                        <label htmlFor="input-email">Email address</label>
                        <Input
                          id="input-email"
                          value={faker.internet.email()}
                          type="email"/>
                      </Col>                    
                    </Row>
                  </div>
                  <hr />
                  <h6>Contact Info</h6>
                  <div>
                    <Row>
                      <Col>
                        <label htmlFor="input-address">Address</label>
                        <Input
                          id="input-address"
                          value={faker.address.streetAddress()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="input-city">City</label>
                        <Input
                          id="input-city"
                          value={faker.address.city()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-country">Country</label>
                        <Input
                          id="input-country"
                          value={faker.address.city()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-postal-code">Postal</label>
                        <Input
                          id="input-postal-code"
                          value={faker.address.zipCode()}
                        />
                      </Col>
                    </Row>
                  </div>
                  <hr />
                  <h6>Company Data</h6>
                  <div>
                    <Row>
                      <Col>
                        <label htmlFor="input-companyName">Title</label>
                        <Input
                          id="input-companyName"
                          value={faker.company.companyName()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-companyphoneNumber">Company Phone</label>
                        <Input
                          id="input-companyphoneNumber"
                          value={faker.phone.phoneNumber()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-companyCode">Company Code</label>
                        <Input
                          id="input-companyphoneNumber"
                          value={faker.datatype.number()}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label htmlFor="input-businessUnit">Business Unit</label>
                        <Input
                          id="input-businessUnit"
                          value={faker.company.catchPhraseNoun()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-costCenter">Cost Center</label>
                        <Input
                          id="input-costCenter"
                          value={faker.finance.account()}
                        />
                      </Col>
                      <Col>
                        <label htmlFor="input-mgmtGroup">Management Group</label>
                        <Input
                          id="input-mgmtGroup"
                          value={faker.commerce.department()}
                        />
                      </Col>
                    </Row>
                  </div>
                  <hr />
                  <div>
                    <Row>
                      <Col className="text-right">
                        <Button
                          color="success"  
                        >
                          Create
                        </Button>
                        <Button
                          color="info"
                        >
                          Back to Search
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateEmployeePage;
