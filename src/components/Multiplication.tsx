import { useState } from "react";

export default function Multiplication() {

    const [multiplicationInputA, setMultiplicationInputA] = useState(0);
    const [multiplicationInputB, setMultiplicationInputB] = useState(0);

    const multiplicationResult = multiplicationInputA * multiplicationInputB;

    return (
        <div>
            <input
                type="number"
                value={multiplicationInputA}
                onChange={(event) => setMultiplicationInputA(Number(event.target.value))}
            />
            *
            <input
                type="number"
                value={multiplicationInputB}
                onChange={(event) => setMultiplicationInputB(Number(event.target.value))}
            /> = {multiplicationResult}
        </div>
    )
}