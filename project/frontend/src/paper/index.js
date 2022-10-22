// import { Button, Table } from 'antd';
import React, { useState, useEffect } from 'react';
// import MyTable from "./table"
// import axios from "axios";
// import API_URL from "../conf/api-url";


export function PaperPage(){
  return(
    <h3>논문 추천 시스템</h3>
  )
  // const [searchResult, setSearchResult] = useState([]);

  // useEffect(()=>{
  //   axios
  //   .get(`${API_URL}/korean/search=총`)
  //   .then((result)=>{
  //     setSearchResult(result.data);
  //   })
  //   .catch((error)=>{
  //     console.error(error);
  //   });
  // }, [])


  // const columns = [
  //   {
  //       title: 'Title',
  //       dataIndex: 'title',
  //   },
  //   {
  //       title: 'Author',
  //       dataIndex: 'author',
  //   },
  //   {
  //       title: 'Publisher',
  //       dataIndex: 'publisher',
  //   },
  // ];

  // const data = [];
  // for (let i = 0; i < 46; i++) {
  //       data.push({
  //         key: i,
  //         name: `Edward King ${i}`,
  //         age: 32,
  //         address: `London, Park Lane no. ${i}`,
  //       });
  // }

  // return(
  //       <div>
  //           <MyTable columns={columns} data={searchResult}/>
  //       </div>
  // );
}