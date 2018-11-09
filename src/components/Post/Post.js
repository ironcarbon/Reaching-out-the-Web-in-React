import React from 'react';
import classes from './Post.css';

const post = (props) => {
    return(
        
            <div className={classes.Post}>
                <div className={classes.Title}>{props.title}</div>
                <div className={classes.Author}>Author</div>
            </div>

        
        
    );
}

export default post;