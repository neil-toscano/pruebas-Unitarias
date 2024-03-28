import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas 07-dese-arr', () => { 
    test('retornaArreglo debe retornar un array', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(letters).toEqual('ABC');
        expect(numbers).toEqual(123);
        
        expect(typeof letters).toEqual('string');
        expect(typeof numbers).toEqual('number');
    })
})