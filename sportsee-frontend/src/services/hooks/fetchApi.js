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
                //console.log("datakey: ", data)
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
