import { Request, Response } from "express";
import { NovedadesBusinessController } from "../businessControllers/novedades.businessController";
import { Novedad } from "../models/novedades";

export class NovedadesRouteController {
  private novedadBusinessController: NovedadesBusinessController;

  constructor(
    novedadBusinessController: NovedadesBusinessController = new NovedadesBusinessController()
  ) {
    this.novedadBusinessController = novedadBusinessController;
  }

  public addNovedad = async (req: Request, res: Response) => {
    const newNovedad: Novedad = req.body;
    try {
      const dbnovedad = await this.novedadBusinessController.createNewUser(
        newNovedad
      );
      return res.status(200).json(dbnovedad);
    } catch (error) {
      console.log("Error creating new user", error);
      return res
        .status(400)
        .send({ message: "Error creating new user: " + error });
    }
  };

  public getNovedadId = async (req: Request, res: Response) => {
    const userid = req.params.novedadId;
    console.log(userid);
    if (!userid) {
      return res.status(400).send({ message: "el id esta vacio" });
    }
    try {
      const user = await this.novedadBusinessController.getUserId(userid);
      return res.status(200).send(user);
    } catch (error) {
      console.log("Error geting the user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };

  public getNovedadAll = async (req: Request, res: Response) => {
    try {
      const user = await this.novedadBusinessController.getUserAll();
      return res.status(200).send(user);
    } catch (error) {
      console.log("Error geting all user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };

  public updateNovedad = async (req: Request, res: Response) => {
    const novedad = req.body;
    const id = req.params.novedadId;
    try {
      const novedadupdate = await this.novedadBusinessController.updateUser(
        id,
        novedad
      );
      return res.status(200).send(novedadupdate);
    } catch (error) {
      console.log("Error updating the user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };
}
