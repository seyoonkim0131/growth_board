import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as BContainer, Button, InputGroup, FormControl, Row, Col, Table } from 'react-bootstrap'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GreenCol = styled(Col)`background: #dde0dc; padding: 10px;`
const GreyRow = styled(Row)`border: 1px solid #e0e0e0;`
const READ_BOARD_ONE = gql`
    query ReadBoardOne($no: Int!) {
        ReadBoardOne(no: $no) {
            ok
            error
            board{
                no
                title
                file
                body
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

function BoardOne({no}) {
    let boardId = parseInt(no)
    const { loading, error, data } = useQuery(READ_BOARD_ONE, {variables: {no: boardId}})
    if(loading) return 'Loading...'
    if(error) return `Error... ${error.message}`
    if(data !== null) {
        return (
            <div>
                <GreyRow>
                    <Col style={{padding:'10px', marginTop: '10px'}}><h3>{data.ReadBoardOne.board.title}</h3></Col>
                </GreyRow>
                <GreyRow>
                    <GreenCol xs lg="2">작성자</GreenCol>
                    <Col style={{padding: '10px'}}>{data.ReadBoardOne.board.createId}</Col>
                </GreyRow>
                <GreyRow>
                    <GreenCol xs lg="2">작성일</GreenCol>
                    <Col style={{padding: '10px'}}>{convertDate(data.ReadBoardOne.board.updateDate)}</Col>
                </GreyRow>
                <GreyRow>
                    <GreenCol xs lg="2">첨부파일</GreenCol>
                    <Col style={{padding: '10px'}}><Link to={`/files/${data.ReadBoardOne.board.file}`} target='_blank' download>{data.ReadBoardOne.board.file}</Link></Col>
                </GreyRow>
                <GreyRow style={{minHeight: '300px', paddingTop: '20px'}}>
                    <Col style={{padding: '10px'}}>{data.ReadBoardOne.board.body.split('\n').map(line => {return (<span>{line}<br/></span>)})}</Col>
                </GreyRow>
            </div>
        )
    }
}

const Read = ({match}) => {
    return (
        <BContainer>
            <BoardOne no={match.params.no}/>
            <br/>
            <Link to='/list'><Button variant="outline-success" style={{float:'right'}}>목록</Button></Link>
        </BContainer>
    );
}


export default Read;