import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as BContainer, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap"

import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const Container = styled.div`width:40%; float: right;`;

function getToday() {
    let tempDate = new Date()
    let year = tempDate.getFullYear()
    let month = tempDate.getMonth()+1
    let day = tempDate.getDate()
    if(month <= 9) {
        month = '0'+month
    }
    return year + '.' + month + '.' + day
}

const CREATEBOARD = gql`
    mutation CreateBoard($title: String!, $body: String!, $file: String!, $createId: String!) {
        CreateBoard(title: $title, body: $body, file: $file, createId: $createId) {
            ok
            error
            token
        }
    }
`




function Create() {
    return (
        <BContainer>
            <h2>글쓰기</h2>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    {/* <Button variant="outline-secondary">공지</Button> */}
                    <InputGroup.Text>제목</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1"/>
            </InputGroup>
            <Container>
                <Row>
                    <Col>작성자</Col>
                    <Col>{localStorage.getItem('id')}</Col>
                    <Col>작성일</Col>
                    <Col>{getToday()}</Col>
                </Row>
            </Container>
            <InputGroup className="mb-3" style={{minHeight:'500px'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text>내용</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            <h5>첨부파일</h5>
            <div>
                <input type='file' id='file'/>
                {/* <label for='file1'></label><input type='file' id='file1' style={{display:'none'}}/>
                <label for='file2'></label><input type='file' id='file2' style={{display:'none'}}/>
                <label for='file3'></label><input type='file' id='file3' style={{display:'none'}}/>
                <label for='file4'></label><input type='file' id='file4' style={{display:'none'}}/>
                <label for='file5'></label><input type='file' id='file5' style={{display:'none'}}/> */}
            </div><br/>
            <div>
                <Link to='/list'><Button style={{float:'left'}}>취소</Button></Link>
                <Button type="submit" onClick="console.log('test');">저장</Button>
                {/* <Link to='/list'><Button style={{float:'right'}}>저장</Button></Link> */}
            </div>
        </BContainer>
    );
  }


export default Create;