import { useState } from "react";

export default function Division() {

    const [divisionInputA, setDivisionInputA] = useState(0);
    const [divisionInputB, setDivisionInputB] = useState(0);

    const sumResult = divisionInputA / divisionInputB;

    return (
        <div>
            <input
                type="number"
                value={divisionInputA}
                onChange={(event) => setDivisionInputA(Number(event.target.value))}
            />
            /
            <input
                type="number"
                value={divisionInputB}
                onChange={(event) => setDivisionInputB(Number(event.target.value))}
            /> = {sumResult}
        </div>
    )
}