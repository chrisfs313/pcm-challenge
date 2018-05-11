import { UserVM, IUser } from '../userVM';

export class UserMapper {

    public static IUserTo(fromObj: IUser): UserVM {
        let result:UserVM = new UserVM(
            fromObj.user._id,
            fromObj.user.name,
            fromObj.user.lastName,
            fromObj.user.dni,
            fromObj.user.idLaborType);
    
        return result;
    }
}