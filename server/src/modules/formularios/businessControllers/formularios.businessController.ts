import { formularios } from "../models/formularios";
import { formulariosRepository } from "../repositories/formularios.repository";

export class formulariosBusinessController {
  private formularioRepository: formulariosRepository;

  constructor(
    formularioRepository: formulariosRepository = new formulariosRepository()
  ) {
    this.formularioRepository = formularioRepository;
  }
  public async getanalistas(): Promise<formularios[][]> {
    let res=[
      await this.formularioRepository.getanalistas(),
      await this.formularioRepository.getEstadoNovedad(),
      await this.formularioRepository.getTipoNovedad()
    ];
    
    return res;
  }

  //public async getUserById(userid: string): Promise<Analista> {
  //    return this.userRepository.getUserById(userid);
  //}

}
