import React,{Component} from 'react';
import classes from './FullPost.css';

class FullPost extends Component{
    render() {

        let post = <p>Please select a Post!</p>;
        if(this.props.id){
            post= (
                <div className={classes.FullPost}>
                    <h1 className={classes.Title}>Title</h1>
                    <p className={classes.Content}>Content</p>
                    <button className={classes.Delete}>Delete</button>
                    
                </div>
    
            )

        }
       
        return post;
    
    }
}




    






export default FullPost;