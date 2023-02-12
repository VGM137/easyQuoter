import React from 'react';
import { useSelector } from 'react-redux';
import Input from './Input';
import ExtraClothes from './ExtraClothes';
import AddButton from './AddButton';
import '../assets/styles/components/OrderSummary.css';

const OrderSummary = () => {
  let extraClothes = useSelector(state => state.orderSummary.extraClothes)
  
  return (
    <section id="OrderSummary" className="order-summary__wrapper container-wrapper">
      <div class='order-summary__input'>
        <Input type={'text'} data={'admin'} placeholder={'Juanito'} label={'Socio'} />
        <Input type={'text'} data={'projectName'} placeholder={'Sudaderas de basquetbol'} label={'Proyecto'} />
        <Input type={'text'} data={'clientName'} placeholder={'Nombre ó Empresa'} label={'Cliente'} />
        <Input type={'text'} data={'description'} placeholder={'Cometarios o especificaciones'} label={'Observaciones'} />
        <Input type={'number'} data={'totalClothes'} placeholder={'12'} label={'Prendas totales'} />
        <Input type={'number'} data={'totalColors'} placeholder={'2'} label={'Número de colores'} />
        <Input type={'number'} data={'digitalWork'} placeholder={'250'} label={'Costo hr de diseño'} />
        <Input type={'number'} data={'logistics'} placeholder={'100'} label={'Envíos'} />
      </div>
      <div className='order-summary__select'>
        <Input type={'select'} data={'clientCode'} placeholder={'4'} label={'CC'} />
        <Input type={'select'} data={'clothingCode'} placeholder={''} label={'CP'} />
        <Input type={'select'} data={'dueDateCode'} placeholder={''} label={'CE'} />
      </div>
      <div className='order-summary__extra-clothes'>
        {
          extraClothes.map((clothes, index) => {
            return <ExtraClothes key={`clothes-group-${index}`} quantity={index} types={'text,number'} data={`extra-clothes__name,extra-clothes__value`} placeholders={'playera,54'} />
          })
        }
        <AddButton component={'extraClothes'} text={'Añadir prenda extra'} />
      </div>
    </section>

  )
};

export default OrderSummary;