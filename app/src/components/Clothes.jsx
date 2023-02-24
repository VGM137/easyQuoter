import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderSummary, changeOrderClothes, updateClothesDependencie } from '../actions';
import '../assets/styles/components/Clothes.css';

const Clothes = ({quantity, types, data, placeholders, fieldNames, labels}) => {
  const dispatch = useDispatch()
  
  const totalClothes = useSelector(state => state.orderSummary.totalClothes)
  const totalColors = useSelector(state => state.orderSummary.totalColors)
  const logistics = useSelector(state => state.orderSummary.logistics)
  const digitalWorkPerHr = useSelector(state => state.orderSummary.digitalWork)
  const extraClothesTotal = useSelector(state => state.orderSummary.extraClothesTotal)

  const clothesArray = useSelector(state => state.serigraphyOrder?.clothes)
  const unitQuantity = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.quantity)
  const unitPrice = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.unitPrice)
  const extraGarment = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.extra)
  const inkTotalPrice = useSelector(state => state.serigraphyOrder?.clothes[quantity]?.totalPrice)
  const prodInputs = useSelector(state => state.serigraphyOrder.productionInputs)
  const prePosProdInputs = useSelector(state => state.serigraphyOrder.prePosProdInputs)
  const prodLabour = useSelector(state => state.serigraphyOrder.prodLabour)
  const prePosProdLabour = useSelector(state => state.serigraphyOrder.prePosProdLabour)
  const minimumWage = prePosProdLabour.minimumWage

  let inksTotal = 0
  prodInputs.map(input => inksTotal += input.totalPrice)

  let productionInputCost = 0
  Object.values(prePosProdInputs).map(input => productionInputCost += input)
  
  let productionLabourCost = 0
  Object.values(prodLabour).map(cost => productionLabourCost += cost)
  
  let prePosProductionLabourTime = 0
  Object.values(prePosProdLabour).map((time, index) => index === 0 ? '' : prePosProductionLabourTime += time)

  let inputTypes = types.split(',')
  let inputData = data.split(',')
  let inputPlaceholders = placeholders.split(',')
  let inputFields = fieldNames.split(',')
  let inputLabels = labels.split(',')

  const handleInput = (e, fieldName, index) => {
    let regex = /^\d+$/
    let value = e.target.value.match(regex) ? parseInt(e.target.value) : e.target.value
    let data = [quantity, fieldName, value]
    
    dispatch(changeOrderClothes(data))
    if(fieldName === 'extra'){
      console.log(extraClothesTotal)
      let newValue = parseInt(extraClothesTotal) + value
      let summaryData = ['extraClothesTotal', newValue]
      dispatch(changeOrderSummary(summaryData))
    }
  }

  useEffect(() => {
    let garmentTotalCost = (unitQuantity+extraGarment)*unitPrice
    let digitalWorkCost = ((digitalWorkPerHr)/totalClothes)*unitQuantity
    let logisticsCost = (logistics/totalClothes)*unitQuantity
    let testInputsCost = (extraGarment/totalClothes)*unitQuantity
    let inkInput = (inksTotal/totalClothes)*unitQuantity
    let productionInputTotal = ((productionInputCost*totalColors)/totalClothes)*unitQuantity
    let productionLabourTotal = ((productionLabourCost*totalColors*(totalClothes+extraGarment))/totalClothes)*unitQuantity
    let prePosProductionLabourTotal = (( (((minimumWage/8)*prePosProductionLabourTime)/60) * totalColors )/totalClothes)*unitQuantity
    let costWOGarmantSubtotal = digitalWorkCost+logisticsCost+testInputsCost+inkInput+productionInputTotal+productionLabourTotal+prePosProductionLabourTotal
    let unitCostWOGarmantSubtotal = costWOGarmantSubtotal/unitQuantity
    let totalCost = garmentTotalCost+costWOGarmantSubtotal
    let unitTotalCost = totalCost/unitQuantity

    dispatch(updateClothesDependencie([quantity, 'totalPrice', parseFloat(garmentTotalCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'digitalWork', parseFloat(digitalWorkCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'logistics', parseFloat(logisticsCost.toFixed(2))]))
    dispatch(updateClothesDependencie([quantity, 'testInputs', parseFloat(testInputsCost.toFixed(2))]))
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
      prodLabour,
      prePosProdLabour
     ])
  
  return (
    <>
    <div id="" className="serigraphy-clothes__wrapper">
      <h3 className='serigraphy-clothes__title'>{`Prenda ${quantity+1}`}</h3>
      {inputTypes.map((type, index) => {
        return <div key={`clothes-wrapper-${quantity}-${index}`} className='clothes-wrapper'> <input 
          key={`clothes-${quantity}-${index}`}
          data-number={quantity}
          data-name={inputFields[index]}
          type={type} 
          className={`${inputData[index]}-input__group`} 
          placeholder={inputPlaceholders[index]} 
          onInput={(e) => handleInput(e, inputFields[index], index)}
        >
        </input>
        <label key={`clothes-label-${quantity}-${index}`} className='input-label'>{inputLabels[index]}</label>
        </div>
      })}
    </div>
    </>
  )
};


export default Clothes;
