import { useState } from "react";

export default function Substraction() {

    const [substractionInputA, setSubstractionInputA] = useState(0);
    const [substractionInputB, setSubstractionInputB] = useState(0);

    const substractionResult = substractionInputA + substractionInputB;

    return (
        <div>
            <input
                type="number"
                value={substractionInputA}
                onChange={(event) => setSubstractionInputA(Number(event.target.value))}
            />
            -
            <input
                type="number"
                value={substractionInputB}
                onChange={(event) => setSubstractionInputB(Number(event.target.value))}
            /> = {substractionResult}
        </div>
    )
}