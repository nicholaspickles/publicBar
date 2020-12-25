//ACTIONS
const ADD_VISITED_ITEM = "barkeep/visitedProducts/ADD_VISITED_ITEM";
const ALL_VISITED = "barkeep/visitedProducts/ALL_VISITED";

const initialState = {
  visitedArr: [],
  allVisited: false,
};

export function visit(itemVisited) {
  return {
    type: ADD_VISITED_ITEM,
    payload: itemVisited,
  };
}

export function setAllVisited(bool) {
  return {
    type: ALL_VISITED,
    payload: bool,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VISITED_ITEM:
      return {
        visitedArr: [...state.visitedArr, action.payload],
      };
    case ALL_VISITED:
      return {
        ...state,
        allVisited: action.payload,
      };
    default:
      return { ...state };
  }
}
