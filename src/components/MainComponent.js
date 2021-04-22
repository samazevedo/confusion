import React, { Component } from 'react';
import Home from './HomeComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }



    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div className="MainPage">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />} exact />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;

