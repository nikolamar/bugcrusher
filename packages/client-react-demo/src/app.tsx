import React from 'react';
import logo from './logo.svg';
import './app.css';
import { ReporterButton } from '@bug-crusher/client-react';
import { useFakeActions } from './hooks/use-fake-actions';

export function App() {

    const [count, type] = useFakeActions();

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <p>
                        <a
                            className="App-link"
                            href="https://github.com/nikolamar/bugcrusher"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BugCrusher - Github
                        </a>
                    </p>
                    <p>
                        Press <code>F12</code> to open console
                    </p>
                    {type && <p>Fake user action: <code>{count}:{type}</code></p>}
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
            <ReporterButton>Report bug</ReporterButton>
        </>
    );
}