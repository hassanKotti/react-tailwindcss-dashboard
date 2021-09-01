import React from 'react'
import ColorCard from '../components/ui/ColorCard'


const colorsList = [
    { name: "red" },
    { name: "green" },
    { name: "blue" },
    { name: "indigo" },
    { name: "yellow" },
    { name: "gray" },
    { name: "pink" },
    { name: "purple" },

];
const Colors = () => {
    return (
        <div className="flex-col items-center justify-center  ">

            {colorsList.map((color) => {
                return (
                    <>
                        <h2 class="mb-4 text-lg font-semibold capitalize">{color.name}</h2>
                        <div className="grid gap-6 md:grid-cols-10 xl:gap-6">
                            <ColorCard color={color.name} />
                        </div>
                    </>
                );
            })}

        </div>
    )
}

export default Colors
