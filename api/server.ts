import IServer from "../infrastructure/interfaces/IServer.interface";

export class Server implements IServer {

    private static instance: Server;

    private constructor(private readonly express, applicationService) {
        Server.instance = express;
    }

    //#region Singleton pattern.  
    static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = this.constructor()
        }
        return Server.instance
    }
    //#endregion

    run(port: number) {
        this.express.listen(port)
    }

    stop(done: unknown) {
        this.express.close(done)
    }
}