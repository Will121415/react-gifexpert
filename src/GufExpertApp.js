import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {

    const [category, setCategory] = useState(['Naruto']);

    return (
        <>
            <h1 className="animate__animated animate__fadeInRightBig">GifExpertApp</h1>
            <AddCategory setCategory={setCategory}/>
            <hr />
            <ol>
                {
                    category.map((category) => 
                        <GifGrid
                            key={category}
                            category={category}
                         />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp;