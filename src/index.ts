export * from './regex.js';

import {
  cepRegex, cpfRegex, cnpjRegex, rgRegex,
  telefoneFixoRegex, celularRegex, telefoneRegex,
  placaAntigaRegex, placaMercosulRegex, placaRegex,
  pisRegex, tituloEleitorRegex, cnhRegex,
  dataBRRegex, horaRegex, emailRegex, chavePIXRegex
} from './regex.js';


export function isCep(cep: string): boolean {
  return cepRegex.test(cep);
}

export function isCpf(cpf: string): boolean {
  return cpfRegex.test(cpf);
}

export function isCnpj(cnpj: string): boolean {
  return cnpjRegex.test(cnpj);
}

export function isRg(rg: string): boolean {
  return rgRegex.test(rg);
}

export function isTelefoneFixo(tel: string): boolean {
  return telefoneFixoRegex.test(tel);
}

export function isCelular(cel: string): boolean {
  return celularRegex.test(cel);
}

export function isTelefone(tel: string): boolean {
  return telefoneRegex.test(tel);
}

export function isPlacaAntiga(placa: string): boolean {
  return placaAntigaRegex.test(placa);
}

export function isPlacaMercosul(placa: string): boolean {
  return placaMercosulRegex.test(placa);
}

export function isPlaca(placa: string): boolean {
  return placaRegex.test(placa);
}

export function isPis(pis: string): boolean {
  return pisRegex.test(pis);
}

export function isTituloEleitor(titulo: string): boolean {
  return tituloEleitorRegex.test(titulo);
}

export function isCnh(cnh: string): boolean {
  return cnhRegex.test(cnh);
}

export function isDataBR(data: string): boolean {
  return dataBRRegex.test(data);
}

export function isHora(hora: string): boolean {
  return horaRegex.test(hora);
}

export function isEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function isChavePIX(chave: string): boolean {
  return chavePIXRegex.test(chave);
}
