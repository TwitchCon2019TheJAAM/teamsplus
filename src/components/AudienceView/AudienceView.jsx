 import React from 'react'
import {getUserName, isInTeam} from '../../util/Services/Services'
 //import getRole from "area/place/thing"
//import getTeamList from "area/place/thing"
class AudienceView extends React.Component {
    //These are fake variables for the time being while the backend is being set up


    render() {
        console.log(getUserName(this.props.userID))

        return(
            <div className='AudienceV'>
            <h1>Hi, {getUserName(this.props.userID)}! </h1>
            <h2>Your current level in this channnel: Swag</h2>
            {/* <h1>Your current level in this channel: {getRole(this.props.userID)}</h1> */}
            <h3>Streamer List:</h3>
            {
                this.props.fakeList.map(
                    (value) => <div>{value}</div>
                )
            }
                
            </div>
        );
    }
}
export default AudienceView;