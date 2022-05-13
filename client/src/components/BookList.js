import React, {useEffect, useState} from 'react';
import { List, Card, Descriptions, Collapse  } from 'antd';

const { Panel } = Collapse;

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async() => {
            const response = await fetch("http://localhost:8000/books");

            if (!response.ok) {
                const message = `Sadness...: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const retrievedBooks = await response.json();
            setBooks(retrievedBooks);
        }

        getBooks();
        return;

    }, [books.length]);

    return (
        <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
            }}
            dataSource={books}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>
                    <Descriptions title="Book Review Info">
                        <Descriptions.Item label="Author">
                            {item.author}
                        </Descriptions.Item>
                    </Descriptions>
                    <Collapse>
                        <Panel header="My Thoughts: " key="1">
                            <p>{item.thoughts}</p>
                        </Panel>
                    </Collapse>
                </Card>
            </List.Item>
            )}
        />
    );
};

export default BookList;