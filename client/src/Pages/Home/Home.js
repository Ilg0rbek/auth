import React from 'react'
import Card from '../../components/Card/Card'
import { posts } from '../../data'
import './Home.css'

const Home = () => {

return (
    <div className="home">
        {
            posts.map(val => (
                <Card key={val.id} val={val} />
            ))
        }
    </div>
)
}

export default Home
