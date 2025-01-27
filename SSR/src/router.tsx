import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './components/Error';
import BaseLayout from './components/layout/BaseLayout';

export const Router = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error statusCode={404} />} />
      </Route>
    </Routes>
  );
}
