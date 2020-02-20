import { formularios } from "../models/formularios";
import { connect } from "../../../database";

export class formulariosRepository {
  // private userDatabase: {[key: string]: User} = {};

  public async getanalistas():Promise<formularios[]>{
    const conn = await connect();
    const analistas = await conn.query("SELECT * FROM  analistas");
    let res:formularios[]=[];
    for (let index = 0; index < analistas[0].length; index++) {
        let analista = {
          label:analistas[0][index]["nombres"]+" "+analistas[0][index]["apellidos"],
          value:analistas[0][index]["id"]
        }
        res.push(analista);
    }
    return res;
  }

  public async getTipoNovedad():Promise<formularios[]>{
    const conn = await connect();
    const tipos = await conn.query("SELECT * FROM  tipos_Novedades");
    let res:formularios[]=[];
    for (let index = 0; index < tipos[0].length; index++) {
        let tipo = {
          label:tipos[0][index]["nombre"],
          value:tipos[0][index]["id"]
        }
        res.push(tipo);
    }
    return res;
  }

  public async getEstadoNovedad():Promise<formularios[]>{
    const conn = await connect();
    const estados = await conn.query("SELECT * FROM  estados_novedad");
    let res:formularios[]=[];
    for (let index = 0; index < estados[0].length; index++) {
        let estado = {
          label:estados[0][index]["nombre"],
          value:estados[0][index]["id"],
          tipo_novedada:estados[0][index]["tipo_novedada"]
        }
        res.push(estado);
    }
    return res;
  }
}
