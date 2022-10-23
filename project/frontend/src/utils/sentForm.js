import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Form, Divider, message} from "antd";
import "./utils.css"
import BookListTable from './bookList';

export default function SentFrom(props){
    const columns = props.columns;
    const genres = props.genres;
    const readBook = props.readBook;
    const setReadBook = props.setReadBook;
    const genreToggle = props.genreToggle;
    const btnActive= props.btnActive;
    const sentData = useHistory();

    const Submit = ()=>{
        var selectedGenres = [];
        for(let i=0; i<btnActive.length; i++){
            if(btnActive[i] == true){
                selectedGenres.push(genres["reprGenres"][i]);
            }
        }
        if(selectedGenres.length == 0){
            message.error("장르를 하나라도 선택해 주세요!");
        }
        else{
            console.log({
                books: readBook,
                genres: selectedGenres,
            })
            var where = (/^[A-Za-z0-9]*$/).test(selectedGenres[0][0])
                        ? "foreign" : "korean"
            sentData.push({
                pathname:"/recommend",
                state:{
                    where: where,
                    books: readBook,
                    genres: selectedGenres,
                }
            });
        }
    };

    return(
        <div>
            <div>
                <div className='booklist'>
                    <h3>읽은 책 리스트</h3>
                    <BookListTable 
                            columns={columns} 
                            readBook={readBook}
                            setReadBook={setReadBook}
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