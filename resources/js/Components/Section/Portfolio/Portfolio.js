// import Image from "next/image";
import { FaLink } from "react-icons/fa";
import portfolioData from "./Portfolio.data"


const Portfolio1 = () => {
    return (
        <section id="portfolio" className="py-20">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="p-8 md:mx-24">
                        <h2 className="border-bottom text-3xl font-semibold text-center mb-10 uppercase">Portfolio</h2>
                        <div className="portfolio">
                            <div className="row">
                                {portfolioData.map((item,i)=>(
                                    <div key={i} className="col-lg-3 col-md-6">
                                    <div className="portfolio-container mb-7">
                                        <div className="embed-responsive responsive-1by1">
                                            <img className=""
                                                layout='fill'
                                                src={item.imgUrl} />
                                            <div className="text-container">
                                                <h3>{item.title}</h3>
                                                <a href="#" target="_blank">
                                                <FaLink/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio1
