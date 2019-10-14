import React, {useState} from 'react';
import styled from "styled-components";

import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

const Container = styled.div`
    display: table; width: 100%; min-width: 320px; height: 100%; border-collapse: separate;
`;

const Card = styled.div`
    border: 1px solid #85a4a4; position: relative; max-width: 580px; min-height: 520px; margin: 40px auto; padding: 58px 70px 58px 69px; border-radius:2px; box-sizing: border-box;
`;

const Input = styled.input`
    border: none; width: 100%;
`;

const InputContainer = styled.div`
    position: relative; margin: 0 0 14px; padding: 10px 35px 10px 15px; border: solid 1px #85a4a4; border-radius: 4px; background: #fff;
`;

const ButtonContainer = styled.div`
    position: absolute; right: 69px; bottom: 49px; left: 69px;
`;

const Button = styled.button`
    width: 100%; height: 50px; padding: 0; border: 0; border-radius: 4px; background: #297373;
`;

const ButtonText = styled.span`
    text-align: center; width: 100%; color: #fff; font-weight: 700; font-size: 15px;
`;

const CenterTextContainer = styled.div`text-align: center;`;

const SIGNIN = gql`
    mutation SignIn($id: String!, $password: String!){
        SignIn(id: $id, password: $password) {
            ok
            error
            token
        }
    }
`

function Signin() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [SignIn, { loading, error, data }] = useMutation(
        SIGNIN, {variables: {id: id, password: password}}
    );
    if(loading) return 'loading...'
    if(error) return `Error... ${error.message}`
    if(data !== null) {
        if(data) {
            localStorage.setItem('id', id)
            window.location.href = '/list'
        }
    }

    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                SignIn({ variables: {id: id, password: password}})
            }
        }>
            <Container>
                <Card>
                    <CenterTextContainer><h3>로그인</h3></CenterTextContainer><hr/><br/><br/>
                    <InputContainer><Input type="text" id="id" name="id" placeholder="아이디" onChange={e => setId(e.target.value)}/></InputContainer><br/>
                    <InputContainer><Input type="password" id="password" name="password" placeholder="비밀번호" onChange={e => setPassword(e.target.value)}/></InputContainer>
                    <ButtonContainer><Button type="submit"><ButtonText>로그인</ButtonText></Button></ButtonContainer>
                </Card>
            </Container>
        </form>
    );
}

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
        }
    }
    render() {
        return (
            <Signin/>
        )
    }
}