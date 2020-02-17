import {Analista} from "../models/analista";
import {AnalistasRepository} from "../repositories/analistas.repository";

export class AnalistasBusinessController {
    private analistaRepository: AnalistasRepository;

    constructor(analistaRepository: AnalistasRepository = new AnalistasRepository()) {
        this.analistaRepository = analistaRepository;
    }
    public async createNewUser(user: Analista): Promise<Analista> {
        return this.analistaRepository.addNewUserToDb(user);;
    }

    //public async getUserById(userid: string): Promise<Analista> {
    //    return this.userRepository.getUserById(userid);
    //}

    public async getUserId(userid: string): Promise<Analista> {
        return this.analistaRepository.getUserId(userid);
    }

    public async getUserAll(): Promise<Analista[]> {
        return this.analistaRepository.getUserAll();
    }

    public async updateUser(id:string,analista:Analista):Promise<Analista>{
        return this.analistaRepository.updateUserr(id,analista);
    }
}
