'use server';

import { prisma } from "@/prisma/seed";

export async function getFavorites(queryParams: any){

    const favorites = await prisma.favorite.findMany(queryParams);

    return {favorites}
}