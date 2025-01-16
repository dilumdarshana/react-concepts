import { createContext, useEffect, useState, FC } from 'react';
import { SiteDataContextType } from '../@types/siteDataContext';
import { ChildProps } from '../@types/common';

const SiteDataContext = createContext<SiteDataContextType | null>(null);

export const SiteDataProvider: FC<ChildProps> = ({ children }) => {
  const [title, setTitle] = useState<string>('Loading...');
  const [description, setDescription] = useState<string>('');

  const values = {
    title,
    description,
    setPageTitle: (title: string) => setTitle(title),
    setPageDescription: (description: string) => setDescription(description),
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <SiteDataContext.Provider value={values}>
      {children}
    </SiteDataContext.Provider>
  );
}

export default SiteDataContext;
