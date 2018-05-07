import { MenuCategoryVM, IMenuCategory } from '../menuCategoryVM';

export class MenuCategoryMapper {

    public static IMenuCategoryArrayTo(fromArray: IMenuCategory[]): MenuCategoryVM[] {
        let result:MenuCategoryVM[] = [];
        
        for (var i = 0; i < fromArray.length; i++) {
            result.push(MenuCategoryMapper.IMenuCategoryTo(fromArray[i]));
        } 
        
        return result;
    }

    public static IMenuCategoryTo(fromObj: IMenuCategory): MenuCategoryVM {
        let result:MenuCategoryVM = new MenuCategoryVM(
            fromObj._id,
            fromObj.name);
    
        return result;
    }
}