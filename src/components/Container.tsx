import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex gap-8 bg-indigo-300 p-4">
      {children}
    </div>
  );
};

export default Container;