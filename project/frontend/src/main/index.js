import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Button} from "antd";
import "./index.css"
export function MainPage(){
    return(
    <div>
        <div id="mainPageText">
        <p>book & paper recommendation site</p>
        </div>
        <div id="mainPageButton">
            <div class="mainButton">
            <Button type="primary" size="large">회원</Button>
            </div>
            <div class="mainButton">
            <Button type="primary" size="large">비회원</Button>
            </div>
        </div>
    </div>
    );
}
