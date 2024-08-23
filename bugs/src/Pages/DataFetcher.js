import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const data = await res.json()
            setData(data)
        }
        fetchData()
    }, []); // Missing dependency

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataFetcher;