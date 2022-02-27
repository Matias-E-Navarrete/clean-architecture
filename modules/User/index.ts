import { GetUsers } from './getUser/application/getUsers';
import { CreateUser } from "./createUser/application/create";


export const createUser = new CreateUser() 
export const getUsers = new GetUsers() 
