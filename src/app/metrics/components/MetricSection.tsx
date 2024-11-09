import React, { useState } from 'react';
import { Typography, Toolbar } from '@mui/material';
import SectionContainer from '@/app/components/SectionContainer';
import { useGetMetricsQuery } from '@/app/api/metrics/queries';

const MetricSection = () => {
    const getMetricsQuery = useGetMetricsQuery();
    const { data: getMetricsQueryData, isLoading: getMetricsQueryIsLoading } = getMetricsQuery;
    const metrics = getMetricsQueryData?.metrics ?? [];
    console.log(metrics);

    return (
        <div>MetricSection</div>
    )
}

export default MetricSection