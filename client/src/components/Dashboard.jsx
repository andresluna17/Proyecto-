import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import {InputText} from 'primereact/inputtext';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
    this.getAllAnalistas();
  }

  async getAllAnalistas() {
    let res = await axios({
      method: "get",
      url: "http://localhost:5000/analista"
    });
    let data = res.data;
    this.setState({ analistas: data });
    return console.log(data);
  }
  render() {
    var header = (
      <div style={{ textAlign: "left" }}>
        <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }}></i>
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="50"
        />
      </div>
    );
    return (
      <div>
        <div className="right_col" role="main">
          <div className="content-section implementation">
            <div className="col-md-12">
              <DataTable
                value={this.state.analistas}
                ref={el => {
                  this.dt = el;
                }}
                header={header}
                paginator={true}
                rows={10}
                globalFilter={this.state.globalFilter}
              >
                <Column field="id" header="id" />
                <Column field="nombres" header="nombres" />
                <Column field="apellidos" header="apellidos" />
                <Column field="correo" header="correo" />
                <Column field="telefono" header="telefono" />
                <Column field="proyecto" header="proyecto" />
                <Column field="cliente" header="cliente" />
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
