import { IoMdArrowForward } from "react-icons/io";
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Hero2 = ({ imgUrl }) => {
    const sectionStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
    };

    return (
        <section
            id="home"
            // style={sectionStyle}
            className="h-screen flex items-center py-0"
        >
            <div
                className="w-full h-screen
                row no-gutters absolute"
            >
                <div style={sectionStyle}
                    className="col-md-7 col-9 offset-md-5 offset-3 bg-cover bg-center rounded-bl-big relative"
                >
                    <div
                        className="rounded-bl-big md:hidden block absolute top-0 w-full h-full"
                        style={{backgroundColor: 'rgba(239, 239, 239, 0.9)'}}
                    />
                </div>
            </div>
            <div className="section-wrapper w-full">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 mt-20">
                            <h1 className="text-5xl font-bold mb-3">Raka D Prakoso</h1>
                            <p className="text-lg mb-4">Want to know more about me ?</p>
                            <ScrollLink
                            to='profile' spy={true}
                            smooth={true} offset={0} duration={700}
                            delay={100}
                            className="bg-primary-100 px-3 py-2 text-lg font-semibold rounded-lg text-gray-50 shadow-lg inline">
                                Get to Know
                            <IoMdArrowForward className="ml-5 inline"/>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero2
