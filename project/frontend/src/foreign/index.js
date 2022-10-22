import React, { useEffect, useState }  from 'react';
import {Button, Divider, Input} from "antd";
import axios from "axios";
import API_URL from "../conf/api-url";
import "./index.css"
import SearchTable from "./searchTable"
import SentFrom from './sentForm';

export function ForeignBookPage(){
    const [genres, setGenres] = useState(null);
    const [btnActive, setBtnActive] = useState(null);
    const [readBook, setReadBook] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/korean`)
        .then((result)=>{
            setGenres(result.data);
            const temp = result.data["reprGenres"];
            var activeArray = []
            for(let i=0; i<temp.length; i++){
                activeArray.push(false)
            }
            setBtnActive(activeArray);
        })
        .catch((error)=>{
            console.error(error);
        });
    }, [])

    function genreToggle(idx){
        let newArr = Array.from(btnActive);
        if(btnActive[idx] === true){
            console.log("hello",idx);
            newArr[idx] = false;
            setBtnActive(newArr);
        }
        else{
            console.log("world",idx);
            newArr[idx] = true;
            setBtnActive(newArr);
        }
    };

    const onSearch = (inputData)=>{
        console.log("sent:",inputData);
        axios
        .get(`${API_URL}/korean/search=${inputData}`)
        .then((result)=>{
            setSearchResult(result.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Author',
            dataIndex: 'author',
        },
        {
            title: 'Publisher',
            dataIndex: 'publisher',
        },
    ];

    console.log(searchResult);

    if (genres === null){
        return( 
            <div id="loading">
                <Button
                    type="link"
                    loading="true"
                    size="large"
                    style={{fontSize:"250%"}}
                >
                    Loading
                </Button>
            </div>
        )
    }

    if(searchResult == null){
        return(
            <div>
                <div className="searchArea">
                    <h3>인상깊게 읽었던 책이 있다면 검색창에 검색 후 추가해 보세요.</h3>
                    <Input.Search
                        size="large"
                        placeholder='책 제목을 입력해보세요!'
                        allowClear
                        enterButton
                        onSearch={onSearch}
                    />
                    <div>
                        <h3>검색결과가 없습니다.</h3>
                    </div>
                </div>
    
                <Divider/>
                <SentFrom
                    columns={columns}
                    genres={genres}
                    readBook={readBook}
                    btnActive={btnActive}
                    genreToggle={genreToggle}
                />
            </div>
        )
    }

    if(searchResult.length != 0){
        return(
            <div>
                <div className="searchArea">
                    <h3>인상깊게 읽었던 책이 있다면 검색창에 검색 후 추가해 보세요.</h3>
                    <Input.Search
                        size="large"
                        placeholder='책 제목을 입력해보세요!'
                        allowClear
                        enterButton
                        onSearch={onSearch}
                    />
                    <div>
                        <SearchTable 
                            columns={columns} 
                            data={searchResult} 
                            readBook={readBook}
                            setReadBook={setReadBook}/>
                    </div>
                </div>

                <Divider/>
                <SentFrom
                    columns={columns}
                    genres={genres}
                    readBook={readBook}
                    btnActive={btnActive}
                    genreToggle={genreToggle}
                />
            </div>
        )
    }

    else{
        console.log("check01");
        return(
            <div>
                <div className="searchArea">
                    <h3>인상깊게 읽었던 책이 있다면 검색창에 검색 후 추가해 보세요.</h3>
                    <Input.Search
                        className="searchFrom"
                        size="large"
                        placeholder='책 제목을 입력해보세요!'
                        allowClear
                        enterButton
                        onSearch={onSearch}
                    />
                </div>

                <Divider/>
                <SentFrom
                    columns={columns}
                    genres={genres}
                    readBook={readBook}
                    btnActive={btnActive}
                    genreToggle={genreToggle}
                />
            </div>
        )
    }
}