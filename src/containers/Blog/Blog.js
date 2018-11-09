import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';

class Blog extends Component{
    state = {
        posts:[],
        selectedPostId: null,
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                const shortPosts = response.data.slice(0,4);
                const updatedPosts= shortPosts.map(post => {
                    return{
                        ...post,
                        author: 'Max'
                    }
                })

                this.setState({posts: updatedPosts})
            })   
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }


    render(){
        const posts= this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>
        })

        return(
            <div>
                <section class="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                    <NewPost />

            </div>
        )
    }
}

export default Blog;