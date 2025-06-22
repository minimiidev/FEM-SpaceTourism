import { useState } from "react";

interface Destinations {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

interface Props {
    destinations: Destinations[]
}

const Destinations = ({ destinations }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:items-start gap-2 lg:gap-20">
            <img src={destinations[currentIndex].images.png} alt={destinations[currentIndex].name} className="mx-auto my-2 size-32 md:size-96 lg:size-1/2" />

            <article className="flex flex-col justify-center items-center lg:items-start gap-4 lg:text-left text-center">
                <div>
                    {destinations.map((destination) => (
                        <button key={destination.name} onClick={() => setCurrentIndex(destinations.indexOf(destination))}
                            className={`mx-2 border-b-2 border-transparent h-10 md:h-20 text-gray-500 hover:text-white uppercase transition-all duration-300 ease-in-out cursor-pointer h5
                            ${currentIndex === destinations.indexOf(destination) ? "border-white !text-white" : ""}`}>
                            {destination.name}
                        </button>
                    ))}
                </div>
                <h3 className="md:!text-[80px] uppercase h3">{destinations[currentIndex].name}</h3>
                <p className="md:w-[75%] lg:w-[ text-blue-light">{destinations[currentIndex].description}</p>

                <hr className="block bg-blue-light/70 md:my-3 w-full md:w-[75%] h-[1px]" />

                <div className="flex justify-between md:justify-evenly lg:justify-start items-center lg:items-start gap-2 md:gap-8 lg:gap-12 w-full uppercase">
                    <article className="">
                        <p className="">Avg. distance</p>
                        <h4 className="text-blue-light h4">{destinations[currentIndex].distance}</h4>
                    </article>
                    <article>
                        <p className="">Est. travel time</p>
                        <h4 className="text-blue-light h4">{destinations[currentIndex].travel}</h4>
                    </article>
                </div>
            </article>


        </div >
    )
}

export default Destinations
