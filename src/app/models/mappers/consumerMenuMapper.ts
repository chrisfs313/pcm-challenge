import { ConsumerMenuVM, IConsumerMenu } from '../consumerMenuVM';

export class ConsumerMenuMapper {

    public static IConsumerMenuArrayTo(fromArray: IConsumerMenu[]): ConsumerMenuVM[] {
        let result:ConsumerMenuVM[] = [];
        
        for (var i = 0; i < fromArray.length; i++) {
            result.push(ConsumerMenuMapper.IConsumerMenuTo(fromArray[i]));
        } 
        
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