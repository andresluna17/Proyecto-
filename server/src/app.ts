import express,{Express} from "express";
import morgan from "morgan";
import cors from "cors";
import { AnalistasModule } from "./modules/analistas/init";
import { NovedadesModule } from "./modules/novedades/init";
import { FormulariosModule } from "./modules/formularios/init";

export class App {
  app: Express;
  database:any;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.initmodules();
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
    //this.app.use(express.bodyParser());
  }

  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
  private initmodules(){
    new AnalistasModule(this.app);
    new NovedadesModule(this.app);
    new FormulariosModule(this.app)
  }
}

export default new App();