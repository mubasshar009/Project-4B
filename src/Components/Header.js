import logo from '../CAMO.png';
import "animate.css";
const Header = () => {
    return (
        <div className="flex items-center justify-around align-middle h-40 w-screen">
            <div className="flex cursor-pointer">
                <img className=" h-48 mt-4  w-48" src={logo} alt="brandLogo" />
            </div>
            {/* Middle */}
            <div className="flex text-white text-md font-semibold space-x-7  ">
                <div className="cursor-pointer hover-eff">
                    <h1 className="animate__animated animate__fadeInLeft animate__slower">SERVICES</h1>
                </div>
                <div className="cursor-pointer hover-eff">
                    <h1 className="animate__animated animate__fadeInLeft animate__slower ">ABOUT US</h1>
                </div>
                <div className="cursor-pointer hover-eff">
                    <h1 className="animate__animated animate__fadeInLeft animate__slower">PROJECTS</h1>
                </div>
                <div className="cursor-pointer hover-eff">
                    <h1 className="animate__animated animate__fadeInLeft animate__slower">BLOG</h1>
                </div>

            </div>
            {/* Right */}
            <div className="flex hover-eff  justify-around items-center text-white text-md font-semibold space-x-7">
                <div className="flex justify-around cursor-pointer animate__animated animate__fadeInRight animate__slower">
                    <h1>ENG </h1>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
                <div className="flex items-center space-x-4   border border-blue-100 p-3 cursor-pointer hover:bg-green-700 animate__animated animate__fadeInRight animate__slower">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <h1 >GET IN TOUCH</h1>
                </div>
            </div>

        </div >
    )
}

export default Header
