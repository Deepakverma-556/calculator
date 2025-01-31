'use client'
import React, { useState } from 'react'

const Calculator = () => {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.']
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setResult((prev) => prev + value);
    };

    const handleClear = () => {
        setResult('');
    };

    const handleCalculate = () => {
            setResult(eval(result));
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-4 text-black">{result}</div>
                <div className="grid grid-cols-4 gap-2">
                    {arr.map((item) => (
                        <button
                            key={item}
                            className="bg-blue-500 text-black p-4 rounded-md"
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                    <button className="bg-red-500 text-white p-4 rounded-md" onClick={handleClear}>C</button>
                    <button className="bg-green-500 text-white p-4 rounded-md col-span-2" onClick={handleCalculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator