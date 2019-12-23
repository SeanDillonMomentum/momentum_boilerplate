import React, { useState, useContext } from "react";
import { withRouter, BrowserRouter, Switch } from "react-router-dom";
import { authProvider } from "./Auth/authConfig";
import { AzureAD } from "react-aad-msal";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import Login from "./Pages/Login/Login";
import styled from "styled-components";
import { hot } from "react-hot-loader";

const Context = React.createContext({});

const StyledApp = styled.div`
  margin: 15px;
  margin-left: ${props => (props.show ? "115px" : "0")};
  transition: margin-left 0.5s;
  padding-top: 64px;
`;

export { Context };

const PrivateRoute = withRouter(props => {
  const { show } = useContext(Context);
  const { component: Component } = props;

  return (
    <AzureAD provider={authProvider}>
      {({ accountInfo }) => {
        return accountInfo && accountInfo.account ? (
          <>
            <Header accountInfo={accountInfo} />
            <SideNav accountInfo={accountInfo} />
            <StyledApp show={show}>
              <Component {...props} accountInfo={accountInfo} />
            </StyledApp>
          </>
        ) : (
          <Login login={() => authProvider.login()} />
        );
      }}
    </AzureAD>
  );
});

const AppRouter = () => {
  const [show, setShow] = useState(true);

  return (
    <Context.Provider value={{ show, setShow }}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" component={Home} exact={true} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default hot(module)(AppRouter);
