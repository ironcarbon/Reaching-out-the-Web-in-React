import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
class Blog extends Component{
    render(){

        return(
            <div>
                <section class="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>

            </div>
        )
    }
}

export default Blog;