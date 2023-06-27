import { ADD_PRODUCT, DECREMENT_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, FILTER_PRODUCTS, INCREMENT_PRODUCT, UPDATE_ID_TO_EDIT } from '../actions/TableActions.js';

const INITIAL_STATE = {
  estoque: [
    /* {
      name:"Rama Bradshaw",
      quantity:"944",
      value:"11",
      id:1
    },
    {
      name:"Computador",
      quantity:"944",
      value:"11",
      id:1
    },
    {
      name:"Pontos",
      quantity:"944",
      value:"11",
      id:1
    },
    {
      name:"Rama Bradshaw",
      quantity:"944",
      value:"11",
      id:1
    },
    {
      name:"Lucas",
      quantity:"944",
      value:"11",
      id:1
    } */
  ],
  idToEdit: 0,
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state = {
        ...state,
        estoque: [
          ...state.estoque,
          {
            ...action.payload,
            id: state.estoque.length + 1
          }
        ]
      };
      case DELETE_PRODUCT:
        const estoqueFiltrado = state.estoque
          .filter((el) => el.id !== action.id);
        const estoqueComIdsAtualizados = estoqueFiltrado
          .reduce((acc, el, index) => {
            el = {
              ...el,
              id: index + 1 
            };
            acc.push(el);
          return acc;
        }, []);
        return state = {
          ...state,
          estoque: estoqueComIdsAtualizados
        };
      case EDIT_PRODUCT:
        const estoqueEditado = state.estoque.reduce((acc, el) => {
          if (el.id === state.idToEdit) {
            el = {
              ...action.payload,
              id: el.id,
            }
          }
          
          acc.push(el);
          return acc;
        }, []);
      return state = {
        ...state,
        estoque: estoqueEditado
      }
      case UPDATE_ID_TO_EDIT:
      return state = {
        ...state,
        idToEdit: action.idToEdit
      }
      case DECREMENT_PRODUCT:
        const estoqueDecrementado = state.estoque.reduce((acc, el) => {
          if (el.id === action.id) {
            let quantityNumber = Number(el.quantity);
            el = {
              ...el,
              quantity: quantityNumber -= 1
            }
          }
          acc.push(el);
          return acc;
        }, []);
      return state = {
        ...state,
        estoque: estoqueDecrementado
      }
      case INCREMENT_PRODUCT:
        const estoqueIncrementado = state.estoque.reduce((acc, el) => {
          if (el.id === action.id) {
            let quantityNumber = Number(el.quantity);
            el = {
              ...el,
              quantity: quantityNumber += 1
            }
          }
          acc.push(el);
          return acc;
        }, []);
      return state = {
        ...state,
        estoque: estoqueIncrementado
      };
      case FILTER_PRODUCTS:
        return state = {
          ...state,
          estoque: action.payload
        }
    default:
      return state;
  }
};

export default tableReducer;
