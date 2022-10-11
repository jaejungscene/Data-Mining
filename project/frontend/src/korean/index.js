import React, { useEffect, useState }  from 'react';
import axios from "axios";

export function KoreanBookPage(){

    const [genres, setGenres] = useState(null);
    useEffect(()=>{
        axios
        .get(`${API_URL}/korean`)
        .then((result)=>{
            console.log(result);
            setGenres(result.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }, [])

    if (genres === null){
        return <h1>장르 정보를 받고 있습니다...</h1>
    }
    
    return(
        <div>
            
        </div>
    );
}