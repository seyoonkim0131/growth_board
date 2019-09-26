import React from 'react';
import styled from "styled-components";
import cultilabs from './img/cultilabs-green-w922.png';
import kist from './img/kist.png';

const Container = styled.div`
    display: table; width: 100%; min-width: 320px; height: 100%; border-collapse: separate;
`;

const LogoContainer = styled.div`
    max-height: 80px; margin: 40px 0; padding: 0; text-align: center;
`;

const Logo = styled.img`
    height: 72px; margin: 0 20px;
`;

const Card = styled.div`
    border: 1px solid #85a4a4; position: relative; max-width: 580px; min-height: 520px; margin: 40px auto; padding: 58px 70px 58px 69px; border-radius:2px; box-sizing: border-box;
`;

const Input = styled.input`
    border: none; width: 100%;
`;

const InputContainer = styled.div`
    position: relative; height: 29px; margin: 0 0 14px; padding: 10px 35px 10px 15px; border: solid 1px #85a4a4; border-radius: 4px; background: #fff;
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

const Login = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo src={cultilabs}></Logo>
                <Logo src={kist}></Logo>
            </LogoContainer>
            <Card>
                <CenterTextContainer><h3>로그인</h3></CenterTextContainer><hr/><br/><br/>
                <InputContainer><Input type="text" id="id" name="id" placeholder="아이디"/></InputContainer><br/>
                <InputContainer><Input type="password" id="pw" name="pw" placeholder="비밀번호"/></InputContainer>
                <ButtonContainer><Button><ButtonText>로그인</ButtonText></Button></ButtonContainer>
            </Card>
        </Container>
    );
};

export default Login;