import { MenuDishVM, IMenuDish } from '../menuDishVM';

export class MenuDishMapper {

    public static IMenuDishArrayTo(fromArray: IMenuDish[]): MenuDishVM[] {
        let result:MenuDishVM[] = [];
        
        for (var i = 0; i < fromArray.length; i++) {
            result.push(MenuDishMapper.IMenuDishTo(fromArray[i]));
        } 
        
        return result;
    }

    public static IMenuDishTo(fromObj: IMenuDish): MenuDishVM {
        let result:MenuDishVM = new MenuDishVM(
            fromObj._id,
            fromObj.name,
            fromObj.description,
            fromObj.price,
            fromObj.imageUrl,
            fromObj.idMenuCategory);
    
        return result;
    }
}