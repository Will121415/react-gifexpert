import React from 'react'
import { GridGifItem } from './GridGifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    // console.log(category, images, loading);


    return (
        <>
            <h3>{category}</h3>
            {loading && <strong>Loading...</strong>}
            <div className='card-grid animate__animated animate__fadeIn'>
                {
                    images.map(img => (
                        <GridGifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}