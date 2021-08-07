import resumeData from "./Resume.data"

const Resume1 = () => {
    const imgUrl = '/img/background/bg-pusc.jpg'
    const sectionStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundPositionX: 'center',
        backgroundPositionY: 'top',
    };

    return (
        <section 
        id="resume"
        style={sectionStyle}
        className="py-20 bg-primaryLight-100 relative">
            <div
                className="absolute top-0 w-full h-full"
                style={{backgroundColor: 'rgba(239, 239, 239, 0.9)'}}
            />
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="p-8 md:mx-24">
                        <h2 className="border-bottom text-3xl font-semibold text-center mb-10 uppercase">
                            Resume
                        </h2>
                        <div className="row">
                            {resumeData.map((item, i) => (
                                <div key={i} className="col-lg-6">
                                    <h3 className="resume-title">{item.type}</h3>
                                    {item.detail.map((itemDetail, j) => (
                                        <div key={j} className="resume-item">
                                            <h4>{itemDetail.title}</h4>
                                            <p><em>{itemDetail.sub_title}</em></p>
                                            <h5>{itemDetail.duration}</h5>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume1
