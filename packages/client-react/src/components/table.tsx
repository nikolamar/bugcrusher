import React, { ChangeEvent } from 'react';

const head = ['ID', 'Time', 'Type', 'Data'];
const data = [
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
];

export function Table({}): React.ReactElement {

    const [filter, setFilter] = React.useState('');

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.currentTarget.value);
    }

    return (
        <div className="bc-table">
            <section>
                <input type="text" placeholder="Search..." onChange={handleFilterChange} value={filter}/>
            </section>
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        {head.map((el: string, i: number) => <th key={i}> <div>{el}</div></th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((record: any, ri: number) =>
                        <tr key={ri}>{record.map((el: string, ei: number) =>
                            <td key={ei} data-label={head[ei]}>{el}</td>)}</tr>)}
                </tbody>
            </table>
        </div>
    );
}