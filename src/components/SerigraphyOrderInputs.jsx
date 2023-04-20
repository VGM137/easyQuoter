import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import ClothesInput from './ClothesInput';
import SerigraphyClothesHeader from './SerigraphyClothesHeader';
import '../assets/styles/components/SerigraphyOrder.css';

const SerigraphyOrderInputs = () => {
  let clothesArray = useSelector(state => state.serigraphyOrder.clothes)

  const [clothesOutputs,setClothesCostsArray] = useState([])

  useEffect(() => {
    let renderArray = clothesArray.map((clothes, index) => {
      return  <div key={`clothes-wrapper-${index}`} id="" className="serigraphy-clothes__wrapper">
                <SerigraphyClothesHeader quantity={index} />
                <ClothesInput key={`clothes-clothes-type-${index}`} quantity={index} type={'text'} data={`clothes-type`} placeholder={'Playera'}label={'Tipo de prenda'}fieldName='type' />
                <ClothesInput key={`clothes-clothes-cut-${index}`} quantity={index} type={'text'} data={`clothes-cut`} placeholder={'Negro'}label={'Color'}fieldName='cut' />
                <ClothesInput key={`clothes-clothes-color-${index}`} quantity={index} type={'text'} data={`clothes-color`} placeholder={'Manga corta'}label={'Corte'}fieldName='color' />
                <ClothesInput key={`clothes-clothes-size-${index}`} quantity={index} type={'text'} data={`clothes-size`} placeholder={'M'}label={'Tamaño'}fieldName='size' />
                <ClothesInput key={`clothes-clothes-material-${index}`} quantity={index} type={'text'} data={`clothes-material`} placeholder={'Algodón'}label={'Material'}fieldName='material' />
                <ClothesInput key={`clothes-clothes-brand-${index}`} quantity={index} type={'text'} data={`clothes-brand`} placeholder={'M&O'}label={'Marca'}fieldName='brand' />
                <ClothesInput key={`clothes-clothes-quantity-${index}`} quantity={index} type={'text'} data={`clothes-quantity`} placeholder={'12'}label={'Cantidad'}fieldName='quantity' />
                <ClothesInput key={`clothes-extra-garment-${index}`} quantity={index} type={'number'} data={`extra-garment`} placeholder={'1'}label={'Prenda extra'}fieldName='extra' />
                <ClothesInput key={`clothes-clothes-unitPrice-${index}`} quantity={index} type={'number'} data={`clothes-unitPrice`} placeholder={'52'}label={'Precio unitario'}fieldName='unitPrice' />
                {/* <ClothesInput key={`clothes-clothes-365sale-${index}`} quantity={index} type={'number'} data={`clothes-365sale`} placeholder={'350'}label={'Venta 365'}fieldName='USale' /> */}
                {/* <ClothesInput key={`clothes-clothes-365quote-${index}`} quantity={index} type={'number'} data={`clothes-365quote`} placeholder={'140'}label={'Cotización 365'}fieldName='UQuote' /> */}
                {/* <ClothesInput key={`clothes-clothes-algarin-${index}`} quantity={index} type={'number'} data={`clothes-algarin`} placeholder={'80'}label={'Algarín'}fieldName='algarin' /> */}
              </div>
    })
    setClothesCostsArray(renderArray)
  }, [clothesArray])
  
  return (
    <>
      {clothesOutputs}
    </>
  )
};

export default SerigraphyOrderInputs;
