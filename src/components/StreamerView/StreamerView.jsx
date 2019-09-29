import React from 'react'

import isInTeam from '../../util/Services/Services'

import TeamViewersView from 'TeamViewersView'
import CreateJoinView from 'CreateJoinView'

class StreamerView extends React.Component {

    render() {
        return (
            isInTeam() ? <TeamViewersView/> : <CreateJoinView/> 
        );
    }
}

export default StreamerView