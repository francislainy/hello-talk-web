import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HelloTalkScreen from './screens/HelloTalkScreen';
import MomentsScreen from './screens/MomentsScreen';
import ConnectScreen from './screens/ConnectScreen';
import LearnScreen from './screens/LearnScreen';
import MeScreen from './screens/MeScreen';

describe('App', () => {
    it('renders the helloTalkScreen', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/" element={<HelloTalkScreen />} />
                </Routes>
            </Router>
        );

        expect(screen.getByText('HelloTalkScreen')).toBeInTheDocument();
    });

    it('renders the momentsScreen', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/moments" element={<MomentsScreen />} />
                </Routes>
            </Router>
        );

        screen.debug(undefined, 3000)
        expect(screen.getByText(/MomentsScreen/)).toBeInTheDocument();
    });

    it('renders the connectScreen', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/connect" element={<ConnectScreen />} />
                </Routes>
            </Router>
        );

        expect(screen.getByText('ConnectScreen')).toBeInTheDocument();
    });

    it('renders the learnScreen', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/learn" element={<LearnScreen />} />
                </Routes>
            </Router>
        );

        expect(screen.getByText('LearnScreen')).toBeInTheDocument();
    });

    it('renders the meScreen', () => {
        render(
            <Router>
                <Routes>
                    <Route path="/me" element={<MeScreen />} />
                </Routes>
            </Router>
        );

        screen.debug(null, 10000)
        expect(screen.getByText('MeScreen')).toBeInTheDocument();
    });
});
