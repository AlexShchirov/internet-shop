import './App.css';
import { Header } from './layout/header/header';
import { Equipment } from './layout/sections/equipment/Equipment';
import { Feature } from './layout/sections/feature/Feature';
import { Footer } from './layout/sections/footer/Footer';
import { LatestCollection } from './layout/sections/latestCollection/LatestCollection';
import { Main } from './layout/sections/main/Main';
import { Products } from './layout/sections/products/Products';
import { Subscribe } from './layout/sections/subscribe/Subscribe';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <LatestCollection/>
            <Feature/>
            <Products/>
            <Equipment/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;

