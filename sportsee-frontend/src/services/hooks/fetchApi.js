import {useEffect, useState} from "react";

export default function useFetch(id) { 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('An error has occured : ', err);
                setError(true);
                setIsLoading(false);
            });
           
    }, [id]);
    return {data, isLoading, error};
}