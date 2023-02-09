import './App.module.css';
import AppLayout from './components/AppLayout/AppLayout';
import { Route, Routes } from 'react-router-dom';
import { Form1 } from './components/Forms/Form1/Form1';
import AmpsToKilowatts from './components/Forms/Form2/Form2';
import ElectricCurrentConverter from './components/Forms/Form3/Form3';
import ContactForm from './components/Forms/Form4/Form4';
import ElectricityBillCalculator from './components/Forms/Form5/Form5';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path={'/quizz'} element={<Form1 />} />
        <Route path={'/calculator-componente-electronice'} element={<AmpsToKilowatts />} />
        <Route path={'/convertor-marimi-electrice'} element={<ElectricCurrentConverter />} />
        <Route path={'/contact'} element={<ContactForm />} />
        <Route path={'/formular-de-calcul'} element={<ElectricityBillCalculator />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
