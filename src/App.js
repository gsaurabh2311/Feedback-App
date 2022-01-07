import React from 'react'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm';
import {FeedbackProvider} from './context/FeedbackContext';

const App = () => {
    return (
        <FeedbackProvider>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />

            {/* <AboutPage /> */}

            </div>
        </FeedbackProvider>
    )
}

export default App;
