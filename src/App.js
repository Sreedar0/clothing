
import './App.css';
import Header from './components/header';
import Fashionsection from './components/fashionsection';
import Productsection from './components/productsection';
import Bannersection from './components/bannersection';
import Trendsection from './components/trendsection';
import Discountsection from './components/discountsection';
import Shippingsection from './components/shippingsection';
import Footer from './components/footer';
import Instasection from './components/instasection';





function App() {
  return (
    <div className="App">
     <div className="maincontainer">
        <div id="preloder">
            <div class="loader"></div>
            </div>
            
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
            <div class="offcanvas__close">+</div>
            <ul class="offcanvas__widget">
            <li><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
            <div class="tip">2</div>
            </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
            <div class="tip">2</div>
            </a></li>
            </ul>
            <div class="offcanvas__logo">
            <a href="#"><img src={require('./assets/img/logo.png')} alt="" /></a>
            </div>
            <div id="mobile-menu-wrap"></div>
            <div class="offcanvas__auth">
            <a href="#">Login</a>
            <a href="#">Register</a>
            </div>
            </div>
            
            
            <Header />
            
            <Fashionsection />
            
            <Productsection />

            <Instasection />

            <Bannersection />
            
            <Trendsection />
            
            <Discountsection />
            
            <Shippingsection />

            <Footer />
             
      </div>
    </div>
  );
}

export default App;
