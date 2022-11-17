import { useReducer } from "react"

function useOrderReducer(iniData = []) {
    const iniState = {
        status: "idle",
        data: iniData,
        confirmData: [],
        error: null,
    }
    function orderReducer(state, action) {
        switch (action.type) {
            case 'ADD':
                if (state.data.findIndex(v => v.name === action.payload.name) !== -1)
                    return {
                        ...state,
                        status: "failed",
                        error: "item already existed",
                    }
                return {
                    ...state,
                    status: "successful",
                    data: state.data.push(action.payload),
                    error: null,
                }

            case 'DELETE':
                
                if (state.data.findIndex(v => v.name === action.payload.name) === -1)
                    return {
                        ...state,
                        status: "failed",
                        error: "item doesn't existed",
                    }
                return {
                    ...state,
                    status: "successful",
                    data: state.data.splice(state.data.findIndex(v => v.name === action.payload.name), 1),
                    error: null,
                }
            case 'INS':

                if (state.data.findIndex(v => v.name === action.payload.name) === -1)
                    return {
                        ...state,
                        status: "failed",
                        error: "item doesn't existed",
                    }
                return {
                    ...state,
                    status: "successful",
                    data: state.data.map(
                        (content, i) => i === state.data.findIndex(v => v.name === action.payload.name) ? { ...content, no: action.payload.no } : content
                    ),
                    error: null,
                }
            case 'DES':
                if (state.data.findIndex(v => v.name === action.payload.name) === -1)
                    return {
                        ...state,
                        status: "failed",
                        error: "item doesn't existed",
                    }
                return {
                    ...state,
                    status: "successful",
                    data: state.data.map(
                        (content, i) => i === state.data.findIndex(v => v.name === action.payload.name) ? { ...content, no: action.payload.no } : content
                    ),
                    error: null,
                }
            case 'CONFIRM_ORDER':
                if (!action.payload.data.length)
                    return {
                        ...state,
                        status: "failed",
                        error: "orderList is empty",
                    }
                return {
                    ...state,
                    status: "successful",
                    confirmData: action.payload.data,
                    data: [],
                    error: null,
                }
            default:
                return {
                    ...state,
                    status: "failed",
                    error: "Invalid or Uncorrect Format",
                    
                }
        }
    }
    return useReducer(orderReducer, iniState);
}

export default useOrderReducer;