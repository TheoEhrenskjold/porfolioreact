import React, { useState, useEffect } from 'react';


export default function Githubdemo() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/theoehrenskjold/repos')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Kunde inte läsa data', error));
    }, []);
    
    return (
        <div>
            
            <div className="table-container"> 
            <h1>My Github repos</h1>                                   
                    <div className='repo-grid'>
                        {posts.map((post) => (
                            <div key={post.id} className='repo'>
                                <p>{post.name}</p><br />
                                <p>{post.description /*|| 'Ingen beskrivning tillgänglig'*/}</p>
                                
                                <a href={post.html_url} target="_blank" rel="noopener noreferrer">Projektlänk</a>
                            </div>
                        ))}
                    </div>
                
            </div>
        </div>
    );
}