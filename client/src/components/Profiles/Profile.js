import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { DeleteOutlined } from '@material-ui/icons';
import { CardHeader, IconButton } from '@material-ui/core';
import {useDispatch} from 'react-redux' ;
import { delete_course } from '../../actions/courseAction';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';
import {useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {
    height: 600,
    width: 600,
margintop:300,
  },
  media: {
    height: 140,
  },
});

export default function ProfileCArd() {
  const classes = useStyles();
  const user = useSelector(state => state.authReducer.user);
  

  return (
      
   
     <div>
         <form className={classes.root} noValidate autoComplete="off" style={{textAlign:'center'}}>
     <TextField required label="firstname" name="firstname" value={user.firstname}  variant="contained" /><br/>
     <TextField name="lastname" va lue={user.lastname}  variant="contained" /><br/>
     <TextField name="email" value={user.email}  variant="contained" /><br/>
     <TextField name="adress" value={user.adress}  variant="contained" /><br/>
     <TextField name="tel" value={user.tel}  variant="contained" /><br/>
</form>
        </div>
        
/*     </Card>
 */ 
 );
}


