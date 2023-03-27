
import {useEffect, useState} from "react";



export default function useFetch(id) { 
    const initialData = {
        id: 0,
        userInfos: {
            firstName: "",
            lastName: "",
            age: 0,
        },
        score: 0,
        keyData: {
            calorieCount: 0,
            proteinCount: 0,
            carbohydrateCount: 0,
            lipidCount: 0,
        },
    };
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        fetch(`http://localhost:3000/user/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsLoading(true);
            })
            .catch((err) => {
                console.error('An error has occured : ', err);
                setError(true);
                setIsLoading(false);
            });
           
    }, [id]);
    return {data, isLoading, error};
}