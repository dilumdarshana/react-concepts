import { useRef, useCallback, useMemo, useEffect, useContext } from 'react'
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const UseRef = () => {
    const myRef = useRef<HTMLInputElement>(null);
    const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;

    useEffect(() => {
      setPageTitle('useRef');
      setPageDescription('This is a React Hook that lets you reference a value that’s not needed for rendering.');
    }, []);

    const disableBox = useCallback(() => {
        myRef.current?.setAttribute('disabled', 'true');
    }, []);

    const enableBox = useCallback(() => {
        myRef.current?.removeAttribute('disabled');
    }, []);

    const memorizedValue = useMemo(() => {
        return 2 + 8;
    }, []);

    return (
        <div className="component-container">
            <input ref={myRef} type="text" />
            <button onClick={disableBox}>Disable Textbox</button>
            <button onClick={enableBox}>Enable Textbox</button>
            <p>Memorized value: {memorizedValue}</p>
        </div>
    )
}

export default UseRef;
