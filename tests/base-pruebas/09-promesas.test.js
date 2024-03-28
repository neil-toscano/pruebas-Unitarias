import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => { 
    test('getHeroeByIdAsync debe retornar una promesa ', async () => { 
        
        const id = 1;
        const hero = await getHeroeByIdAsync(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })
    
    test('getHeroeByIdAsync debe obtener un error ', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch((error) => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })
})