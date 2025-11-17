import { useState } from "react";
import Result from "./Result"; // Import our new Result component

export default function Operation() {

    const [InputA, setInputA] = useState(0);
    const [InputB, setInputB] = useState(0);
    const [chosenOperation, setChosenOperation] = useState('sum');

    // This function calculates the result based on the selected operation
    const calculateResult = () => {
        switch (chosenOperation) {
            case 'sum':
                return InputA + InputB;
            case 'substraction':
                return InputA - InputB;
            case 'multiplication':
                return InputA * InputB;
            case 'division':
                return InputB !== 0 ? InputA / InputB : 0;
            default:
                return 0;
        }
    };


    return (
        <div>
            <div>
                <input
                    type="number"
                    value={InputA}
                    onChange={(event) => setInputA(Number(event.target.value))}
                />
                <select onChange={(event) => setChosenOperation(event.target.value)}>
                    <option value="sum">+</option>
                    <option value="substraction">-</option>
                    <option value="multiplication">*</option>
                    <option value="division">/</option>
                </select>
                <input
                    type="number"
                    value={InputB}
                    onChange={(event) => setInputB(Number(event.target.value))}
                />
            </div>
            <div>
                <Result result={calculateResult()} />
            </div>
        </div>

    )
}