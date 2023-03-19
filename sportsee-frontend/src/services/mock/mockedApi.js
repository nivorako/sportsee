import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE
} from "./mockedData"

/**
 * return property of user
 * @param {string} userId user's id
 * @returns {{
 *  id:number, 
 *  userInfos:{firstname: string,
 *              lastName: string},
 *  score: number,
 *  keyData:{calorieCount: number,
 *           proteinCount: number,
 *           carbohydrateCount: number,
 *           lipidCount: number}
 * }} property of user
 */
export const getUserData = (userId) => {   
    const selected = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
    return selected
}

/**
 * 
 * @param {string} userId user's id
 * @returns {{name:number, poids: number, calories: number}[]} user's daily activity of the week
 */
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

/**
 * 
 * @param {string} userId 
 * @returns {{day: string, sessionLength: number}[]} user's daily session of the week
 */
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

 /**
  * 
  * @param {string} userId 
  * @returns {{kind: string, value: number}[]} 
  */
export const getUserPerformance = (userId) => {
  const userPerformance = []
  const initialUserPerformance = [
    { kind: 'Cardio', value:  0 },
    { kind: 'Energie', value: 0 },
    { kind: 'Endurance', value: 0},
    { kind: 'Force', value: 0 },
    { kind: 'Vitesse', value: 0 },
    { kind: 'Intensité', value: 0, }
  ];
  const selected = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId))
  //console.log("selected :", selected)
  for (let item of selected.data){
    userPerformance.push({
        kind: initialUserPerformance[item.kind - 1].kind,
        value: item.value
    })
  }
  return userPerformance
}