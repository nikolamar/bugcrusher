import { useState, useEffect } from 'react';
import { getRandomArbitrary } from '../utils/get-random-arbitrary';

const types = [
    'network',
    'console:info',
    'console:warn',
    'console:error'
];

export function useFakeActions() {

    const [count, setCount] = useState(0);
    const [type, setType] = useState('');

    let rnd = 0;

    useEffect(() => {
        const timer = setTimeout(() => {
            rnd = getRandomArbitrary(0, 4);
            const consoleMsg = count + 1 + ':' + types[rnd];

            if (types[rnd] === 'network') {
                console.log(consoleMsg);
                fetch('https://catfact.ninja/fact').then(res => res.json()).then(data => data);
            }

            if (types[rnd] === 'console:error') {
                console.error(consoleMsg);
            }

            if (types[rnd] === 'console:warn') {
                console.warn(consoleMsg);
            }

            if (types[rnd] === 'console:info') {
                console.info(consoleMsg);
            }

            setType(types[rnd]);
            setCount(count + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return [count, type];
}
