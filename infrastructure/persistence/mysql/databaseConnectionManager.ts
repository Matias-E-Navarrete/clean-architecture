
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

export class DatabaseConnectionManager {
    private static connection: Connection
    private static keyConfig = process.env.SECRET_MYSQL
    private static entities = [/* User */]

    private static async getConnectionSettings(): Promise<ConnectionOptions> {

        // #region Dev Local Environment
        if (process.env.ENVIRONMENT === 'dev-local') {
            return {
                type: "mysql",
                host: process.env.HOST,
                port: Number(process.env.PORT),
                username: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.NAME,
                synchronize: false,
                entities: this.entities
            }
        }
        // #endregion

        const settings: any = {} // TODO: Add keyConfigs secrets for production. We should be create function that it obtains credenctials

        // #region Credentials for production
        const connectionOptions: ConnectionOptions = {
            type: "mysql",
            host: settings.host,
            port: Number(settings.port),
            username: settings.user,
            password: settings.password,
            database: settings.name,
            synchronize: false,
            entities: this.entities
        }

        return connectionOptions;
        // #endregion

    }

    static async connect() {
        if (this.connection) return
        const connectionSettings = await this.getConnectionSettings() as ConnectionOptions
        this.connection = await createConnection(connectionSettings);
    }

    static async getRepositories() {
        /* 
        *                                   Examples
        * ===================================================================================
        * const userRepository = new UserRepository(this.connection.getRepository(User))
        * const otherRepository = new OtherRepository(this.connection.getRepository(Other))
        * ===================================================================================
        */

        return {
            /* 
            *                                   Examples
            * ===================================================================================
            * const userRepository = new UserRepository(this.connection.getRepository(User))
            * const otherRepository = new OtherRepository(this.connection.getRepository(Other))
            * ===================================================================================
            */
        }
    }

    static getConnection(): Connection {
        return this.connection
    }
}