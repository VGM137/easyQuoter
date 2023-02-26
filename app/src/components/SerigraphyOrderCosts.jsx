import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ClothesOutput from './ClothesOutput';
import SerigraphyClothesHeader from './SerigraphyClothesHeader';
import '../assets/styles/components/SerigraphyOrder.css';

const SerigraphyOrderCosts = () => {
  let clothesArray = useSelector(state => state.serigraphyOrder.clothes)

  const [clothesOutputs,setClothesCostsArray] = useState([])

  useEffect(() => {
    console.log('effect')
    let renderArray = clothesArray.map((clothes, index) => {
      console.log(index)
      return  <div key={`serigraphy-order-cost-${index}`} id="" className="serigraphy-clothes__cost-wrapper">
                <SerigraphyClothesHeader quantity={index}/>
                <ClothesOutput index={index} component={clothes.totalPrice} label={'Precio'} />
                <ClothesOutput index={index} component={clothes.digitalWork} label={'Diseño'} />
                <ClothesOutput index={index} component={clothes.logistics} label={'Logística'} />
                <ClothesOutput index={index} component={clothes.testInputs} label={'Pruebas'} />
                <ClothesOutput index={index} component={clothes.inkInput} label={'Tinta'} />
                <ClothesOutput index={index} component={clothes.prePostProdInputs} label={'Insumos'} />
                <ClothesOutput index={index} component={clothes.prodLabour} label={'MO prod'} />
                <ClothesOutput index={index} component={clothes.prePosProdLabour} label={'MO pre/pos'} />
                <ClothesOutput index={index} component={clothes.costWOGarmant} label={'C/s/prenda'} />
                <ClothesOutput index={index} component={clothes.unitCostWOGarmant} label={'C/u/s/prenda'} />
                <ClothesOutput index={index} component={clothes.prodTotalCost} label={'Subtotal'} />
                <ClothesOutput index={index} component={clothes.prodUnitCost} label={'Costo unitario'} />
                <ClothesOutput index={index} component={clothes.profit} label={'Utilidades'} />
                <ClothesOutput index={index} component={clothes.price} label={'Costo'} />
                <ClothesOutput index={index} component={clothes.taxes} label={'Impuestos'} />
              </div>
    });
    setClothesCostsArray(renderArray)
  }, [clothesArray])
  
  return (
    <>
      {clothesOutputs}
    </>
  )
};

export default SerigraphyOrderCosts;
