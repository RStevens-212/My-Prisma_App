import React, { useState } from 'react';
import { Typography, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2'
import SectionContainer from '@/app/components/SectionContainer';
import { useGetMetricsQuery } from '@/api/metrics/queries';
import MetricCard from './MetricCard';

const MetricSection = () => {
    const getMetricsQuery = useGetMetricsQuery();
    const { data: getMetricsQueryData, isLoading: getMetricsQueryIsLoading } = getMetricsQuery;
    const metrics = getMetricsQueryData?.metrics ?? [];

    return (
        <SectionContainer>
            <Grid container spacing={2}>
                {metrics && metrics.map(metric => (
                        <Grid key={metric.id} size={4}>
                            <MetricCard id={metric.id} key={metric.key} name={metric.name} />
                        </Grid>
                ))}
            </Grid>
        </SectionContainer>
    )
}

export default MetricSection