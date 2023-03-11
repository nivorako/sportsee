import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE
} from "./mockedData"

export const getUserData = (userId) => {
    let name = ""
    const selected = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
    name = selected.userInfos.firstName
    return name
}

export const getUserActivity = (userId) => {
    const userActivity = []
    const selected = USER_ACTIVITY.find((user) => user.userId === parseInt(userId))
    selected.sessions.map((session, index) => {
        userActivity.push({
            name: index + 1,
            poids: session.kilogram,
            calories: session.calories
        })
        return userActivity
    })
    return userActivity
}



export const getAverageSession = (userId) => {
    const averageSession = [
        {
          day: 'L',
          sessionLength: 0,
        },
        {
          day: 'M',
          sessionLength: 0,
        },
        {
          day: 'M',
          sessionLength: 0,
        },
        {
          day: 'J',
          sessionLength: 0,
        },
        {
          day: 'V',
          sessionLength:0,
        },
        {
          day: 'S',
          sessionLength:0,
        },
        {
          day: 'D',
          sessionLength: 0,
        },
      ]
    const selected = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId))
    for(let index in selected.sessions){
        averageSession[index].sessionLength = selected.sessions[index].sessionLength
    }
    return averageSession
}