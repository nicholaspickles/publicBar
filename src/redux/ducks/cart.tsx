//ACTIONS
const UPDATE_CART_ITEMS_ADD = "barkeep/cart/UPDATE_CART_ITEMS_ADD";
const UPDATE_CART_ITEMS_REMOVE = "barkeep/cart/UPDATE_CART_ITEMS_REMOVE";
const MAKE_CART_CONCISE = "barkeep/cart/MAKE_CART_CONCISE";
const CART_VISIBILITY = "barkeep/cart/CART_VISIBILITY";
export interface ItemDetails {
  id: any;
  name: string;
  quantity?: any;
  image: any;
  price: number;
}
export interface CartState {
  itemsInCart: ItemDetails[] | "No items in cart";
}

//INITIAL STATE
const initialState = {
  itemsInCart: [],
  showDrawer: false,
};

//ACTION CREATORS
export function addCartItems(additionalItem: ItemDetails) {
  return {
    type: UPDATE_CART_ITEMS_ADD,
    payload: additionalItem,
  };
}

export function removeCartItems(removedItem: ItemDetails) {
  return {
    type: UPDATE_CART_ITEMS_REMOVE,
    payload: removedItem,
  };
}

export function makeCartConcise(adjustedArray: any) {
  return {
    type: MAKE_CART_CONCISE,
    payload: adjustedArray,
  };
}

export function setCartVisibility(option: any) {
  return {
    type: CART_VISIBILITY,
    payload: option,
  };
}

//REDUCER
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_CART_ITEMS_ADD:
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
      };
    case UPDATE_CART_ITEMS_REMOVE:
      return {
        ...state,
        //change logic so that it pushed it out of the dictionary?
        itemsInCart: state.itemsInCart.filter(
          (item) => item.removedItem !== action.payload
        ),
      };
    case MAKE_CART_CONCISE:
      return {
        ...state,
        itemsInCart: [...action.payload],
      };
    case CART_VISIBILITY:
      return {
        ...state,
        showDrawer: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
