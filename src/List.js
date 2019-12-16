import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container as BContainer, Table, Pagination, Button } from "react-bootstrap"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'

const Container = styled.div`display: table; width: 100%; min-width: 320px; height: 100%; border-collapse: separate;`;

const LinkText = styled.span`color: #000;`;

const READ_BOARD_ALL = gql`
    query ReadBoardAll {
        ReadBoardAll {
            ok
            error
            board {
                no
                title
                createId
                updateDate
            }
        }
    }
`

function convertDate(date) {
    let tempDate = new Date(date-234798274)
    let year = tempDate.getFullYear()
    let month = tempDate.getMonth() + 1
    let day = tempDate.getDate()
    if(month <= 9) {
        month = '0'+month
    }
    return year + '.' + month + '.' + day
}



function BoardList() {
    const { loading, error, data } = useQuery(READ_BOARD_ALL)
    if(loading) return 'Loading...'
    if(error) return `Error... ${error.message}`
    if(data !== null) {
        const boards = data.ReadBoardAll
        let boardArr = boards.board.sort((a,b)=> a-b).reverse().map((list) =>
            <tr key={list.no}>
                <td>{list.no}</td>
                <td><Link to={`/read/${list.no}`} style={{ textDecoration: 'none' }}><LinkText>{list.title}</LinkText></Link></td>
                <td>{list.createId}</td>
                <td>{convertDate(list.updateDate)}</td>
            </tr>
        )
        return boardArr
    }
}

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if(localStorage.getItem('id') != null) {
            return (
                <Container>
                    <BContainer style={{maxHeight: '1000px'}}>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>제목</th>
                                    <th style={{width:'20%'}}>작성자</th>
                                    <th>작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <BoardList/>
                            </tbody>
                        </Table>
                        <Link to='/create'><Button variant="outline-success" style={{float:'right'}}>글쓰기</Button></Link>
                        {/* <Pagination style={{margin:'80px 20%'}}>
                            <Pagination.First/>
                            <Pagination.Prev/>
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis/>
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item>{14}</Pagination.Item>
                            <Pagination.Item>{15}</Pagination.Item>
                            <Pagination.Ellipsis/>
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next/>
                            <Pagination.Last/>
                        </Pagination> */}
                    </BContainer>
                </Container>
            );
        } else {
            return (
                <Container>
                    <BContainer style={{textAlign: 'center'}}>
                        <h5>로그인이 필요합니다.</h5>
                        {/* <Button onClick={this._login}>로그인</Button> */}
                    </BContainer>
                </Container>
            );
        }
    }
};