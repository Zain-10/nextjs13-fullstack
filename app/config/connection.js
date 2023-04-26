import { MongoClient } from 'mongodb'

const state={
    db:null
}

export function connect(){
    const url = 'mongodb://localhost:27017'
    const dbname = 'nextjs13'

    const client = new MongoClient(url, {monitorCommands: true})

    client.on('commandStarted', started => console.log(started));
    state.db=client.db(dbname)
}

export function get(){
    return state.db
}