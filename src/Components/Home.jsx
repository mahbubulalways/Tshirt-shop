import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
            <h1>home page {data.length}</h1>
        </div>
    );
};

export default Home;