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