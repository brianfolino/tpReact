import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import Title from '../Title';
import ItemCount from '../ItemCount';

const films = [
    {
        id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scream-6-poster-1674719342.jpeg?resize=480:*", title: "Scream 6"
    },
    {
        id: 2, image: "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg", title: "Lost"
    },
    {
        id: 3, image: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg", title: "Breaking Bad"
    },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    return (
        <>
            <Title greeting='Buenassss' />
            <ItemCount />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;