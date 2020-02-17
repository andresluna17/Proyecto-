import { Analista } from "../models/analista";
import { connect } from "../../../database";

export class AnalistasRepository {
  // private userDatabase: {[key: string]: User} = {};

  public async addNewUserToDb(analista: Analista) {
    // this.userDatabase[user.userid] = user;

    const conn = await connect();
    await conn.query("INSERT INTO analistas SET ?", [analista]);
    const res = await conn.query(
      "SELECT * FROM  analistas WHERE id = LAST_INSERT_ID();"
    );
    return res[0][0];
  }
  public async getUserId(userId: string): Promise<Analista> {
    const conn = await connect();
    const res = await conn.query(
      "SELECT * FROM  analistas WHERE id = ?",
      userId
    );
    return res[0][0];
  }

  public async getUserAll(): Promise<Analista[]> {
    // return this.userDatabase[userId];
    const conn = await connect();
    const res = await conn.query("SELECT * FROM  analistas");
    for (let index = 0; index < res[0].length; index++) {
      const cliente = res[0][index]["cliente"];
      const getcliente = await conn.query(
        "SELECT * FROM  clientes WHERE id= ?",
        cliente
      );
      res[0][index]["cliente"] = getcliente[0][0]["nombre"];
    }
    return res[0];
  }

  public async updateUserr(id: string, analista: Analista): Promise<Analista> {
    const conn = await connect();
    const update = await conn.query("UPDATE analistas SET ? WHERE id= ?", [
      analista,
      id
    ]);
    const res = await conn.query("SELECT * FROM  analistas WHERE id = ?", id);
    return res[0][0];
  }
}
