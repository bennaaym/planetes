import { useHistory } from "react-router";
import Article from "./Article"

const Experiences = () => {

    const experiences = [
        {
            country:' ALCATRAZ',
            title:'Digital industry helping resocialize criminals',
            description :'Even in the year 2047, there are still prisons on Earth. Detention conditions, however, have much improved, and initiatives aimed at teaching convicts to earn an honest living have entered a new stage of evolution. Robotization has rendered manual labor uneconomic, so detainees stopped felling trees and sewing pillowcases – and changed to computers.',
            tags:['ai','government','society'],
            author:'john smith',
            date:'07 Jun 2021',
            like:5,
            dislike:2
        },

        {
            country:' ALCATRAZ',
            title:'Digital industry helping resocialize criminals',
            description :'Even in the year 2047, there are still prisons on Earth. Detention conditions, however, have much improved, and initiatives aimed at teaching convicts to earn an honest living have entered a new stage of evolution. Robotization has rendered manual labor uneconomic, so detainees stopped felling trees and sewing pillowcases – and changed to computers.',
            tags:['ai','government','society'],
            author:'john smith',
            date:'07 Jun 2021',
            like:5,
            dislike:2
        },

        {
            country:' ALCATRAZ',
            title:'Digital industry helping resocialize criminals',
            description :'Even in the year 2047, there are still prisons on Earth. Detention conditions, however, have much improved, and initiatives aimed at teaching convicts to earn an honest living have entered a new stage of evolution. Robotization has rendered manual labor uneconomic, so detainees stopped felling trees and sewing pillowcases – and changed to computers.',
            tags:['ai','government','society'],
            author:'john smith',
            date:'07 Jun 2021',
            like:5,
            dislike:2
        },

        {
            country:' ALCATRAZ',
            title:'Digital industry helping resocialize criminals',
            description :'Even in the year 2047, there are still prisons on Earth. Detention conditions, however, have much improved, and initiatives aimed at teaching convicts to earn an honest living have entered a new stage of evolution. Robotization has rendered manual labor uneconomic, so detainees stopped felling trees and sewing pillowcases – and changed to computers.',
            tags:['ai','government','society'],
            author:'john smith',
            date:'07 Jun 2021',
            like:5,
            dislike:2
        },
    ]

    const history = useHistory();

    const handleShareButton = () =>{
        history.push('/add-experience');
    }

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-32 h-full w-full">
            <div className='col-span-8'>
                {
                    experiences.map((experience,index)=>{
                        return (
                            <Article 
                                key={index}
                                article={experience}
                            />
                        )
                    })
                }
            </div>

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <h2 className="w-full text-xl mb-4 font-bold tracking-wider mt-7">
                    share your experience
                </h2>
                <button 
                        onClick={handleShareButton}
                        className="bg-indigo-dark hover:bg-indigo-medium text-indigo-white font-bold uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                        >                        
                        add article
                </button>
            </div>
        
        </div>
    );
}
 
export default Experiences;