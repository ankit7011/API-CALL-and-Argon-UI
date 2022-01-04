  /*!

  =========================================================
  * Argon Dashboard React - v1.2.1
  =========================================================

  * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

  * Coded by Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  */
  // reactstrap components
  import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import React, { useState, useEffect } from "react";



  

const Tables = (prop) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6"
    ).then((res) => {
      res.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <>
      {!data ? (
        <div>Loading....</div>
      ) : (
        <div>
          <Header />
          <Container className="mt--7" fluid>
            {/* Table */}
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Card tables</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col" />
                        <th scope="col" />
                        <th scope="col" />
                        <th scope="col" />
                        <th scope="col" />
                        <th scope="col" />
                        <th scope="col">Company</th>
                      </tr>
                    </thead>
                  </Table>
                  <Table>
                    <thead className="finroot">
                      {data.clients.map((cur) => (
                        <tbody>
                          <tr>
                            <th scope="row">
                              <Media className="align-items-center">
                                <Media>
                                  <span className="mb-0 text-sm">
                                    {cur.name}
                                  </span>
                                </Media>
                              </Media>
                            </th>
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />
                            <th scope="col" />

                            <td>
                              <div className="d-flex align-items-center">
                                {cur.company}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </thead>
                  </Table>

                  {/* Footer */}

                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};


  export default Tables;
