export const showConfigurations = (payload) => ({
  type: "SHOW_CONFIG",
  payload 
 });
export const configProdInputs = (payload) => ({
  type: "CONFIG_INPUT",
  payload 
 });
export const configProdLabour = (payload) => ({
  type: "CONFIG_LABOUR",
  payload 
 });
export const configLabourCost = (payload) => ({
  type: "CONFIG_LABOUR_COST",
  payload 
 });
export const configLabourTime = (payload) => ({
  type: "CONFIG_LABOUR_TIME",
  payload 
 });
export const changeSerygraphyOrderCard = (payload) => ({
  type: "CHANGE_SERIGRAPHY_CARD",
  payload 
 });

export const changeInkOrderCard = (payload) => ({
  type: "CHANGE_INK_CARD",
  payload 
 });
export const changeOrderSummary = (payload) => ({
  type: "ORDER_SUMMARY",
  payload 
 });
export const changeOrderClothes = (payload) => ({
  type: "ORDER_CLOTHES",
  payload 
 });
/* export const addExtraClothes = (payload) => ({
  type: "ADD_EXTRA_CLOTHES",
  payload 
 }); */
export const addClothes = (payload) => ({
  type: "ADD_CLOTHES",
  payload 
 });
export const deleteClothes = (payload) => ({
  type: "DELETE_CLOTHES",
  payload 
 });
export const changeInk = (payload) => ({
  type: "CHANGE_INK",
  payload 
 });
export const updateInks = (payload) => ({
  type: "UPDATE_INK",
  payload 
 });

export const updateClothesDependencie = (payload) => ({
  type: "UPDATE_CLOTHES_DEPENDENCIE",
  payload 
 });
export const updateInkDependencie = (payload) => ({
  type: "UPDATE_INK_DEPENDENCIE",
  payload 
 });

export const updateExtraClothesTotal = (payload) => ({
  type: "UPDATE_ECTOTAL",
  payload 
 });