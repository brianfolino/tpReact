import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import Title from '../Title';
import ItemCount from '../ItemCount';
import { useParams } from 'react-router-dom';

const films = [
    {
        id: 1, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scream-6-poster-1674719342.jpeg?resize=480:*", category: 'films', title: "Scream 6"
    },
    {
        id: 2, image: "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg", category: 'series', title: "Lost"
    },
    {
        id: 3, image: "https://m.media-amazon.com/images/M/MV5BYTU3NWI5OGMtZmZhNy00MjVmLTk1YzAtZjA3ZDA3NzcyNDUxXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg", category: 'series', title: "Breaking Bad"
    },
    {
        id: 4, image: "https://terrores.files.wordpress.com/2012/03/rec-comic-portada-historias-ineditas-balaguero-plaza.jpg?w=550", category: 'films', title: "Rec"
    },
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(film => film.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }

    }, [categoriaId])

    return (
        <>
            <Title greeting='Buenassss' />
            <ItemCount />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;