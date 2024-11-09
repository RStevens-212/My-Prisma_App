'use server';

import { prisma } from "@/prisma/seed";

export async function getFavorites(){

    const favorites = await prisma.favorite.findMany();

    return {favorites}
}