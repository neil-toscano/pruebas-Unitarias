import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-dees-obj', () => { 
    test('usContext debe retornar un objeto', () => { 
        const testContext = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const context = usContext(persona);

        expect(context).toEqual(testContext);


    })
})