import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

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
            <Table className={this.table}>
                <TableHead>
                    <TableCell><b>User Name</b></TableCell>
                    <TableCell align="right"><b>User Age</b></TableCell>
                </TableHead>
                {this.state.userInfos.map((userInfo) => (
                    <TableRow>
                        <TableCell>{userInfo.username}</TableCell>
                        <TableCell align="right">{userInfo.age}</TableCell>
                    </TableRow>
                    ))}
            </Table>      
         );
    }
}
 
export default User;