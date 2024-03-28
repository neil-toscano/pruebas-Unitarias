import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe ', () => { 

        const heroeId = 1;
        const testHeroe = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }

        const heroeById = getHeroeById(heroeId);

        expect(heroeById).toEqual(testHeroe);

    })

    test('getHeroeById debe retornar undefined si no existe', () => { 

        const heroeId = 100;
        const heroeById = getHeroeById(heroeId);
    
        expect(heroeById).toBeFalsy();
    
    })
    
    test('getHeroeByOwner debe retornar los heroes DC', () => { 

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
    
        expect(hero).toHaveLength(3);
    
    })
    
    test('getHeroeByOwner debe retornar los heroes Marvel', () => { 

        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
    
        expect(hero).toHaveLength(2);
    
    })
})