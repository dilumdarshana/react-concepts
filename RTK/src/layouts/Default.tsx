import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import LeftMenu from '../components/LeftMenu';
import { RootState, AppDispatch } from '../store';
import { toggleTheme } from '../features/theme/themeSlice';
import Footer from '../components/Footer';

const Default = () => {
  const [fontWeight, setFontWeight] = useState(200);
  // to access the store, we need to use useSlector
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispath: AppDispatch = useDispatch();

  useEffect(() => {
    setFontWeight(theme === 'light' ? 200 : 800);
  }, [theme]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // dispatch action to toggle theme.
    dispath(toggleTheme(value as 'light' | 'dark'))
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`text-white p-4 bg-blue-${fontWeight}`}>
        <div className="container flex items-center mx-auto justify-between p-4">
          <h1 className="text-2xl font-bold">Redux ToolKit</h1>
          <select
            className="px-4 py-2 border rounded-lg cursor-pointer"
            onChange={onChange}
          >
            <option defaultValue={'light'} value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto pt-4">
        <div className="flex">
          {/* Left Menu */}
          <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
            <LeftMenu />
          </div>
          {/* Main Content */}
          <div className="flex-grow bg-white p-4">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Default;
