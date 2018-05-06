import { ConsumerTableVM, IConsumerTable } from "../consumerTableVM"

export class ConsumerTableMapper {

    public static IConsumerTableArrayTo(fromArray: IConsumerTable[]): ConsumerTableVM[] {
        let result:ConsumerTableVM[] = [];
        
        for (var i = 0; i < fromArray.length; i++) {
            result.push(ConsumerTableMapper.IConsumerTableTo(fromArray[i]));
        } 
        
        return result;
    }

    public static IConsumerTableTo(fromObj: IConsumerTable): ConsumerTableVM {
        let result: ConsumerTableVM = new ConsumerTableVM(
            fromObj._id,
            fromObj.name,
            fromObj.size,
            fromObj.consumerCount,
            fromObj.isOccupied,
            fromObj.idWaiterUser);

        return result;
    }
}