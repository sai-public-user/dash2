import React, { Component } from "react";
import { TableBody } from "@material-ui/core";

import Header from "./Header";
import Row from "./Row";

import { StyledTable, StyledTableHead } from "./TableStyles";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [],
      rows: []
    };
  }

  componentDidMount() {
    const { headers, rows } = this.props.Data;
    this.setState({ headers, rows });
  }

  setHeaderOrder = headers => {
    this.setState({ headers });
  };

  render() {
    const { headers, rows } = this.state;

    return (
      <div
        style={{
          padding: "0px 100px",
          paddingTop: "50px"
        }}
      >
        <StyledTable>
          <StyledTableHead>
            <Header headers={headers} setHeaderOrder={this.setHeaderOrder} />
          </StyledTableHead>

          <TableBody>
            {Array.isArray(rows) &&
              rows.map((row, i) => <Row row={row} key={i} headers={headers} />)}
          </TableBody>
        </StyledTable>
      </div>
    );
  }
}

export default Table;
