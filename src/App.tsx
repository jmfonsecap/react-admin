import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {RedirectToUsers} from "./components/RedirectToUsers";
import Links from "./pages/Links";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/admin'} exact component={RedirectToUsers}/>
                <Route path={'/admin/login'} component={Login}/>
                <Route path={'/admin/register'} component={Register}/>
                <Route path={'/admin/profile'} component={Profile}/>
                <Route path={'/admin/users'} exact component={Users}/>
                <Route path={'/admin/users/:id/links'} component={Links}/>
                <Route path={'/admin/products'} exact component={Products}/>
                <Route path={'/admin/products/create'} component={ProductForm}/>
                <Route path={'/admin/products/:id/edit'} component={ProductForm}/>
                <Route path={'/admin/orders'} exact component={Orders}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
