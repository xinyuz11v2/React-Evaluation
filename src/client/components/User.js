import React from 'react';

class User extends React.Component {
    state = {
        userInfos: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/users")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({userInfos: result});
              console.log(result);
            }
        )
    };

    render() { 
        return ( 
            <div>
                {this.state.userInfos.map((userInfo) => (
                    <div>
                        <h5 >{userInfo.username}</h5>
                        <h5 >{userInfo.age}</h5>
                    </div>
          ))}     
            </div>
         );
    }
}
 
export default User;