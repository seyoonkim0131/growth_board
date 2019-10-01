import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { tsConstructorType } from '@babel/types';



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

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
        }
    }
    handleSubmit = async () => {
        const {id, password} = this.state

        await this.props.SignIn(id, password).then(({data}) => {
            if(data.SignIn.ok) {
                localStorage.setItem('id', this.state.id)
                window.location.href='/list'
            } else {
                return false
            }
        }).catch(e => {
            if(/id/i.test(e.message)) {
                console.log('id error')
            }
            if(/password/i/test(e.message)) {
                console.log('password error')
            }
        })
    }

    onChangeId = (e) => {
        this.setState({id: e.target.value})
    }
    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Container>
                <Card>
                    <CenterTextContainer><h3>로그인</h3></CenterTextContainer><hr/><br/><br/>
                    <InputContainer><Input type="text" id="id" name="id" placeholder="아이디" onChange={this.onChangeId}/></InputContainer><br/>
                    <InputContainer><Input type="password" id="password" name="password" placeholder="비밀번호" onChange={this.onChangePassword}/></InputContainer>
                    <ButtonContainer><Button onClick={this.handleSubmit}><ButtonText>로그인</ButtonText></Button></ButtonContainer>
                </Card>
            </Container>
        )
    }
}

export default graphql(
    gql`
        mutation SignIn($id: String!, $password: String!){
            SignIn(id: $id, password: $password) {
                ok
                error
                token
            }
        }
    `,
    {
        props: ({ mutate }) => ({
            SignIn: (id, password) => mutate({variables: {id, password}})
        })
    }
)(Login);