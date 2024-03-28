describe('Pruebas en <DemoComponent />', () => { 

    test('esta prueba no debe fallar', () => {
    
        // 1. Inicializacion
        const message1 = "hola Mundo";
    
        // 2. estimulo
        const messag2 = message1.trim();
    
        // 3. observar el comportamiento
        expect(message1).toBe(messag2);
    })
})
