import React from 'react'
import Layout from '../components/layouts/Layout'
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Colors from "./Colors";
import Settings from './settings/Settings';
import SpinnerPage from './partials/SpinnerPage';
import ButtonsPage from './partials/ButtonsPage';
const Main = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Home} />
                <Route path="/dashboard/extra/colors" component={Colors} />
                <Route path="/dashboard/extra/settings" component={Settings} />
                <Route path="/dashboard/component/spinner/" component={SpinnerPage} />
                <Route path="/dashboard/component/buttons/" component={ButtonsPage} />
            </Layout>
        </BrowserRouter>
    )
}

export default Main
