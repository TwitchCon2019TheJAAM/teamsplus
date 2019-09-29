 import React from 'react'
import {getUserName, isInTeam} from '../../util/Services/Services'
import axios from 'axios'
 //import getRole from "area/place/thing"
//import getTeamList from "area/place/thing"
class AudienceView extends React.Component {
    //These are fake variables for the time being while the backend is being set up
    constructor(props){
        super(props);
        this.state = {
            name: 'hi'
        }
    }


    render() {
        // axios.get('https://api.twitch.tv/helix/users?id='+user_id, {headers: {'Client-ID': CID}})
        console.log(this.props.userID)
        getUserName(this.props.userID).then(function(response) {
            console.log("hi there ", response.data.data[0].display_name)
            this.setState({
                name: response.data.data[0].display_name
            })
            console.log(this.state)
        })
        return(
            <div className='AudienceV'>
            <h1>Hi, {this.state.name}! </h1>
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