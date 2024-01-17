import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Post} from "../service/api/apiGet";

interface PostProps {
    myPost: Post;
}

const CardItem: React.FC<PostProps> = ({myPost}) => {
    return (
        <>
            <Card key={myPost.id} className='mb-5'>
                <CardContent>
                    <Typography
                        sx={{fontSize: 14}}
                        color="text.secondary"
                        gutterBottom
                    >
                        {myPost.article}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {myPost.title}
                    </Typography>
                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        {myPost.createDate}
                    </Typography>
                    <Typography variant="body2">
                        {myPost.summary}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CardItem;