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
            ConsumerTableOrdersMapper.IWaiterTableTo(fromObj.idWaiterUser),
            ConsumerMenuMapper.IConsumerMenuOrderArrayTo(fromObj.consumerMenus));

        return result;
    }
    
    public static IWaiterTableTo(fromObj: IWaiterTable): WaiterTableVM {
        let result: WaiterTableVM = null;
        
        if (fromObj != null) {
            result = new WaiterTableVM(
                fromObj._id,
                fromObj.name + " " + fromObj.lastName);
        }
        else {
            result = new WaiterTableVM("", "");
        }
        
        return result;
    }
}