// This component will display the calculation result
// It receives the result as a "prop" from its parent component

interface ResultProps {
    result: number;
}

export default function Result({ result }: ResultProps) {
    return (
        <span>
            = {result}
        </span>
    );
}