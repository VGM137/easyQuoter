import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderSummary, changeOrderClothes, updateClothesDependencie } from '../actions';
import '../assets/styles/components/Clothes.css';

const ClothesInput = ({quantity, type, data, placeholder, fieldName, label, value}) => {
  const dispatch = useDispatch()
  
  const totalClothes = useSelector(state => state.orderSummary.totalClothes)
  const totalColors = useSelector(state => state.orderSummary.totalColors)
  const logistics = useSelector(state => state.orderSummary.logistics)
  const digitalWorkPerHr = useSelector(state => state.orderSummary.digitalWork)
  const extraClothesTotal = useSelector(state => state.orderSummary.extraClothesTotal)

  const clothes = useSelector(state => state.serigraphyOrder?.clothes)
  const clothesInputs = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.[fieldName])
  const unitQuantity = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.quantity)
  const unitPrice = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.unitPrice)
  const extraGarment = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.extra)
  const inkTotalPrice = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.totalPrice)
  const prodInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  const prePosProdInputs = useSelector(state => state.serigraphyOrder.prePosProdInputs)
  const prodLabourCosts = useSelector(state => state.serigraphyOrder.prodLabourCosts)
  const prodLabourTime = useSelector(state => state.serigraphyOrder.prodLabourTime)
  const prePosProdLabour = useSelector(state => state.serigraphyOrder.prePosProdLabour)
  const minimumWage = prePosProdLabour.minimumWage

  let inksTotal = 0
  prodInputs.map(input => inksTotal += parseFloat(input.totalPrice))

  let productionInputCost = 0
  Object.values(prePosProdInputs).map(input => productionInputCost += input)
  
  let productionLabourCost = 0
  let labourTime = Object.values(prodLabourTime)
  Object.values(prodLabourCosts).map((cost, i) => productionLabourCost += (cost*parseFloat(labourTime[i])))
  
  let prePosProductionLabourTime = 0
  Object.values(prePosProdLabour).map((time, index) => index === 0 ? '' : prePosProductionLabourTime += time)

  const handleInput = (e, fieldName) => {
    let regex = /(?:[1-9][0-9]*|0)(?:\/[1-9][0-9]*)?/
    let value = e.target.value.match(regex) ? parseFloat(e.target.value) : e.target.value
    let data = [quantity, fieldName, value]
    
    dispatch(changeOrderClothes(data))
    if(fieldName === 'extra'){
      console.log(e)
      console.log(extraClothesTotal)
      let extraClothesArray = clothes.map(clothes => clothes.extra)
      let newValue = extraClothesArray.reduce((a,b) =>  a = a + b , 0 )
      let summaryData = ['extraClothesTotal', newValue]
      dispatch(changeOrderSummary(summaryData))
    }
  }

  useEffect(() => {
    let garmentTotalCost = (unitQuantity+extraGarment)*unitPrice || 0
    let digitalWorkCost = ((digitalWorkPerHr)/totalClothes)*unitQuantity || 0
    let logisticsCost = (logistics/totalClothes)*unitQuantity || 0
    /* let testInputsCost = (extraGarment/totalClothes)*unitQuantity || 0 */
    let inkInput = (inksTotal/totalClothes)*unitQuantity || 0
    let productionInputTotal = ((productionInputCost*totalColors)/totalClothes)*unitQuantity || 0
    let productionLabourTotal = ((productionLabourCost*totalColors*(totalClothes+extraClothesTotal))/totalClothes)*unitQuantity || 0
    let prePosProductionLabourTotal = (( (((minimumWage/8)*prePosProductionLabourTime)/60) * totalColors )/totalClothes)*unitQuantity || 0
    let costWOGarmantSubtotal = digitalWorkCost+logisticsCost+inkInput+productionInputTotal+productionLabourTotal+prePosProductionLabourTotal || 0
    let unitCostWOGarmantSubtotal = costWOGarmantSubtotal/unitQuantity || 0
    let totalCost = garmentTotalCost+costWOGarmantSubtotal || 0
    let unitTotalCost = totalCost/unitQuantity || 0

    console.log(digitalWorkCost)
    dispatch(updateClothesDependencie([quantity, 'totalPrice', parseFloat(garmentTotalCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'digitalWork', parseFloat(digitalWorkCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'logistics', parseFloat(logisticsCost.toFixed(2))]))
    /* dispatch(updateClothesDependencie([quantity, 'testInputs', parseFloat(testInputsCost.toFixed(2))])) */
    dispatch(updateClothesDependencie([quantity, 'inkInput', parseFloat(inkInput.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'prePostProdInputs', parseFloat(productionInputTotal.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'prodLabour', parseFloat(productionLabourTotal.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'prePosProdLabour', parseFloat(prePosProductionLabourTotal.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'costWOGarmant', parseFloat(costWOGarmantSubtotal.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'unitCostWOGarmant', parseFloat(unitCostWOGarmantSubtotal.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'prodTotalCost', parseFloat(totalCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'prodUnitCost', parseFloat(unitTotalCost.toFixed(2))]))
  }, [
      totalClothes,
      totalColors,
      digitalWorkPerHr,
      logistics,
      unitQuantity,
      unitPrice,
      inkTotalPrice,
      prodInputs,
      prePosProdInputs,
      prodLabourCosts,
      prePosProdLabour,
      extraGarment
     ])
  
  return (
    <>
      <div key={`clothes-wrapper-${quantity}`} className='clothes-wrapper'> 
        {fieldName === 'UQuote' 
          ?
            <input 
              key={`clothes-${quantity}`}
              data-number={quantity}
              data-name={fieldName}
              type={type} 
              className={`${data}-input__group`} 
              placeholder={placeholder} 
              onInput={(e) => handleInput(e, fieldName)}
              value={value || ''}
            >
            </input>
          :
            <input 
              key={`clothes-${quantity}`}
              data-number={quantity}
              data-name={fieldName}
              type={type} 
              className={`${data}-input__group`} 
              placeholder={placeholder} 
              onInput={(e) => handleInput(e, fieldName)}
              value={clothesInputs || ''}
            >
            </input>
        }
        <label key={`clothes-label-${quantity}`} className='input-label'>{label}</label>
      </div>
    </>
  )
};


export default ClothesInput;
