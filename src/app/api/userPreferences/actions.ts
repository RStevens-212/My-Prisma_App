'use server';

import { prisma } from "@/prisma/seed";

export async function getUserPreferences(){

    const preferences = await prisma.userPreferences.findMany();

    return {preferences}
}