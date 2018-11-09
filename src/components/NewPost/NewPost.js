import React from 'react';
import classes from './NewPost.css';

const newPost = () => {
    return(
        
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text"></input>
                <label>Content</label>
                <input type="text"></input>
                <label>Author</label>
                <select>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>    
                </select>
                <button class={classes.Button}>Add Post</button>    
            </div>
        
    );
}

export default newPost;