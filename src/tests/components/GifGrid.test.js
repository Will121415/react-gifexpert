import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe funcionar correctamente', () => { 
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wapper = shallow(<GifGrid category={category}/>);
        expect(wapper).toMatchSnapshot();
    })

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wapper = shallow(<GifGrid category={category}/>);

        // expect(wapper).toMatchSnapshot();
        expect(wapper.find('strong').exists()).toBe(false);
        expect(wapper.find('GridGifItem').length).toBe(gifs.length); 

    })
})