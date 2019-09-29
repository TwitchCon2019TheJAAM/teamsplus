import React from 'react'

class AudienceView extends React.Component {
    //These are fake variables for the time being while the backend is being set up

    render() {

        return(
            <div className='AudienceV'>
            <h1>Hey, Bob!</h1>
            <h2>Your current level in this channnel: Swag</h2>
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