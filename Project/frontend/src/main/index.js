import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "antd";
import "./index.css"
export function MainPage(){
    return(
        <div id="header">
            <p id="mainPageText">Book Recommendation Site</p>
            <div id="mainPageButton">
                <div class="mainButton">
                    <Link to="/korean">
                        <Button type="primary" size="large">
                            국내도서 추천
                        </Button>
                    </Link>
                </div>
                <div class="mainButton">
                    <Link to="/foreign">
                        <Button type="primary" size="large">
                            외국도서 추천
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
