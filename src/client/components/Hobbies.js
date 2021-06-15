import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import '../index.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

class Hobbies extends React.Component {
    state = { 
        hobbies: [],
        currHobby: "Hobby",
        ageCount: []
     }

    componentDidMount() {
        fetch("http://localhost:3000/hobbies")
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({hobbies: result});
              console.log(result);
            }
        )
    };

    handleChange(){
        this.setState({hobbies: value});
    }

    render() { 
        return ( 
            <div>
                
                <FormControl className={this.formControl}>
                    <InputLabel>Hobby</InputLabel>
                        <select>
                            {this.state.hobbies.map((hobby) => (
                                <option value={hobby}>{hobby}</option>
                            ))}
                        </select>
                    {/* {this.state.hobbies.map((hobby => {
                        <Select labelId='select-demo' id='hobby-selector' value={this.state.currHobby} onChange={this.handlerChange}>
                            <MenuItem value={hobby}>{hobby}</MenuItem>
                        </Select>
                    }))} */}
                </FormControl>
            </div>
         );
    }
}
 
export default Hobbies;