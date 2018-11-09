import React from 'react';
import classes from './FullPost.css';

const fullPost= (props) => {
    return(
        < >
            <div className={classes.FullPost}>
                <div className={classes.Title}>Title</div>
                <div className={classes.Content}>Content</div>
                <button className={classes.Delete}>Delete</button>
            </div>
        </ >
    );

    
}

export default fullPost;