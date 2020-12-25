//ACTIONS
const CONVERSION_ORDER_TYPE = 'barkeep/conversions/CONVERSION_ORDER_TYPE';
const UPDATE_ORDER_DETAILS = 'barkeep/conversions/UPDATE_ORDER_DETAILS';

export interface ConversionDetails {
    conversiontype: string,
    spirit: string,
    volumes: [],
    cocktail? : [],
    infusedWith? : string,
}

export interface Conversion {
    conversionType: "cocktail" | "liquor",
    conversionDetails: ConversionDetails[]
}

//INITIAL STATE
const initialState = {
    conversionType: "cocktail",
    conversionDetails: []
}

//ACTION CREATORS
export function updateConversionType(conversionType) {
    return {
        type:CONVERSION_ORDER_TYPE,
        payload: conversionType
    }
}

export function insertOrderDetails(details: ConversionDetails) {
    return {
        type: UPDATE_ORDER_DETAILS,
        payload: details
    }
}

//REDUCER

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case CONVERSION_ORDER_TYPE:
            return {
                ...state,
                conversionType: action.payload
            }
        case UPDATE_ORDER_DETAILS:
            return {
                ...state,
                conversionDetails: [...action.payload]
            }
        default:
            return state;
    }
}