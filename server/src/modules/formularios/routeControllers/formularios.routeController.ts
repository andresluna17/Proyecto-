import { Request, Response } from "express";
import { formulariosBusinessController } from "../businessControllers/formularios.businessController";

export class formulariosRouteController {
  private formularioBusinessController: formulariosBusinessController;

  constructor(
    formularioBusinessController: formulariosBusinessController = new formulariosBusinessController()
  ) {
    this.formularioBusinessController = formularioBusinessController;
  }

  public getanalistas = async (req: Request, res: Response) => {
    try {
      const analistas = await this.formularioBusinessController.getanalistas(
      );
      return res.status(200).json(analistas);
    } catch (error) {
      console.log("Error creating new user", error);
      return res
        .status(400)
        .send({ message: "error : " + error });
    }
  };
}
