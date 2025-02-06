import { useContext, useEffect } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const HowReactWorks = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  
  useEffect(() => {
    setPageTitle('How React Works');
    setPageDescription('');
  });

  return (
    <div className="component-container">
      <p>State/Props change → Render → Virtual DOM diffing → Actual DOM update → Screen update → Effects run</p>
      <h2>1. State/Props Update</h2>
      <p>A state or prop change triggers a re-render.</p>

      <h2>2. Render Phase</h2>
      <p>React calls the component function to generate the new Virtual DOM.</p>
      <p>This phase is <strong>pure and synchronous</strong>—no side effects should be performed here.</p>

      <h2>3. Reconciliation (Diffing Algorithm)</h2>
      <p>React compares the new Virtual DOM with the previous one.</p>
      <p>It determines the minimal set of updates needed.</p>

      <h2>4. Commit Phase</h2>
      <p>React updates the <strong>Real DOM</strong> (this is when changes are applied).</p>
      <p>React runs <strong>layout effects</strong> (<code>useLayoutEffect</code>) before the browser paints.</p>
      <p>The browser <strong>paints</strong> the updated UI on the screen.</p>
      <p>React runs <strong>passive effects</strong> (<code>useEffect</code>) after the UI is painted.</p>
    </div>
  )
}

export default HowReactWorks;
