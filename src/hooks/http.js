import { useState, useEffect } from 'react'


export const useHttp = (url, dependencies) => {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(()=> {
        console.log('Sending http request to URL: ' + url);
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then(data => {
            setFetchedData(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, dependencies);

    return [fetchedData];
};

