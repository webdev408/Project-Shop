
import Footer from './components/Footer';
import { Outlet} from 'react-router-dom';
import Header from './components/Header';
import './assets/index.css';
import './assets/bootstrap.custom.css'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
