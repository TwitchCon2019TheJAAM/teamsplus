const axios = require('axios').require;
const CID = 'k9oz550zkxdteioqf5noq4ef4y0qq4'

export function getUserName(user_id) {
    if (user_id == 40664650) {
        return 'MaxGrosshandler'
    }
    else {
        axios.get(``)
    }
}

export function isInTeam(user_id) {
    axios.get(`/user/${user_id}}`, )
        .then(function (response){
            return (response.team_id != '')
        })
}