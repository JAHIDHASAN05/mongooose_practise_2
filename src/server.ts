import { app } from "./app";
import config from "./config";

import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
try{
  await mongoose.connect(config.database_url as string);


  app.listen(config.port, ()=>{
    console.log(`server is running at 5000 ${config.port} `)
})
}catch(err){
  console.log(err)
}
}