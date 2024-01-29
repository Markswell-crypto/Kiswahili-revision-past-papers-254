import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage';
import ExamPapers from './components/ExamPapers';
import Payment from './components/Payment';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/exam-papers" element={<ExamPapers/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <div className='container'>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
