import React from 'react';

const head = ['ID', 'Time', 'Type', 'Data'];
const data = [
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
    ['Aaf23aa454w5wqlQIJJijdwijqid', '11/07/2021 13:54 am', 'console:log', 'sdfsafsjdfkjskfajk'],
];

export function Table({}): React.ReactElement {
    return (
        <table cellSpacing={0} className="bc-table">
            <thead>
                <tr>
                    {head.map((el: string) => <th> <div>{el}</div></th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((record: any) =>
                    <tr>{record.map((el: string, index: number) =>
                        <td data-label={head[index]}>{el}</td>)}</tr>)}
            </tbody>
        </table>
    );
}