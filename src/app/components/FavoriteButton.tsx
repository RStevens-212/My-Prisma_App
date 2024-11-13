'use client'
import { Star } from "@mui/icons-material";
import { Button } from "@mui/material"

const FavoriteButton = ({id}: {id: string}) => {

    return (
        <Button onClick={() => console.log('favorites placeholder')} >
            <Star />
        </Button>
    )

};

export default FavoriteButton