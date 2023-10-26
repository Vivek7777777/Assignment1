import { useState } from "react";
import Statbox from "./StatBox";
import Graph from "./Graph";

const Main = ({rank, percent, correctAnswer}) => {


    return (
        <main>
            <div className="skill_test_heading">Skill Test</div>

            <div className="box update_box">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R-uRdD8kpY71pM7TyCd9yUEpEbN03VFa34Zcfiw&s" alt="html img" />
                    <div className="update_text">
                        <h4 className="update_heading">Hypertext Markup Language</h4>
                        <p className="skill_test_heading">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                    </div>
                </div>
                <button className="save_btn">Update</button>
            </div>

            <div className="box stats">
                <h4 className="update_heading">Quick Statistics</h4>
                <div className="stats_boxes">
                    <Statbox
                        id = "1"
                        img = "/trophy.png"
                        value = {rank}
                        text = "YOUR RANK"
                        />
                    <Statbox
                        id = "2"
                        img = "/note.png"
                        value = {percent}
                        text = "PERCENTILE"
                        />
                    <Statbox
                        id = "3"
                        img = "/check.png"
                        value = {correctAnswer}
                        text = "CORRECT ANSWERS"
                    />  
                </div>
            </div>

            <Graph 
                percent = {percent}
            />

        </main>
    )
}

export default Main;