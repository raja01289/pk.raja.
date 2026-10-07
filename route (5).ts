import {NextResponse} from 'next/server'; import {prisma} from '../../../lib/prisma';
export async function GET(){try{return NextResponse.json({ok:true,products:await prisma.product.findMany({orderBy:{createdAt:'desc'}})})}catch{return NextResponse.json({ok:false,products:[]})}}
