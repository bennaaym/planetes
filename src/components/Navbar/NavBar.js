import { Link } from "react-router-dom";
const NavBar = () => {

    const links = [
        {label : 'destinations' , path : '/destinations'},
        {label : 'experiences' , path : '/experiences'},
        {label : 'feedback' , path:'/feedback'},
        {label : 'about' , path:'about'},
    ]

    return (
        <nav 
            className="absolute z-40 w-full flex justify-between items-center px-8 py-6 text-indigo-white font-black uppercase">
            
            <h1 className="text-3xl tracking-wider">
                <Link to={'/'}>
                    planetes
                </Link>
            </h1>

            <ul className="flex items-center text-sm tracking-wider">
                {
                    links.map((link,index)=>{
                        return(
                            <li 
                                className="mr-4"  
                                key={index}>
                                
                                <Link to={link.path}>{link.label}</Link>
                            
                            </li>
                            
                        )
                    })
                }

                <button className="bg-indigo-light text-indigo-white text-sm font-black tracking-wider uppercase px-6 py-3 ml-4 rounded-full focus:outline-none">
                    <Link to={'/signin'}>
                        sign in
                    </Link>
                </button>

            </ul>
        </nav>
    );
}
 
export default NavBar;