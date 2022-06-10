import React from 'react';
import { shallow } from 'enzyme'; 
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wapper = shallow(<AddCategory setCategory={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wapper = shallow(<AddCategory setCategory={ setCategories } />);
    })

    test('Debe funcionar correctamente', () => { 

        expect(wapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
            
            const input = wapper.find('input');
            const value = 'Hola Mundo';
    
            input.simulate('change', { target: { value } });
    
            expect(wapper.find('p').text().trim()).toBe(value);
    })

    test('No debe postear la info con Submit si inputValue esta vacio', () => {

        wapper.find('form').simulate('submit',{ preventDefault() {} });
        expect(setCategories).not.toHaveBeenCalled();

    })

    test('Debe llamar el setCategory y limpiar el inputValue', () => {

        const value = 'Hola Mundo';
        wapper.find('input').simulate('change', { target: {value}});
        wapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect(wapper.find('input').prop('value')).toBe('');
    })

})