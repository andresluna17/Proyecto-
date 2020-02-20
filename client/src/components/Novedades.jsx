import React from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import moments from "../plugins/moments";
import { ScrollPanel } from "primereact/scrollpanel";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

export default class Novedades extends React.Component {
  state;
  constructor() {
    super();
    this.state = {
      novedades: [],
      visible: false,
      novedad: {
        analista: null
      }
    };
    this.getAllNovedades();
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  componentDidMount() {
    this.formularioanalistas();
  }

  async formularioanalistas() {
    let res = await axios({
      method: "get",
      url: "http://localhost:5000/formularios"
    });
    let analista = res.data[0];
    let estados = res.data[1];
    let tipo = res.data[2];
    this.setState({
      analistas: analista,
      tipo: tipo,
      estados: estados,
      estado: []
    });
    return console.log(res.data);
  }

  async getAllNovedades() {
    let res = await axios({
      method: "get",
      url: "http://localhost:5000/novedad"
    });
    let data = res.data;
    this.setState({ novedades: data });
    return console.log(data);
  }

  changeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "tipo_novedad") {
      var estado = this.state.estados.filter(
        ({ tipo_novedada }) => tipo_novedada === value
      );
      this.setState({ estado: estado });
    }
    this.setState({
      novedad: {
        ...this.state.novedad,
        [name]: value
      }
    });
  };

  onClick() {
    this.setState({ visible: true });
  }

  onHide() {
    this.setState({ visible: false });
  }

  submit = async (e) => {
    e.preventDefault();
    console.log(this.state.novedad);
    let res = await axios({
      method: "post",
      url: "http://localhost:5000/novedad",
      data: this.state.novedad
    });
    let data = res.data;
    return console.log(data);
  };

  render() {
    const es = {
      firstDayOfWeek: 1,
      dayNames: [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado"
      ],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ],
      monthNamesShort: [
        "ene",
        "feb",
        "mar",
        "abr",
        "may",
        "jun",
        "jul",
        "ago",
        "sep",
        "oct",
        "nov",
        "dic"
      ]
    };

    const footercard = (
      <span>
        <Button label="Save" icon="pi pi-check" />
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-secondary"
        />
      </span>
    );

    const footerform = (
      <div>
        <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
        <Button
          label="No"
          icon="pi pi-times"
          onClick={this.onHide}
          className="p-button-secondary"
          type="submit"
        />
      </div>
    );
    return (
      <div>
        <div className="right_col" role="main">
          <div className="row">
            <div className="col-md-12">
              <div className="content-section implementation">
                <form onSubmit={this.submit}>
                  <Dialog
                    header="Nueva Novedad"
                    visible={this.state.visible}
                    style={{ width: "30vw" }}
                    footer={footerform}
                    onHide={this.onHide}
                  >
                    <div style={{ display: "inline-block" }}>
                      <Dropdown
                        value={this.state.novedad.analista}
                        options={this.state.analistas}
                        onChange={this.changeHandler}
                        name="analista"
                        style={{ width: "20vw", margin: " 5px 50px" }}
                        filter={true}
                        filterPlaceholder="busque el analista"
                        filterBy="label,value"
                        showClear={true}
                        placeholder="seleccione el analista"
                      />
                      <Dropdown
                        value={this.state.novedad.tipo_novedad}
                        options={this.state.tipo}
                        onChange={this.changeHandler}
                        name="tipo_novedad"
                        style={{ width: "20vw", margin: " 5px 50px" }}
                        filterBy="label,value"
                        placeholder="seleccione el tipo de novedad"
                        showClear={true}
                      />
                      <Dropdown
                        value={this.state.novedad.estado_novedad}
                        options={this.state.estado}
                        onChange={this.changeHandler}
                        name="estado_novedad"
                        style={{ width: "20vw", margin: " 5px 50px" }}
                        filterBy="label,value"
                        placeholder="seleccione el estado de novedad"
                        showClear={true}
                      />
                      <Calendar
                        style={{ width: "20vw", margin: " 5px 50px" }}
                        value={this.state.novedad.fecha_inicial}
                        name="fecha_inicial"
                        onChange={this.changeHandler}
                        disabledDays={[0,6]}
                        locale={es}
                        selectionMode="multiple"
                        showIcon={true}
                      />
                    </div>
                  </Dialog>
                </form>
                <Button
                  label="Nueva novedad"
                  icon="pi pi-plus"
                  onClick={this.onClick}
                />
                <dir></dir>
              </div>
              {this.state.novedades.map(e => {
                return (
                  <Card
                    title={e.analista}
                    subTitle={e.feche_termina?
                      moments(e.fecha_inicial).format("Do MMMM-YY") +
                      " hasta " +
                      moments(e.feche_termina).format("Do MMMM-YY"):moments(e.fecha_inicial).format("Do MMMM-YY")
                    }
                    style={{
                      width: "300px",
                      display: "inline-block",
                      margin: "5px"
                    }}
                    className="ui-card-shadow"
                    footer={footercard}
                    key={e.id}
                  >
                    <ScrollPanel style={{ width: "100%", height: "150px" }}>
                      <h5>
                        <b>Observación</b>
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{ __html: e.observacion }}
                      ></div>
                      <h5>
                        <b>Tipo De Novedad</b>
                      </h5>
                      <p>{e.tipo_novedad}</p>
                      <h5>
                        <b>estado</b>
                      </h5>
                      <p>{e.estado_novedad}</p>
                    </ScrollPanel>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
