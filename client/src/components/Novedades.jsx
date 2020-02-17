import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import {InputText} from 'primereact/inputtext';
import moments from "../plugins/moments"

export default class Novedades extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.getAllNovedades();
      }


    async getAllNovedades() {
        let res = await axios({
          method: "get",
          url: "http://localhost:5000/novedad"
        });
        let data = res.data;
        this.setState({ Novedades: data });
        return console.log(data);
      }

      convertiondate(rowData) {
        return <p>{moments(rowData.fecha_inicial).format("MMMM Do YYYY, h:mm A")}</p>;
      }
      convertiondate2(rowData) {
        return <p>{moments(rowData.feche_termina).format("MMMM Do YYYY, h:mm A")}</p>;
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
        <div>
          <div className="right_col" role="main">
            <div className="content-section implementation">
              <div className="col-md-12">
              <DataTable
                value={this.state.Novedades}
                ref={el => {
                  this.dt = el;
                }}
                header={header}
                paginator={true}
                rows={10}
                globalFilter={this.state.globalFilter}
              >
                <Column field="id" header="id" />
                <Column field="analista" header="analista" />
                <Column field="tipo_novedad" header="tipo novedad" />
                <Column field="estado_novedad" header="estado novedad" />
                <Column field="tiempo" header=" tiempo" />
                <Column field="fecha_inicial"  body={this.convertiondate}  header="fecha inicial" />
                <Column field="feche_termina"  body={this.convertiondate2}  header="feche termina" />
              </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
