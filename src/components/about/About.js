const About = () => {

    const content = [
        {
            title:'What you can do here',
            sub:[
                {
                    title:'read and explore',
                    description:"you can read about other people's experiences, and take a look at all the awesome pictures shared by our travelers",
                },
                {
                    title:'share your experiences and pictures',
                    description:"if you are interested in sharing your moments with others feel free to contribute to our community, you can share your experiences through articles as well as photos",
                },
                {
                    title:'leave likes and comments',
                    description:'you can always leave your review through a like, dislike, or even a constructive comment'
                },
                {
                    title:'search  things',
                    description:"looking for specific experience? type a keyword in the search bar and hit enter. Or if you're looking for some fun use our cool interactive 3D globe model to explore"
                }

            ]
        },
        {
            title:'FAQ',
            sub:[
                {
                    title:"why I can't find experiences related to specific countries ?",
                    description:"Although we are in charge of technical support, the content of this website is based 100% on the experiences and posts of our users, so it will take some time to have posts related to all countries. Please be patient with us, and help us grow our community               "
                },
                {
                    title:"why the website isn't working properly on my mobile ?",
                    description:'our website uses WebGL technology, which may cause poor performance on some devices that do not support this technology'
                },
                {
                    title:"May I use the content of your site ?",
                    description:"as long as you put a reference to our website, you can copy any content you want"
                }
            ]
        }

    ]

    return (
        <>
            <div className="flex w-full justify-center  text-indigo-white px-8 mt-14 leading-7 font-medium text-lg">
               <div className="w-9/12">
                    <p className="">
                            Welcome to Planetes <strong>(PLA-NE-TES)</strong>! This website is for those who love to travel and want to share their experiences and precious moments with the community, or those looking to explore other countries through the eyes of travel enthusiasts
                    </p>
                    <div className="">
                        {
                            content.map((section,index)=>{
                                return(
                                <section key={index} className="my-16">
                                    <h1 className="text-4xl font-black uppercase mb-5 tracking-wide">
                                        {section.title}
                                    </h1>
                                    {
                                        section.sub.map((sub,index)=>{
                                            return(
                                                <div className="mb-5">
                                                    <h4 className="text-xl font-black capitalize mb-3 tracking-wide">
                                                        {sub.title}
                                                    </h4>
                                                    <p className="">
                                                        {sub.description}
                                                    </p>
                                                </div>)
                                        })
                                    }
                                </section>)
                            })
                        }
                    </div>
               </div>
            </div>
        </>
    );
}
 
export default About;