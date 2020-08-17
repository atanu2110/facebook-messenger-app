import React, { forwardRef } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Message.css';


const Message = forwardRef(({ message, username } , ref) => {
    const isUser = username === message.username ? true : false;
    return (
        <div ref={ref} className={isUser ? 'message_user' : 'message'}>

            <Card className={isUser ? 'message_usercard' : 'message_guestcard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && `${message.username || 'Unknown User'}:`} {message.message}
                    </Typography>

                </CardContent>

            </Card>
        </div>

    )
})

export default Message;