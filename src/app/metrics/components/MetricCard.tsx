import React from 'react'
import { Card, CardHeader, CardActionArea, CardActions } from '@mui/material'

interface MetricProps {
    id: string;
    name: string;
    key: string;
}

export default function MetricCard({id, name}: MetricProps) {

  return (
    <Card key={id}>
        <CardHeader title={name} />
    </Card>
  )
}
