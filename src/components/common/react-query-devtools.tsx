import React, { useEffect, useState } from 'react';
import { ReactQueryDevtools as ReactQueryDevtoolsPanel } from 'react-query/devtools';

export const ReactQueryDevtools: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted && <ReactQueryDevtoolsPanel initialIsOpen={false} />}</>;
};
