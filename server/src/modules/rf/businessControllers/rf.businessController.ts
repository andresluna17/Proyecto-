import { Novedad } from "../models/novedades";
import { NovedadesRepository } from "../repositories/novedades.repository";

export class NovedadesBusinessController {
  private novedadRepository: NovedadesRepository;

  constructor(
    novedadRepository: NovedadesRepository = new NovedadesRepository()
  ) {
    this.novedadRepository = novedadRepository;
  }
  public async createNewUser(user: Novedad): Promise<Novedad> {
    return this.novedadRepository.addNewNovedad(user);
  }

  //public async getUserById(userid: string): Promise<Analista> {
  //    return this.userRepository.getUserById(userid);
  //}

  public async getUserId(userid: string): Promise<Novedad> {
    return this.novedadRepository.getUserId(userid);
  }

  public async getUserAll(): Promise<Novedad[]> {
    return this.novedadRepository.getUserAll();
  }

  public async updateUser(id: string, analista: Novedad): Promise<Novedad> {
    return this.novedadRepository.updateUserr(id, analista);
  }
}
