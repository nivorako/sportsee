import {useEffect, useState} from "react";


const baseUrl = "http://localhost:3000/user";

/**
 * allows us to get url according to id and service
 * @param {string} id 
 * @param {string} service 
 * @returns {string} url associated to the service and the id
 */

function getEndpointByService(id, service){
    switch(service){
        case "firstName":
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
        case "key-data":
            return `${baseUrl}/${id}`;
            break;
        case "score": 
            return `${baseUrl}/${id}`;
    }
}

/**
 * allows to get axtractData according to data and service
 * @param {object} data
 * @param {string} service 
 * @returns {string|Array|object}
 */
function extractDataByService(data, service){
    if(data){
        switch(service){
            case "firstName":
              return getFirstName(data);
                break;
            case "key-data":
                return getKeyData(data);
                break;
            case "average-sessions":
                return getAverageSessions(data);
                break;
            case "activity":
                return getActivity(data);
                break;
            case "performance":
                return getUserPerformance(data);   
                break;
            case "score": 
                return getUserScore(data);
        }
    }
}

/**
 * allows to get score
 * @param {object} data 
 * @returns {number} score
 */
function getUserScore(data){
    return data.data.score;
}

/**
 * allows to get the user's performance
 * @param {object} data 
 * @returns {Array<object>} data for radar Chart
 */

function getUserPerformance(data){
    let perf = []
    const initialPerf = [
        { kind: "Cardio", value: 0 },
        { kind: "Energie", value: 0 },
        { kind: "Endurance", value: 0 },
        { kind: "Force", value: 0 },
        { kind: "Vitesse", value: 0 },
        { kind: "Intensité", value: 0 }
    ]
    for (let item of data.data.data) {
        perf.push({
            kind: initialPerf[item.kind - 1].kind,
            value: item.value,
        });
    }
    return perf;
}

/**
 * allows to get user's activity of the week
 * @param {object} data 
 * @returns {Array<object>} data for bar Chart
 */
function getActivity(data){
    const activities = []
    for(let item of data.data.sessions){
        const [yyyy, mm, dd] = item.day.split("-");
        activities.push({
            name: dd.slice(1),
            poids: item.kilogram,
            calories: item.calories
        })
    }

    return activities;
}

/**
 * get the duration of each daily session
 * @param {object} data 
 * @returns {Array<object>} data for line Chart
 */

function getAverageSessions(data){
    let averageSessions = [
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
    for (let index in averageSessions){
        averageSessions[index].sessionLength = data.data.sessions[index].sessionLength;
    }  
    return averageSessions;
}

/**
 * 
 * @param {object} data 
 * @returns {string} firstname
 */
function getFirstName(data){
    return data.data.userInfos.firstName;
}

/**
 * 
 * @param {object} data 
 * @returns {object} data for aside elements
 */
function getKeyData(data){
    return data.data.keyData;
}

/**
 * 
 * @param {string} id 
 * @param {string} service 
 * @returns {string|number|object|Array} data pour les charts
 */
export function FetchUserData(id, service) { 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const endpoint = getEndpointByService(id, service);

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
