import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App.js';

const initialState = {
  orderSummary: {
    admin: '',
    projectName: '',
    clientName: '',
    description: '',
    totalClothes: '',
    totalColors: 1,
    digitalWork: 0,
    logistics: 0,
    extraClothesTotal: '',//Crear suma para el estado
    clientCode: '',
    clothingCode: '',
    dueDateCode: ''
  },
  serigraphyOrder: {
    clothes: [{
      type: '',
      cut: '',
      color: '',
      size: '',
      material: '',
      brand: '',
      quantity: 0,
      extra: 0,
      unitPrice: 0,
      totalPrice: 0,
      digitalWork: 0,
      logistics: 0,
      testInputs: 0,
      inkInput: 0,
      prePostProdInputs: 0,
      prodLabour: 0,
      prePosProdLabour: 0,
      costWOGarmant: 0,
      prodTotalCost: 0,
      prodUnitCost: 0,
      profit: 0,
      price: 0,
      taxes: 0,
    }],
    productionInputs: [{
      ink: '',
      quarterKgPrice: 0,
      oneKgPrice: 0,
      input: 0,
      quantityToBuy: 0,
      totalPrice: 0,
    }],
    prePosProdInputs: {
      frameWear: 5,
      photolith: 30,
      emulsion: 5,
      degreaser: 5,
      emulsionRemover: 5,
      ghostRemover: 5,
    },
    prePosProdLabour: {
      minimumWage: 207,
      meshRecovery: 30,
      graphicProcessing: 30,
      register: 30,
      cleaning: 20,
      other: 10,
    },
    prodLabour: {
      printing: 1,
      preDrying: 1,
      ironing: 1,
      package: 2
    }
  },

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app"))
