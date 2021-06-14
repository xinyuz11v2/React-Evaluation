import React from 'react';

class User extends React.Component {
    state

    componentDidMount() {
        fetch("http://localhost:3000/users")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({result});
              console.log(result);
            }
        )
    };

    render() { 
        return ( <p>this is test</p> );
    }
}
 
export default User;