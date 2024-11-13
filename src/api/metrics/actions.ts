'use server';

import { prisma } from "@/prisma/seed";

export async function getMetrics(queryParams: any){

    const metrics = await prisma.metric.findMany(queryParams);

    return {metrics}
}