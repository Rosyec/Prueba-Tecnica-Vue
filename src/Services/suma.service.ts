import type { Suma } from "@/interfaces/result.interface";

const getResult = async ( num1: number, num2: number ) => {
    const BASE_URL: string = `https://prueba-tecnica-api.vercel.app/api?num1=${ num1 }&num2=${ num2 }`;
    const response = await fetch( BASE_URL, {method: 'POST'} );
    const data: Suma = await response.json();
    return data;
}


export {
    getResult,
}