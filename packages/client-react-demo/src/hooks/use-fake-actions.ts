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

    useEffect(() => {
        const timer = setTimeout(() => {
            const random = getRandomArbitrary(0, 4);
            const nextNumber = count + 1;
            const consoleMsg = nextNumber + ':' + types[random];

            if (types[random] === 'network') {
                console.log(consoleMsg);
                fetch('https://catfact.ninja/fact').then(res => res.json()).then(data => data).catch(err => err);
            }

            if (types[random] === 'console:error') {
                console.error(consoleMsg);
            }

            if (types[random] === 'console:warn') {
                console.warn(consoleMsg);
            }

            if (types[random] === 'console:info') {
                console.info(consoleMsg);
            }

            setType(types[random]);
            setCount(nextNumber);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return [count, type];
}
