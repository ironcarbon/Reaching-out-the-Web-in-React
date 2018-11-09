import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';

class Blog extends Component{
    state = {
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
                
            
            
    }
    render(){
        const posts= this.state.posts.map(post => {
            return <Post key={post.id} title={post.title}/>
        })

        return(
            <div>
                <section class="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                    <NewPost />

            </div>
        )
    }
}

export default Blog;