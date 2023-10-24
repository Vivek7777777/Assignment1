
const Popup = () => {
    return (
        <div className="popup_main">
            <div className="popup_box">

                <div className="scores">
                    <h1>Update Scores</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R-uRdD8kpY71pM7TyCd9yUEpEbN03VFa34Zcfiw&s" alt="html img" />
                </div>

                <div className="inputes">
                    <div className="input_box">
                        <div className="input_query">
                            <div className="input_number">1</div>
                            <div className="input_text">Update your <span>rank</span></div>
                        </div>
                        <input type="number" />

                    </div>
                    <div className="input_box">
                        <div className="input_query">
                            <div className="input_number">2</div>
                            <div className="input_text">Update your <span>percentile</span></div>
                        </div>
                        <input type="number" />
                    </div>
                    <div className="input_box">
                        <div className="input_query">
                            <div className="input_number">3</div>
                            <div className="input_text">Update your <span>current score (out of 15)</span></div>
                        </div>
                        <input type="number" />
                    </div>
                    <hr />
                    <div className="input_buttons">
                        <button className="cancel_btn">Cancel</button>
                        <button className="save_btn">
                            Save
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;