import React from 'react';
import FullPost from './FullPost.css';

const fullPost= () => {
    return(
        < >
            <div className="FullPost">
                <div className="Title">Title</div>
                <div className="Content">Content</div>
                <button className="Delete">Delete</button>
            </div>
        </ >
    );

    
}

export default fullPost;