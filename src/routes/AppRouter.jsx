import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
        //Insertamos el Router el cual ya es un context.
        <Router>
            <Header />
            <Switch>
                {/* Definimos la primer ruta */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

                <Route path="/" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter
