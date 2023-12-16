"use client"
import React, { useState } from "react";

export default function Home() {
  const peopleList: string[] = ['USman', 'John', 'Jane', 'Bob', 'Alice'];
  const [count, setCount] = useState<number>(0);

  const handlePrevious = () => {
    setCount((prevCount: number) => (prevCount - 1 + peopleList.length) % peopleList.length);
  };

  const handleNext = () => {
    setCount((prevCount: number) => (prevCount + 1) % peopleList.length);
  };

  const personName: string = 'John Doe';

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-8 mb-4">
        <div className="md:flex">
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
              {peopleList[count]}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-md mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
        >
          PREVIOUS
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
