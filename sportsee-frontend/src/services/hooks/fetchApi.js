import {useEffect, useState} from "react";


const baseUrl = "http://localhost:3000/user";

function getEndpointByService(id, service){
    switch(service){
        case "":
            return `${baseUrl}/${id}`;
            break;
        case "activity":
            return `${baseUrl}/${id}/activity`;
            break;
        case "average-sessions":
            return `${baseUrl}/${id}/average-sessions`;
            break;
        case "performance":
            return `${baseUrl}/${id}/performance`;
            break;
    }
}

function extractDataByService(data, service){
    if(data){
        switch(service){
            case "firstName":
              return getFirstName(data);
                break;
            case "key-data":
                return getKeyData(data);
                break;
        }
    }
}

function getFirstName(data){
    return data.data.userInfos.firstName;
}

function getKeyData(data){
    return data.data.keyData;
}

export function getInitialAverageSession(){
const averageSessions = [
    {
        day: "L",
        sessionLength: 0,
    },
    {
        day: "M",
        sessionLength: 0,
    },
    {
        day: "M",
        sessionLength: 0,
    },
    {
        day: "J",
        sessionLength: 0,
    },
    {
        day: "V",
        sessionLength: 0,
    },
    {
        day: "S",
        sessionLength: 0,
    },
    {
        day: "D",
        sessionLength: 0,
    },
    ];

    return averageSessions;
}


export function FetchUserData(id, service) { 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const endpoint = getEndpointByService(id, "");

    useEffect(()=> {
        setIsLoading(true);
        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                const extracted = extractDataByService(data, service);
                setData(extracted);
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
