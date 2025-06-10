import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Cover from './pages/Cover';

import Layout from './components/Layout';
import { AuthProvider } from './hooks/useAuth';

import DashboardPage from './pages/DashboardPage';

import AddIncomePage from './pages/income/AddIncomePage';
import AllIncome from './pages/income/AllIncome';
import EditIncome from './pages/income/EditIncomePage';

import AddExpensePage from './pages/expense/AddExpensePage';
import AllExpense from './pages/expense/AllExpense';
import EditExpense from './pages/expense/EditExpensePage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Layout />} />
          <Route path='/register' element={<Layout />} />

          <Route index element={<Home />} />
          <Route path='/cover' element={<Cover />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/dashboard' element={<DashboardPage />} />

          <Route path='/add-income' element={<AddIncomePage />} />
          <Route path='/all-incomes' element={<AllIncome />} />
          <Route path='/edit-income/:id' element={<EditIncome />} />

          <Route path='/all-expenses' element={<AllExpense />} />
          <Route path='/add-expense' element={<AddExpensePage />} />
          <Route path='/edit-expense/:id' element={<EditExpense />} />

        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
