import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []}) => {

    // const [category, setCategory] = useState(['Naruto']); 
    const [category, setCategory] = useState(defaultCategories);

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