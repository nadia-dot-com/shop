import { DEFAULT_VAT, VAT_RATES } from "../data/checkout";

export const getVAT = (subtotal: number, country: string | null) => {
    const rate = country ? 
    VAT_RATES.get(country) 
    ?? DEFAULT_VAT : DEFAULT_VAT;
    
    return subtotal * rate;
};