export default function BigCard({data}) {
    return (
        <div className="big-data-card">
            <div className="big-data-card-dot" style={{backgroundColor: data.dot}} ></div>
            <span className="big-data-card-title">{data.title}</span>
            {data.info.map((info) => (
                <div className="info-container">
                    <span className="big-data-card-name">{info.name}</span>
                    <span className="big-data-card-value">{info.value}</span>
                </div>
            ))}
        </div>
    )
}