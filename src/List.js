import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container as BContainer, Table, Pagination, Button } from "react-bootstrap";

const Container = styled.div`display: table; width: 100%; min-width: 320px; height: 100%; border-collapse: separate;`;

const LinkText = styled.span`color: #000;`;

const List = () => {
    // _login() => {

    // }
    if(localStorage.getItem('id') != null) {
        return (
            <Container>
                <BContainer style={{maxHeight: '1000px'}}>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Link to='/read' style={{ textDecoration: 'none' }}><LinkText>테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트</LinkText></Link></td>
                                <td>테스트</td>
                                <td>2019.09.15</td>
                            </tr>
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
};


export default List;