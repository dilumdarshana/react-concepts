import { useRef, useCallback, useMemo } from 'react'

const Play = () => {
    const myRef = useRef<HTMLInputElement>(null);

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
        <div className="app-separator">
            <input ref={myRef} type="text" />
            <button onClick={disableBox}>Disable Textbox</button>
            <button onClick={enableBox}>Enable Textbox</button>
            <p>Memorized value: {memorizedValue}</p>
        </div>
    )
}

export default Play;
