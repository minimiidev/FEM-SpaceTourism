import { useState } from "react";

interface Technology {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

interface Props {
    technologies: Technology[]
}

const Technology = ({ technologies }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:items-start gap-2 lg:gap-20">
            <img src={technologies[currentIndex].images.portrait} alt={technologies[currentIndex].name} className="mx-auto my-2 size-32 md:size-96 lg:size-1/2" />

            <article className="flex flex-col justify-center items-center lg:items-start gap-4 lg:text-left text-center">
                <div>
                    {technologies.map((technology) => (
                        <button key={technology.name} onClick={() => setCurrentIndex(technologies.indexOf(technology))}
                            className={`mx-2 border-b-2 border-transparent h-10 md:h-20 text-gray-500 hover:text-white uppercase transition-all duration-300 ease-in-out cursor-pointer h5
                            ${currentIndex === technologies.indexOf(technology) ? "border-white !text-white" : ""}`}>
                            {technology.name}
                        </button>
                    ))}
                </div>
                <h3 className="md:!text-[80px] uppercase h3">{technologies[currentIndex].name}</h3>
                <p className="md:w-[75%] lg:w-[ text-blue-light">{technologies[currentIndex].description}</p>
            </article>


        </div >
    )
}

export default Technology
