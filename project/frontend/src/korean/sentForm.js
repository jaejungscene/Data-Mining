import React, { useEffect, useState }  from 'react';
import {Button, Form, Table, Divider} from "antd";
import axios from "axios";
import API_URL from "../conf/api-url";
import "./index.css"

export default function SentFrom(props){
    const columns = props.columns;
    const genres = props.genres;
    const readBook = props.readBook
    const genreToggle = props.genreToggle;
    const btnActive= props.btnActive;

    const Submit = ()=>{
        var selectedGenres = [];
        for(let i=0; i<btnActive.length; i++){
            if(btnActive[i] == true){
                selectedGenres.push(genres["reprGenres"][i]);
            }
        }
        console.log({
            books: readBook,
            genres: selectedGenres,
        })
        if(selectedGenres.length == 0){
            alert("장르를 하나라도 선택해 주세요!");
        }
        else{
            axios.post(`${API_URL}/korean`,{
                books: readBook,
                genres: selectedGenres,
            })
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
                console.error(error);
            })
        }
    };

    return(
        <div>
            <div>
                <div className='booklist'>
                    <h3>읽은 책 리스트</h3>
                    <Table 
                        columns={columns}
                        dataSource={readBook}
                        pagination={{pageSize:5}}
                        size="small"
                    />
                </div>
            </div>
            <div>
                <h3 className='genre-str'>장르를 선택해 보세요!</h3>
                <div id="mainGenres">
                    {genres["reprGenres"].map((genre, idx)=>{
                        return(
                            <Button
                                type="primary"
                                shape="round"
                                size="large"
                                ghost="true"
                                className="btn"
                                style={{
                                    backgroundColor: btnActive[idx] ? '#1890ff' : '',
                                    color: btnActive[idx] ? 'white' : '',
                                }}
                                onClick={()=>genreToggle(idx)}
                            >
                                {genre}
                            </Button>
                        );
                    })}
                </div>
            </div>
            <Divider/>
            <Form onFinish={Submit}>
                <Form.Item>
                    <Button
                        className="submit-button"
                        type="primary"
                        size="large"
                        htmlType="submit"
                    >
                        책 추천!
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}