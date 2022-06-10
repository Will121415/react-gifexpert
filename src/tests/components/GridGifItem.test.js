import { GridGifItem } from "../../components/GridGifItem";
import React from "react";
import { shallow } from "enzyme";

describe('Pruba en el componente <GridGifItem />', () => {

    const title = 'Titulo del GIF';
    const url = 'https://media2.giphy.com/media/l0HlZ9q2fjX9q/200.gif';
    const wrapper = shallow(<GridGifItem  title={title} url={url}/>);


    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe tener un parrafo con el title', () => { 
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    })

    test('Debe tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener la clase card', () => { 
        
        const div = wrapper.find('div');
        expect(div.hasClass('card')).toBe(true);
    })
})

