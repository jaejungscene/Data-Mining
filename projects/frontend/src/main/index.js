import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Button} from "antd";
import "./index.css"
export function MainPage(){
    return(
        <div id="header">
            <p id="mainPageText">book recommendation site</p>
            <div id="mainPageButton">
                <div class="mainButton">
                    <Button type="primary" size="large"
                        onClick={()=>{
                            window.location.href = "/korean"
                    }}>
                        국내도서 추천
                    </Button>
                </div>
                <div class="mainButton">
                    <Button type="primary" size="large"
                        onClick={()=>{
                            window.location.href = "/foreign"
                    }}>
                        외국도서 추천
                    </Button>
                </div>
            </div>
        </div>
    );
}
