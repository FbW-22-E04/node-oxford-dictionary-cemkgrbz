import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const options = {
    headers: {

        "app_id": process.env.APP_ID,
        "app_key": process.env.APP_KEY

    }
}

const response = await axios.get("https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/" + process.argv[2], options)

// console.log("Answer:", response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions)

console.log("Results for", process.argv[2])
response.data.results[0].lexicalEntries[0].entries[0].senses.forEach((item, idx) => { 
    console.log(idx+1,":", item.definitions[0])
    
});