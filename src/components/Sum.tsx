import { useState } from "react";

export default function Sum() {

    const [sumInputA, setSumInputA] = useState(0);
    const [sumInputB, setSumInputB] = useState(0);

    const sumResult = sumInputA + sumInputB;

    return (
        <div>
            <input
                type="number"
                value={sumInputA}
                onChange={(event) => setSumInputA(Number(event.target.value))}
            />
            +
            <input
                type="number"
                value={sumInputB}
                onChange={(event) => setSumInputB(Number(event.target.value))}
            /> = {sumResult}
        </div>
    )
}