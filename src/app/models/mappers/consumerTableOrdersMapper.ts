import { ConsumerTableVM, IConsumerTable } from "../consumerTableVM";
import { 
    ConsumerTableOrdersVM, 
    IConsumerTableOrders,
    WaiterTableVM, 
    IWaiterTable} from "../consumerTableOrdersVM";

import { ConsumerMenuMapper } from "./consumerMenuMapper";

export class ConsumerTableOrdersMapper {

    public static IConsumerTableOrdersTo(fromObj: IConsumerTableOrders): ConsumerTableOrdersVM {
        let result: ConsumerTableOrdersVM = new ConsumerTableOrdersVM(
            fromObj._id,
            fromObj.name,
            ConsumerTableOrdersMapper.IWaiterTableTo(fromObj.waiter),
            ConsumerMenuMapper.IConsumerMenuArrayTo(fromObj.consumerMenus));

        return result;
    }
    
    public static IWaiterTableTo(fromObj: IWaiterTable): WaiterTableVM {
        let result: WaiterTableVM = new WaiterTableVM(
            fromObj._id,
            fromObj.fullName);
        
        return result;
    }
}