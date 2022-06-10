import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp'
import '@testing-library/jest-dom';


describe('Pruebas en el componente <GifExpertApp />', () => { 

    test('Debe de mostrar el componente correctamente', () => {
        const wapper = shallow(<GifExpertApp />);
        expect(wapper).toMatchSnapshot();
    })


    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
        const wapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wapper).toMatchSnapshot();
        expect(wapper.find('GifGrid').length).toBe(categories.length);
    })
})