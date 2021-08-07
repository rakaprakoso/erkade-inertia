const Bar = ({ skillData }) => {

    const ConditionWrapper = ({ name, percentage }) => {
        return (
            <div className="skill-container">
                <div className="text">
                    <h3>{name}</h3>
                    <h4>{percentage}</h4>
                </div>
                <div className="chart-container">
                    <div className="bar" style={{ width: percentage }} />
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            {skillData.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <ConditionWrapper name={item.name} percentage={item.percentage}/>
                </div>
            ))}
        </div>
    )
}

export default Bar
