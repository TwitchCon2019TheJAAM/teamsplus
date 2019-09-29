import axios from 'axios'
const CID = 'k9oz550zkxdteioqf5noq4ef4y0qq4'



export function isInTeam(user_id) {
    axios.get(`/user/${user_id}}`, )
        .then(function (response){
            return (response.team_id != '')
        })
}