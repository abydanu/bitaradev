import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    decimals?: number;
}

const Counter = ({ from = 0, to, duration = 3, decimals = 0 }: CounterProps) => {
    const [display, setDisplay] = useState(from);

    useEffect(() => {
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                setDisplay(Number(value.toFixed(decimals)));
            }
        });

        return () => controls.stop();
    }, [from, to, duration, decimals]);

    return <span>{display}</span>;
};

export default Counter;
