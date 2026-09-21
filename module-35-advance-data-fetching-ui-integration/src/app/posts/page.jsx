import React from 'react';

const postsPromise = async() =>{
const res = await fetch('https://jsonplaceholder.typicode.com/posts')

if(!res.ok){
    throw new Error('Faileed to fetch posts')
}
    return res.json();
}
const PostsPage = async() => {
    const posts = await postsPromise()

    return (
        <div>
            <h2>Total Post: {posts.length}</h2>
            
        </div>
    );
};

export default PostsPage;