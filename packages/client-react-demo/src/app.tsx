import React from 'react';
import { useFakeActions } from './hooks/use-fake-actions';
import { AppLogo } from './components/app-logo';
import { AppLink } from './components/app-link';
import { Page } from './components/page';
import { Header } from './components/header';
// Bug crusher components
import { createClient } from '@bug-crusher/client-js';
import { useWithClient } from '@bug-crusher/client-react';

export const client = createClient({
    key: 'secretkey',
    video: { mediaSource: 'screen' },
});

export function App() {

    const [count, type] = useFakeActions();
    const [button, data] = useWithClient(client);

    return (
        <Page>
            <Header>
                <p><AppLink>BugCrusher - Github</AppLink></p>
                <p>Press <code>F12</code> to open console</p>
                {type && <p>Fake user action: <code>{count}:{type}</code></p>}
                <AppLogo/>
            </Header>
            {button}
            {data}
        </Page>
    );
}