import { getGifs } from "../../Helpers/getGifs";

describe('Pruebas en la funcion () => getGifs', () => { 

    test('Debe devolver 10 imagenes', async () => { 
            
            const gifs = await getGifs('One Punch');
            expect(gifs.length).toBe(10);
    })
})