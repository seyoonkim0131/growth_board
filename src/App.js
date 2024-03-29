import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import cultilabs from './img/cultilabs-green-w922.png';
import kist from './img/kist.png';

import Login from "./Login";
import List from "./List";
import Create from "./Create";
import Read from "./Read";
import { HttpLink, createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const LogoContainer = styled.div`max-height: 100px; min-height: 90px; margin: 40px 0; padding: 0; text-align: center;`;
const Logo = styled.img`height: 72px; margin: 0 20px;`;

// const link = new HttpLink({uri: 'http://localhost:4000/graphql'})
const link = new createHttpLink({uri: "http://localhost:4000/graphql"})
const cache = new InMemoryCache()
const client = new ApolloClient({link: link, cache: cache})

function App() {
  return (
    <ApolloProvider client={client}>
        <LogoContainer>
            <Logo src={cultilabs}></Logo>
            <Logo src={kist}></Logo>
        </LogoContainer>
        <Router>
            <Switch>
                <Route exact path="/" render={() => localStorage.getItem('id') !== null ? <List/> : <Login/>}></Route>
                <Route path="/login" component={Login}></Route>
                {/* <Route path="/create/:id" component={Create}></Route> */}
                <Route path="/create" component={Create}></Route>
                {/* <Route path="/update/:boardId" component={Update}></Route> */}
                <Route exact path="/read/:no" component={Read}></Route>
                {/* <Route path="/read/:boardId" component={Read}></Route> */}
                <Route path="/list" render={() => localStorage.getItem('id') !== null ? <List/> : <Login/>}></Route>
            </Switch>
        </Router>
    </ApolloProvider>
  );
}

export default App;
