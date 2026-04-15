import { cepRegex, cpfRegex, cnpjRegex, rgRegex, emailRegex, 
    telephoneRegex, renavamRegex, carPlateRegex, dateRegex, hourRegex, 
    creditCardRegex, pisPasepRegex, cnhRegex, oabRegex } from './regex.js';

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

export function isEmail(email: string): boolean {
    return emailRegex.test(email);
}

export function isTelephone(telephone: string): boolean {
    return telephoneRegex.test(telephone);
}

export function isRenavam(renavam: string): boolean {
    return renavamRegex.test(renavam);
}

export function isCarPlate(carPlate: string): boolean {
    return carPlateRegex.test(carPlate);
}

export function isDate(date: string): boolean {
    return dateRegex.test(date);
}

export function isHour(hour: string): boolean {
    return hourRegex.test(hour);
}

export function isCreditCard(creditCard: string): boolean {
    return creditCardRegex.test(creditCard);
}

export function isPisPasep(pisPasep: string): boolean {
    return pisPasepRegex.test(pisPasep);
}

export function isCnh(cnh: string): boolean {
    return cnhRegex.test(cnh);
}

export function isOab(oab: string): boolean {
    return oabRegex.test(oab);
}   