/**
* @jest-environment jsdom
*/
import { getAllByText, render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas <FirstApp />', () => { 

    const title = 'Hola, soy Neil';

    test('debe hacer match con el snapshop', () => { 

        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "HOla, soy Neil"', () => { 

        render(<FirstApp title={ title } />);
        expect(screen.getByText(title)).toBeTruthy();   

    })

    test('debe de mostrar el título en h3', () => {

        render(<FirstApp title={ title } />);
        expect( screen.getByRole('heading', { level: 3 } ).innerHTML).toContain(title); 

    })
    
    test('debe de mostrar el subtitulo enviado por props', () => {
        const subtitle = "curso de react";
        render(<FirstApp title={ title } subtitle={ subtitle } />);
        expect( screen.getAllByText(subtitle).length ).toBe(2); 

    })


})