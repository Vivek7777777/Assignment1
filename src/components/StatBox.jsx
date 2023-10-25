const Statbox = (props)=>{
    return (
        <div className="stats_box">
            <div className="stat_img">
                <img src={props.img} alt="stat img" />
            </div>
            <div className="stats_data">
                <div className="stats_value">{props.value}{props.id == 3 && <span>/15</span>}</div>
                <p className="skill_test_heading">{props.text}</p>
            </div>
        </div>
    )
}


export default Statbox;