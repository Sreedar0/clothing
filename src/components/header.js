import React, { Component,Link } from 'react';
import './header.css';


export class header extends Component {
    render() {
        return (
            <div>
                <header class="header">
            <div class="container-fluid">
            <div class="row">
            <div class="col-xl-3 col-lg-2">
            <div class="header__logo">
            <a href="#"><img src= {require('../assets/img/venom.png')} /></a>
            </div>
            </div>
            <div class="col-xl-6 col-lg-7">
            <nav class="header__menu">
            <ul>
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Women’s</a></li>
            <li><a href="#">Men’s</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a>
            <ul class="dropdown">
            <li><a href="#">Product Details</a></li>
            <li><a href="#">Shop Cart</a></li>
            <li><a href="#">Checkout</a></li>
            <li><a href="#">Blog Details</a></li>
            </ul>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </nav>
            </div>
            <div class="col-lg-3">
            <div class="header__right">
            <div class="header__right__auth">
            <a href="#">Login Here</a>
            <a href="#">Register</a>
            </div>
            <ul class="header__right__widget">
            <li><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
            <div class="tip">2</div>
            </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
            <div class="tip">2</div>
            </a></li>
            </ul>
            </div>
            </div>
            </div>
            <div class="canvas__open">
            <i class="fa fa-bars"></i>
            </div>
            </div>
            </header>
            </div>
        )
    }
}

export default header
