import Syllabus from "./Syllabus";


const Rightsidebar = ({correctAnswer}) => {
    return(
        <div className="right_sidebar">
            <div className="box syllabus">
                <h4 className="update_heading">Syllabus wise Analysis</h4>
                <Syllabus
                    id = "1"
                    heading= "HTML Tools, Forms, History"
                    color= "#438af6"
                    width = "80%"
                />                
                <Syllabus
                    id = "2"
                    heading= "Tags & References in HTML"
                    color= "#ff9142"
                    width = "60%"
                />                
                <Syllabus
                    id = "3"
                    heading= "Tables & CSS Basics"
                    color= "#fb5e5e"
                    width = "24%"
                />                
                <Syllabus
                    id = "4"
                    heading= "CSS Frameworks"
                    color= "#2ec971"
                    width = "96%"
                />                
            </div>
            
            <div className="box question_analysis">
                <div className="question_heading syllabus_score">
                    <h4 className="update_heading">Question Analysis</h4>
                    <div className="syllabus_score_value">{correctAnswer}/15</div>
                </div>
                <p className="graph_description">
                    <span>You scored {correctAnswer} question correct out of 15. </span>
                    However it still needs some improvements
                </p>

                <div className="box">

                </div>

            </div>
        </div>
    )
}


export default Rightsidebar;