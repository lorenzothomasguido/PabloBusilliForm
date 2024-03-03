// Importa React y el componente Navbar
import * as React from 'react';
import Navbar from './components/Navbar/Navbar';


// Define tu componente Page
const Page: React.FC = () => {
  return (
    <div>
      {/* Renderiza el componente Navbar */}
      
      <Navbar />

    </div>
  );
};

// Exporta tu componente Page
export default Page;
