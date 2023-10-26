import Lineargraph from "./Graph";


const Graphbox = ({ percent }) => {

    return (
        <div className="box graph_main">
            <div className="graph_top">
                <div className="graph_text">
                    <h4 className="update_heading">Comparison Graph</h4>
                    <p className="graph_description">
                        <span>You scored {percent}% percentile </span>which is lower than the <br /> average percentile 72% of all the engineers who took this assessment
                    </p>
                </div>
                <div className="stat_img">
                    <img src="/graph.png" alt="stat img" />
                </div>
            </div>
            <Lineargraph
                percent={percent}
            />
        </div>
    )
}



export default Graphbox;