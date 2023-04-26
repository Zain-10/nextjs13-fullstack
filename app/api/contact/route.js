import { NextResponse } from 'next/server'
import db from '../../config/connection'
import { MongoClient } from 'mongodb'

export async function POST(req,res) {
    try {
        
        const client = new MongoClient('mongodb://localhost:27017', { monitorCommands: true });
        const body = await req.json();
        await client.db('nextjs13').collection('contacts').insertOne(body)
        console.log(req.body)
        
        return NextResponse.json({
            message:"Message sent successfully"
        },{
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            message:"Server error please try again"
        },{
            status:500
        })
    }
}