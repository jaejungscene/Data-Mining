import { Button, Table } from 'antd';
import React, { useState } from 'react';
import "./index.css"

export default function SearchTable(props){
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = props.columns;
    const data = props.data;
    const readBook = props.readBook;
    const setReadBook = props.setReadBook;
    

      const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
          setSelectedRowKeys([]);
          setLoading(false);
          var newBooks = [];
          for(let i=0; i<readBook.length; i++){
            newBooks.push(
              readBook[i]
            );
          }
          for(let i=0; i<selectedRowKeys.length; i++){
            console.log("check");
            newBooks.push(
              data[selectedRowKeys[i]]
            );
          }
          console.log("newBooks: ",newBooks);
          
          setReadBook(newBooks);
        }, 1000);
      };
      const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
      const hasSelected = selectedRowKeys.length > 0;
      return (
        <div>
          <div
            // style={{
            //   marginBottom: 16,
            // }}
          >
            {/* <div className='searchBtn'> */}
              <Button type="primary" onClick={()=>start(selectedRowKeys)} disabled={!hasSelected} loading={loading}>
                읽은 책 리스트에 추가
              </Button>
            {/* </div> */}
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table 
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={{pageSize:5}}
            size="small"
          />
        </div>
      );
}