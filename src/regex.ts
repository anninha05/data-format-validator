export const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
export const cpfRegex = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;
export const cnpjRegex = /^(\d{2}\.?\d{3}\.?\d{3}\/?[0-9]{4}-?\d{2})$/;
export const rgRegex = /^(\d{1,2}\.?)(\d{3}\.?)(\d{3})([-]?[\dxX])$/;
export const telefoneFixoRegex = /^(\(?\d{2}\)?\s?)(\d{4}[-\s]?\d{4})$/;
export const celularRegex = /^(\(?\d{2}\)?\s?)(9\d{4}[-\s]?\d{4})$/;
export const telefoneRegex = /^(\(?\d{2}\)?\s?)(\d{4,5}[-\s]?\d{4})$/;
export const placaAntigaRegex = /^[A-Z]{3}-?\d{4}$/i;
export const placaMercosulRegex = /^[A-Z]{3}\d[A-J]\d{2}$/i;
export const placaRegex = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-J]\d{2}$/i;
export const pisRegex = /^(\d{3}\.?\d{5}\.?\d{2}-?\d{1})$/;
export const tituloEleitorRegex = /^\d{12}$/;
export const cnhRegex = /^\d{11}$/;
export const dataBRRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
export const horaRegex = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/;
export const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
export const chavePIXRegex =
  /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}\/?[0-9]{4}-?\d{2})|(\+55\s?\(?\d{2}\)?\s?9?\d{4}[-\s]?\d{4})|([a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,})|([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i;