import React from 'react';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';

const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React'];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Clock name="Mauricio" />
                <Clock name="Nicole" />
                <Clock name="Darlyn" />
                <Toggle />
                <LoginControl />
                <Mailbox unreadMessages={messages} />
            </div>
        );
    }
}