import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/counterApp";

describe('pruebas CounterApp', () => {
    const valorCounter = 100;

    test('debe de hacer match con el snapshopt', () => { 
        const { container } = render(<CounterApp value={ valorCounter } />);
        expect(container).toMatchSnapshot();
    });
    
    test('debe de mostrar el valor inicial', () => { 
        render(<CounterApp value={ valorCounter } />);
        expect(screen.getAllByText(valorCounter).length).toBe(2);

    });
    
    test('debe de incrementar con el boton +1', () => { 
        render(<CounterApp value={ valorCounter } />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
        
    });
    
    test('debe de decrementar con el boton -1', () => { 
        render(<CounterApp value={ valorCounter } />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
        
    });
    
    test('debe de resetear el estado', () => { 
        render(<CounterApp value={ 199 } />);
        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('reset'));
        expect(screen.getAllByText('199').length).toBe(2)

    });


});