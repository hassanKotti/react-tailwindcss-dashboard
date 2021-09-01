import React from 'react'

const degreesList = [
     "50" ,
     "100" ,
     "200" ,
     "300" ,
     "400" ,
     "500" ,
     "600" ,
     "700" ,
     "800" ,
     "900" ,

];

const ColorCard = ({ color }) => {
    return (
        <>
            {degreesList.map((degree) => {
                return (
                    <div className="">
                        <button type="button" className="w-24 h-24">
                            <div className={`w-full h-full bg-${color}-${degree} rounded-lg shadow flex items-center justify-center `} >
                                <span class="inline-block mb-1 dark:text-shark-400">{degree}</span>
                            </div>
                        </button >
                    </div>
                );
            })}

        </>
    )
}

export default ColorCard
