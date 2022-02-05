import { asClass, asFunction, asValue, AwilixContainer, createContainer, InjectionMode } from 'awilix';

// #region Infrastructure Imports
import Express from '../../infrastructure/server/express/express';
import { DatabaseConnectionManager } from '../../infrastructure/persistence/mysql/databaseConnectionManager';
// #endregion

export class IoC {

    private static container: AwilixContainer

    static async init(): Promise<AwilixContainer> {

        // #region Asynchronous Dependencies
        // const {userRespository} = await this.resolvePersistenceSystem()
        // #endregion

        // #region Create Container
        this.container = createContainer({ injectionMode: InjectionMode.CLASSIC })
        // #endregion

        // this.addClassDependency('getUserService', GetUserService)

        return this.container;
    }

    static async resolvePersistenceSystem(): Promise<{ [key: string]: any }>{
        await DatabaseConnectionManager.connect();
        const repositories = DatabaseConnectionManager.getRepositories()

        return repositories;
    }

    private static addClassDependency(key: string, value: any){
        this.container.register({
            [key]: asClass(value).scoped().singleton()
        })
    }
    
    private static addCValueDependency(key: string, value: any){
        this.container.register({
            [key]: asValue(value)
        })
    }

    private static addFunctionDependency(key: string, value: any){
        this.container.register({
            [key]: asFunction(value)
        })
    }

}