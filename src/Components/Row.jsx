export default function Row({data}) {
    console.log(data.Page)
  return (
    <div className="Row">
      <span className="propName">{data.Page}</span>
      <div className="propName multiple">
        <span className="value">{data.Pageviews.Value}</span>
        <span className="percentage">({data.Pageviews.percent})</span>
      </div>
      <div className="propName multiple">
        <span className="value">{data.Unique_pageviews.Value}</span>
        <span className="percentage">({data.Unique_pageviews.percent})</span>
      </div>
      <div className="propName multiple">
        <span className="value">{data.Avg_time}</span>
      </div>
      <div className="propName multiple">
        <span className="value">{data.Entrances.Value}</span>
        <span className="percentage">({data.Entrances.percent})</span>
      </div>
      <span className="propName">{data.Exit}</span>
      <div className="propName multiple">
        <span className="value">{data.Page_value.Value}</span>
        <span className="percentage">({data.Page_value.percent})</span>
      </div>
    </div>
  );
}
