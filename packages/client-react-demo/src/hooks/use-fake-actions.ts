import { useState, useEffect } from 'react';
import { getRandomArbitrary } from '../utils/get-random-arbitrary';
import { client } from '../app';

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
            const random = getRandomArbitrary(0, types.length);
            const nextNumber = count + 1;
            const consoleMsg = nextNumber + ':' + types[random];

            if (types[random] === 'network') {
                const reqUrl = 'https://catfact.ninja/fact';
                const reqOptions = { method: 'GET' };

                const report: any = {
                    reqUrl,
                    reqOptions,
                };

                fetch(reqUrl)
                    .then(res => {
                        res.headers.forEach((value, name) => {
                            const header = { [name]: value };
                            report.resHeaders.push(header);
                        });
                        report.resRedirected = res.redirected;
                        report.resStatus = res.status;
                        report.resOk = res.ok;
                        report.resStatusText = res.statusText;
                        report.resType = res.type;
                        return res.json();
                    })
                    .then(data => {
                        report.resData = data;
                        return data;
                    })
                    .catch(err => {
                        report.resError = err;
                    });

                client.pushReport(report);
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
