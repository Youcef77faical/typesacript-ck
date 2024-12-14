import React from 'react'
import { Car } from './classes/Car';

function App() {
 
  const myCar = new Car("Toyota", "Camry", 2022);

 
  myCar.start();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Vehicle Information</h1>
        <p>Make: {myCar.make}</p>
        <p>Model: {myCar.model}</p>
        <p>Year: {myCar.year}</p>
        <button 
          onClick={() => myCar.start()} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Start Engine
        </button>
      </div>
    </div>
  );
}

export default App;