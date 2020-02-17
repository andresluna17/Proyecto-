import { Request, Response } from "express";
import { AnalistasBusinessController } from "../businessControllers/analistas.businessController";
import { Analista } from "../models/analista";

export class AnalistasRouteController {
  private analistaBusinessController: AnalistasBusinessController;

  constructor(
    analistaBusinessController: AnalistasBusinessController = new AnalistasBusinessController()
  ) {
    this.analistaBusinessController = analistaBusinessController;
  }

  public addAnalista = async (req: Request, res: Response) => {
    const newAnalista: Analista = req.body;
    try {
      const dbAnalista = await this.analistaBusinessController.createNewUser(
        newAnalista
      );
      return res.status(200).json(dbAnalista);
    } catch (error) {
      console.log("Error creating new user", error);
      return res
        .status(400)
        .send({ message: "Error creating new user: " + error });
    }
  };

  public getAnalistaId = async (req: Request, res: Response) => {
    const userid:string = req.params.analistaId;
    console.log(userid);
    if (!userid) {
      return res.status(400).send({ message: "el id esta vacio" });
    }
    try {
      const user = await this.analistaBusinessController.getUserId(userid);
      return res.status(200).send(user);
    } catch (error) {
      console.log("Error geting the user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };

  public getAnalistaAll = async (req: Request, res: Response) => {
    try {
      const user = await this.analistaBusinessController.getUserAll();
      return res.status(200).send(user);
    } catch (error) {
      console.log("Error geting all user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };

  public updateAnalista = async (req: Request, res: Response) => {
    const analista:Analista = req.body;
    const id:string = req.params.analistaId;
    try {
      const analistaupdate = await this.analistaBusinessController.updateUser(
        id,
        analista
      );
      return res.status(200).send(analistaupdate);
    } catch (error) {
      console.log("Error updating the user", error);
      return res.status(400).send({ error: true, message: error });
    }
  };
}
