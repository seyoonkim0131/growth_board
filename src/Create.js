import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as BContainer, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

const Container = styled.div`width:40%; float: right;`;

function Create() {
    return (
        <BContainer>
            <h2>글쓰기</h2>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">공지</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" placeholder="제목"/>
            </InputGroup>
            <Container>
                <Row>
                    <Col>작성자</Col>
                    <Col>ㅌㅅㅌ</Col>
                    <Col>작성일</Col>
                    <Col>2019.09.27</Col>
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
                <Link to='/list'><Button style={{float:'right'}}>저장</Button></Link>
            </div>
        </BContainer>
    );
  }


export default Create;