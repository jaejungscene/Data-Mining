import React, { useEffect, useState }  from 'react';
import {Button} from "antd";
import axios from "axios";
import API_URL from "../conf/api-url";
import "./index.css"

export function ForeignBookPage(){
    console.log("hello world")

    const [genres, setGenres] = useState(null);
    useEffect(()=>{
        axios
        .get(`${API_URL}foreign`)
        .then((result)=>{
            console.log(result);
            setGenres(result.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }, [])

    if (genres === null){
        return( 
            <div id="loading">
                <Button
                type="link"
                loading="true"
                size="large">
                    Loading
                </Button>
            </div>
        )
    }
    
    return(
    <div>
        {genres.map((genr)=>{
            return(
                <div>
                    <Button
                    type="primary"
                    shape="round"
                    size="large">
                        {genr}
                    </Button>
                </div>
            );
        })}
    </div>)
}
