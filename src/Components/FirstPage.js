import wave from '../wave.svg'
import lottie from 'lottie-web';
import { useRef, useEffect } from 'react';
const FirstPage = () => {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../lottie.json')
        })
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex flex-row h-96 bg-green-800 ">
                <div className="flex-inline z-50 flex-col  space-y-9 ml-32 h-full w-96 ">
                    <h1 className="text-2xl text-white">Your web presence just got so much better</h1>
                    <p className="text-sm  font-thin leading-none text-white">Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</p>

                    <div className="flex  justify-start">
                        <button className="rounded-sm mr-5 p-2  text-white font-semibold bg-green-700 hover:bg-green-600 ">WORK WITH US</button>
                        <button className=" cursor-pointer rounded-sm  p-2 text-white border border-green-300 font-semibold  hover:bg-green-700 ">VIEW OUR PROJECTS</button>

                    </div>
                </div>
                <div className="flex  flex-grow ">
                    <div className="lottie z-40 h-96  w-full" ref={container}>

                    </div>

                </div>


            </div>
            <div className="flex  relative bottom-56">
                <img className="" src={wave} alt="wave" />
            </div>

        </div>
    )
}

export default FirstPage
