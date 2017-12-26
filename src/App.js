import React from 'react';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import Mailbox from './components/Mailbox';
import Page from './components/Page';
import NumberList from './components/NumberList';

const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];

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
                <Page />
                <NumberList numbers={numbers}/>
            </div>
        );
    }
}