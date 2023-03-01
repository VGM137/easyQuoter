const reducer = (state, action) => {

  switch(action.type){
    
    case 'CONFIG_INPUT':
      return {
        ...state,
        serigraphyOrder: {...state.serigraphyOrder, prePosProdInputs: {...state.serigraphyOrder.prePosProdInputs, [action.payload[0]]: action.payload[1]}}
      }
    
    case 'CONFIG_LABOUR':
      return {
        ...state,
        serigraphyOrder: {...state.serigraphyOrder, prePosProdLabour: {...state.serigraphyOrder.prePosProdInputs, [action.payload[0]]: action.payload[1]}}
      }
    
    case 'CONFIG_LABOUR_COST':
      return {
        ...state,
        serigraphyOrder: {...state.serigraphyOrder, prodLabourCosts: {...state.serigraphyOrder.prePosProdInputs, [action.payload[0]]: action.payload[1]}}
      }
    
    case 'CONFIG_LABOUR_TIME':
      return {
        ...state,
        serigraphyOrder: {...state.serigraphyOrder, prodLabourTime: {...state.serigraphyOrder.prePosProdInputs, [action.payload[0]]: action.payload[1]}}
      }
    
    case 'SHOW_CONFIG':
      return {
        ...state,
        showConfigurations: action.payload
      }
    
    case 'CHANGE_SERIGRAPHY_CARD':
      return {
        ...state,
        showSerigraphyCard: action.payload
      }

    case 'ORDER_SUMMARY':
      let orderSummary = {}
      for (const [key, value] of Object.entries(state.orderSummary)) {
        if(key == action.payload[0]){
          orderSummary[key] = action.payload[1]
        } else {
          orderSummary[key] = value
        }
      }
      return {
        ...state,
        orderSummary: orderSummary
      }

/*     case 'CHANGE_GROUP':
      let index = 0
      let newExtraClothes = state.orderSummary.extraClothes.map(cloth => { 
        if(index == action.payload[0]) {
          index++
          return {
            groupName: action.payload[1].groupName,
            groupValue: action.payload[1].groupValue
          }
        }else{
          index++
          return cloth
        }
      })

      return {
        ...state,
        orderSummary: {...state.orderSummary, extraClothes: newExtraClothes}
      } */
    
/*     case 'ADD_EXTRA_CLOTHES':
      return {
        ...state,
        orderSummary: {...state.orderSummary, extraClothes: [...state.orderSummary.extraClothes, action.payload]}
      } */
    
    case 'ORDER_CLOTHES':
    return {
        ...state,
        serigraphyOrder: {...state.serigraphyOrder, clothes: state.serigraphyOrder.clothes.map((clothes, i) => i === action.payload[0] ? {...clothes, [action.payload[1]]: action.payload[2]}: clothes)}
      }

    case 'ADD_CLOTHES':
      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, clothes: [...state.serigraphyOrder.clothes, action.payload]}
        }

    case 'DELETE_CLOTHES':


      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, clothes: [...state.serigraphyOrder.clothes.filter((clothes, i) => i !== action.payload)]}
        }

    case 'CHANGE_INK':
      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, productionInputs: state.serigraphyOrder.productionInputs.map((input, i) => i === action.payload[0] ? {...input, [action.payload[1]]: action.payload[2]}: input)}
        }
        
    case 'UPDATE_INK':
      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, productionInputs: action.payload}
        }

    case 'UPDATE_CLOTHES_DEPENDENCIE':
      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, clothes: state.serigraphyOrder.clothes.map((clothes, i) => i === action.payload[0] ? {...clothes, [action.payload[1]]: action.payload[2]}: clothes)}
        }
        
    case 'UPDATE_INK_DEPENDENCIE':
      return {
          ...state,
          serigraphyOrder: {...state.serigraphyOrder, productionInputs: state.serigraphyOrder.productionInputs.map((input, i) => i === action.payload[0] ? {...input, [action.payload[1]]: action.payload[2]}: input)}
        }

    case 'UPDATE_ECTOTAL':
      return {
          ...state,
          orderSummary: {...state.orderSummary, extraClothesTotal: action.payload}
        }

    default :
    return state;
  }
}

export default reducer;
/* ...state.serigraphyOrder.clothes, ...state.serigraphyOrder.clothes[action.payload[0]][clothesLevel] = action.payload[2] */