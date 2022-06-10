import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../Hooks/useFetchGifs'

describe('Pruebas el el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        // const {data, loading} = useFetchGifs('One Punch');
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate({timeout: 20000});

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('Debe retornar un arreglo de img y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
})