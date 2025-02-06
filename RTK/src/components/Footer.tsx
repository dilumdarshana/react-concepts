import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Footer = () => {
  const [fontWeight, setFontWeight] = useState(200);
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    setFontWeight(theme === 'light' ? 400 : 800);
  }, [theme]);

  return (
    <footer className={`bg-gray-${fontWeight} text-white p-4 mt-auto`}>
      <div className="container mx-auto">
        <p className="text-center">&copy; 2025 xxxx.com. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
