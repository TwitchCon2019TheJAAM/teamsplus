import axios from 'axios'
import Authentication from '../../util/Authentication/Authentication'
const CID = 'k9oz550zkxdteioqf5noq4ef4y0qq4'

export async function getUserName(user_id) {
    if (user_id == 40664659) {
        return 'MaxGrosshandler'
    }
    else {
       const data = await axios.get('https://api.twitch.tv/helix/users?id='+user_id, {headers: {'Client-ID': CID}})
        return data;

    }
}

export function isInTeam(user_id) {
    return getTeamName(user_id) != '' 
}

// Team Management
export function getTeamName(user_id) {
    axios.get(`/user/${user_id}`)
        .then(function (response) {
            return response.team_id
        })
}

export function createTeam(user_id, teamName) {
    axios.get(`/user/${user_id}`, {
        team_id: teamName
        })
        .then(function (response) {
            return response
        })
}

// Viewer Panel
export function getRole(user_id) {
    axios.get(`/team/${getTeamName(getChannelId())}`, {
        user: user_id
        })
        .then(function (response) {
            return response.role
        })
}