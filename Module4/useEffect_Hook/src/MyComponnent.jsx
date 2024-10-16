import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('Timeout triggered');
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  return <div>Cleanup example</div>;
}
