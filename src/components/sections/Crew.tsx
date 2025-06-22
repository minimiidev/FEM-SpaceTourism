import { useState } from "react";
import Bullet from "@/components/icons/Bullet.jsx";

interface Crew {
    name: string;
    images: {
        png: string;
        webp: string;
    }
    role: string;
    bio: string
}
interface Props {
    crew: Crew[]
}
const Crew = ({ crew }: Props) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="relative flex lg:flex-row flex-col justify-center lg:justify-between items-center lg:gap-12 w-full">

            <article className="flex flex-col justify-center lg:justify-between items-center lg:items-start lg:w-full lg:text-left text-center">
                <h4 className="text-gray-500 uppercase h4">{crew[currentIndex].role}</h4>
                <h3 className="uppercase h3">{crew[currentIndex].name}</h3>
                <p className="px-4 md:px-0 md:w-[70%] lg:w-2/3 text-blue-light p1">{crew[currentIndex].bio}</p>
            </article>

            <div className="bottom-0 static lg:absolute flex justify-center items-center gap-4 my-2 md:mb-[50px] lg:mb-0">
                {crew.map((destination) => (
                    <button key={destination.name}
                        onClick={() => setCurrentIndex(crew.indexOf(destination))}

                    >
                        <Bullet className={`${currentIndex === crew.indexOf(destination) ? "text-white" : "text-gray-500"} size-6 md:size-12 cursor-pointer`} />
                    </button>
                ))}
            </div>
            {/*  */}
            <div className="mask-b-from-60% mask-b-from-black mask-b-to-100% mask-b-to-transparent w-[180px] md:w-[62%] lg:w-1/2 md:h-[600px] lg:h-[500px]">
                <img src={crew[currentIndex].images.png} alt={crew[currentIndex].name} className="w-full h-full object-fill" />
            </div>

        </div >
    )
}

export default Crew
