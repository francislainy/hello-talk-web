import React from 'react';
import MomentList from "../components/MomentList";

function MomentsScreen() {

    const moments = [
        {
            id: 1,
            title: 'My first moment',
            description: 'This is my first moment on the app!',
            image: 'https://example.com/my-image.jpg',
        },
        {
            id: 2,
            title: 'Another moment',
            description: 'This is another moment on the app.',
            image: 'https://example.com/another-image.jpg',
        },
        {
            id: 3,
            title: 'Third moment',
            description: 'This is the third moment on the app.',
            image: 'https://example.com/third-image.jpg',
        },
    ];

    return (
        <div>
            <h1>MomentsScreen</h1>
            <p>This is the moment page.</p>
            <MomentList moments={moments}/>
        </div>
    );
}

export default MomentsScreen;
