'use client';
import React from 'react'
import { Stack, Accordion, AccordionSummary, Typography, CardContent, Card } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import MetricSection from './components/MetricSection';

export default function MetricsPage() {

  return (
    <Stack spacing={2} width='100%'>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />} id='Your Metrics'><Typography variant='h5'>Your Metrics</Typography></AccordionSummary>
        <MetricSection />
      </Accordion>
    </Stack>
  );
}
