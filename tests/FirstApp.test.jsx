/**
* @jest-environment jsdom
*/
import { getAllByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas <FirstApp />', () => { 
    // test('Debe de hacer match con el snapshot', () => { 

    //     const { container } = render( <FirstApp title="hello" subtitle={ 3 }/>);
    //     expect(container).toMatchSnapshot();

    // })    
    
    test('Debe de mostrar el titulo en un h3', () => { 

        const title = "hola, soy Neil";
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/>);
        expect(getByText(title)).toBeTruthy();

        // expect(h3.innerHTML).toBe(title);
        // const h3 = container.querySelector('h3');
        // expect(h3.innerHTML).toContain(title);
        
        // expect(getByTestId('test-title')).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);


    })    
    
    test('Debe de mostrar el subtitulo o los props', () => { 

        const title = 'hola, soy Neil';
        const subTitle = "soy un subtitulo";
        const { getAllByText } = render( <FirstApp title={ title } subtitle={ subTitle }/>);
        expect(getAllByText(subTitle).length).toBe(2);

    })    
})