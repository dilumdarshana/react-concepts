import { createContext, useState, useEffect, FC } from 'react';
import { SiteDataContextType } from '../@types/siteDataContext.td';
import { ChildProps } from '../@types/common.td';

const SiteDataContext = createContext<SiteDataContextType | null>(null);

export const SiteDataProvider: FC<ChildProps> = ({ children }) => {
    const [title, setTitle] = useState<string>('React Hooks');

    const values = {
        title,
        setPageTitle: (title: string) => setTitle(title)
    }

    useEffect(() => {
        document.title = title;
    }, [title]);

    return <SiteDataContext.Provider value={values}>{children}</SiteDataContext.Provider>
}

export default SiteDataContext;
