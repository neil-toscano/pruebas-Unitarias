import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-template-string', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar un json', () => { 

        const name= 'Neil';

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: name,
        }

        const usuarioActivo = getUsuarioActivo(name); 
        expect(usuarioActivo).toEqual(testUsuarioActivo);
    })

 })