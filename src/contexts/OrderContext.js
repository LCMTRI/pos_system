import { createContext } from "react";
import useOrderReducer from "../reducers/OrderReducer";

const OrderContext = createContext();

function OrderProvider({ children }) {
    const [orderState, orderDispatch ] = useOrderReducer([]);

    const providerState = {
        orderState,
        orderDispatch
    }

    
    return (
        <OrderContext.Provider value={providerState}>
            {children}
        </OrderContext.Provider>
    )
}
export { OrderContext, OrderProvider }