import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba 11-async-await', () => { 
   test('getImagen debe devolver la url', async () => { 

    const url = await getImagen();
    expect(typeof url).toBe('string');
    
    }) 
   
    // test('getImagen debe devolver mensaje si no encuentra', async () => { 

    //     const testUrl = 'No se encontro la imagen';
    //     const url = await getImagen();
    //     expect(url).toBe(testUrl);

    // }) 
})