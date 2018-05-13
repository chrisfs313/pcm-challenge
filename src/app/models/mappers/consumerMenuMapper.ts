import { 
    ConsumerMenuVM,
    ConsumerMenuOrderVM,
    IConsumerMenu,
    IConsumerMenuOrder
} from '../consumerMenuVM';

export class ConsumerMenuMapper {

    public static IConsumerMenuOrderArrayTo(fromArray: IConsumerMenuOrder[]): ConsumerMenuOrderVM[] {
        let result:ConsumerMenuOrderVM[] = [];
        
        for (var i = 0; i < fromArray.length; i++) {
            result.push(ConsumerMenuMapper.IConsumerMenuOrderTo(fromArray[i]));
        } 
        
        return result;
    }
    
    public static IConsumerMenuOrderTo(fromObj: IConsumerMenuOrder): ConsumerMenuOrderVM {
        let result: ConsumerMenuOrderVM = new ConsumerMenuOrderVM(
            fromObj._id,
            ConsumerMenuMapper.IConsumerMenuTo(fromObj.idMenuDish),
            fromObj.idOrderStatusType);

        return result;
    }

    public static IConsumerMenuTo(fromObj: IConsumerMenu): ConsumerMenuVM {
        let result: ConsumerMenuVM = new ConsumerMenuVM(
            fromObj._id,
            fromObj.name,
            fromObj.price,
            fromObj.imageUrl);

        return result;
    }
}