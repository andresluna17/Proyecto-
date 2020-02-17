import { Novedad } from "../models/novedades";
import { connect } from "../../../database";

export class NovedadesRepository {
  // private userDatabase: {[key: string]: User} = {};

  public async addNewNovedad(novedad: Novedad) {
    // this.userDatabase[user.userid] = user;

    const conn = await connect();
    await conn.query("INSERT INTO novedades SET ?", [novedad]);
    const res = await conn.query(
      "SELECT * FROM  novedades WHERE id = LAST_INSERT_ID();"
    );
    return res[0][0];
  }
  public async getUserId(userId: string): Promise<Novedad> {
    const conn = await connect();
    const res = await conn.query(
      "SELECT * FROM  novedades WHERE id = ?",
      userId
    );
    return res[0][0];
  }

  public async getUserAll(): Promise<Novedad[]> {
    // return this.userDatabase[userId];
    const conn = await connect();
    const res = await conn.query("SELECT * FROM  novedades");
    for (let index = 0; index < res[0].length; index++) {
      const analista = res[0][index]["analista"];
      const getanalista = await conn.query(
        "SELECT * FROM  analistas WHERE id= ?",
        analista
      );
      res[0][index]["analista"] = getanalista[0][0]["nombres"]+" "+getanalista[0][0]["apellidos"];
    }
    return res[0];
  }

  public async updateUserr(id: string, novedad: Novedad): Promise<Novedad> {
    const conn = await connect();
    await conn.query("UPDATE novedades SET ? WHERE id= ?", [novedad, id]);
    const res = await conn.query("SELECT * FROM  novedades WHERE id = ?", id);
    return res[0][0];
  }
} 
