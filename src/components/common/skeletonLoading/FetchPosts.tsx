import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "./Card"
const BASE_URL = "https://jsonplaceholder.typicode.com/"
const fetchData = async (term = "posts") => {
 const response = await axios.get(`${BASE_URL}${term}`);
    return response?.data
}

const FetchPosts = () => {
    const [posts, setPosts] = useState([])
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        let mounted = true
        setIsEmpty(true)
        const getPosts = async () => {
            const results = await fetchData();
            if(mounted) {
                // update its state only if the component is mounted
                setPosts(results)

            }
        }
        getPosts()
        setTimeout(() => {
            setIsEmpty(false)
        }, 3000)

        // we clean up here
        return () => { mounted = false}
    }, [])


    return (
        <>
        <h1>Posts</h1>
        {<div className="list" data-testid="list">
            {posts.map(post => <Card key={post.id} isEmpty={isEmpty} title={post.title} body={post.body} />)}
        </div> }

        </>
    )
}

export default FetchPosts
