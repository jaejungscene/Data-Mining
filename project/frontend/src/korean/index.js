import React, { useEffect, useState }  from 'react';
import {Button, Transfer} from "antd";
import axios from "axios";
import API_URL from "../conf/api-url";
import "./index.css"


export function KoreanBookPage(){
    const [genres, setGenres] = useState(null);
    useEffect(()=>{
        axios
        .get("http://localhost:8080/korean")
        .then((result)=>{
            console.log(result);
            setGenres(result.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }, [])

    // let selected = 0
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        // selected = index;
        setIsActive(current => !current);
    };

    if (genres === null){
        return( 
            <div id="loading">
                <Button
                type="link"
                loading="true"
                size="large"
                style={{fontSize:"250%"}}>
                    Loading
                </Button>
            </div>
        )
    }

    return(
    <div>
        <div id="mainGenres">
            {genres["reprGenres"].map((genr)=>{
                // if(index == selected){
                    return(
                        <div id="koreanButton">
                            <Button
                            type="primary"
                            shape="round"
                            size="large"
                            ghost="true"
                            style={{
                                backgroundColor: isActive ? '#1890ff' : '',
                                color: isActive ? 'white' : '',
                            }}
                            onClick={handleClick}>
                                {genr}
                            </Button>
                        </div>
                    ); 
                // }
                // else{
                //     return(
                //         <div id="koreanButton">
                //             <Button
                //             id = {index}
                //             type="primary"
                //             shape="round"
                //             size="large"
                //             ghost="true"
                //             onClick={handleClick(index)}>
                //                 {genr}
                //             </Button>
                //         </div>
                //     )
                // }

            })}
        </div>
        <div id="transfer">
            <Transfer 
                dataSource={genres["othersGenres"]}
                showSearch="true"
            />
        </div>
    </div>)

//     const [isActive, setIsActive] = useState(false);


//   const handleClick = () => {
//     // 👇️ toggle
//     setIsActive(current => !current);

//     // 👇️ or set to true
//     // setIsActive(true);
//   };

//   return (
//     <div>
//       <Button
//         style={{
//           backgroundColor: isActive ? '#1890ff' : '',
//           color: isActive ? 'white' : '',
//         }}
//         onClick={handleClick}
//       >
//         Hello world
//       </Button>
//     </div>
//   );
}