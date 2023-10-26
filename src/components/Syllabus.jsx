import styled, { keyframes } from "styled-components";


const Syllabus = (props) => {

    return(
        <div className="syllabus_box">
            <div className="syllabus_heading">
                {props.heading}
            </div>
            <div className="syllabus_score">
                <div className="syllabus_bar" style={{backgroundColor: `${props.color}30`}}>
                    <div className={`syllabus_bar_fill fill${props.id}`} style={{backgroundColor: `${props.color}`, width: `${props.width}`}}>
                    </div>
                </div>
                <div className="syllabus_score_value" style={{color: props.color}}>
                    {props.width}
                </div>
            </div>
        </div>
    )
};



export default Syllabus;