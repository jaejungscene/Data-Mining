import React, { useEffect, useState }  from 'react';
import {Button, Transfer, Form, Divider, Input, Table, List} from "antd";
import axios from "axios";
import API_URL from "../conf/api-url";
import "./index.css"

export function KoreanBookPage(){
    const [genres, setGenres] = useState(null);
    const [btnActive, setBtnActive] = useState(null);
    const [readBook, setReadBook] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(()=>{
        setReadBook(["총,균,쇠", "이기적 유전자"]);
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


    function toggleActive(idx){
        if(btnActive[idx] === true){
            console.log("hello",idx);
            let newArr = Array.from(btnActive);
            newArr[idx] = false;
            setBtnActive(newArr);
        }
        else{
            console.log("world",idx);
            let newArr = Array.from(btnActive);
            newArr[idx] = true;
            setBtnActive(newArr);
        }
    };


    const Submit = (values)=>{
        axios.post(`${API_URL}/korean`,{
            selected_genres: values
        })
    };

    const onSearch = (inputData)=>{
        console.log(inputData);
        setSearchResult(inputData);
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
    


    // const data = [
    // {
    //     key: '1',
    //     name: 'John Brown',
    //     age: 32,
    //     address: 'New York No. 1 Lake Park',
    // },
    // {
    //     key: '2',
    //     name: 'Jim Green',
    //     age: 42,
    //     address: 'London No. 1 Lake Park',
    // },
    // {
    //     key: '3',
    //     name: 'Joe Black',
    //     age: 32,
    //     address: 'Sidney No. 1 Lake Park',
    // },
    // ];

    if(searchResult.length != 0){
        // console.log("check");
        // console.log(searchResult);
    return(
        <div>
            <Form name="user profile" onFinish={Submit}>
                <Form.Item>
                    <div>
                        <div className="searchArea">
                            <h3>인상깊게 읽었던 책이 있다면 검색창에 검색 후 추가해 보세요.</h3>
                            <Input.Search
                                className="searchFrom"
                                size="large"
                                placeholder='책 제목을 입력해보세요!'
                                allowClear
                                enterButton
                                // style={{
                                //     width:80%,
                                // }}
                                onSearch={onSearch}
                            />
                            <List
                                className="searchForm"
                                size="small"
                                bordered
                                dataSource={searchResult}
                                // style={{
                                //     width:500,
                                // }}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </div>
                        <div className='booklist'>
                            <h3>읽은 책 리스트</h3>
                            <Table columns={columns} dataSource={readBook} pagination={{pageSize:50}} size="small" />
                        </div>
                    </div>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <div id="mainGenres">
                        {genres["reprGenres"].map((genre, idx)=>{
                            return(
                                <Button
                                    type="primary"
                                    shape="round"
                                    size="large"
                                    ghost="true"
                                    className={"btn"}
                                    style={{
                                        backgroundColor: btnActive[idx] ? '#1890ff' : '',
                                        color: btnActive[idx] ? 'white' : '',
                                    }}
                                    onClick={()=>toggleActive(idx)}
                                >
                                    {genre}
                                </Button>
                            );
                        })}
                    </div>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <div id="transfer">
                        <Transfer 
                            dataSource={genres["othersGenres"]}
                            showSearch="true"
                        />
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
    }


    else{
        console.log("check01");
    return(
        <div>
            <Form name="user profile" onFinish={Submit}>
                <Form.Item>
                    <div>
                        <div className="searchArea">
                            <h3>인상깊게 읽었던 책이 있다면 밑 검색창에 검색 후 추가해 보세요.</h3>
                            <Input.Search
                                className="searchFrom"
                                size="large"
                                placeholder='책 제목을 입력해보세요!'
                                allowClear
                                enterButton
                                // style={{
                                //     width:80%,
                                // }}
                                onSearch={onSearch}
                            />
                        </div>
                        <div className='booklist'>
                            <h3>읽은 책 리스트</h3>
                            <Table columns={columns} dataSource={readBook} pagination={{pageSize:50}} size="small" />
                        </div>
                        {/* {readBook.map((book)=>{
                            return(
                                //<p>
                                <Text>
                                    {book}{"\n"}
                                </Text>
                                //</p>
                            )
                        })} */}
                    </div>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <div id="mainGenres">
                        {genres["reprGenres"].map((genre, idx)=>{
                            return(
                                <Button
                                    type="primary"
                                    shape="round"
                                    size="large"
                                    ghost="true"
                                    className={"btn"}
                                    style={{
                                        backgroundColor: btnActive[idx] ? '#1890ff' : '',
                                        color: btnActive[idx] ? 'white' : '',
                                    }}
                                    onClick={()=>toggleActive(idx)}
                                >
                                    {genre}
                                </Button>
                            );
                        })}
                    </div>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <div id="transfer">
                        <Transfer 
                            dataSource={genres["othersGenres"]}
                            showSearch="true"
                        />
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
    }
}