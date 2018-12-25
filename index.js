const fs=require('fs')
const csv=require('csvtojson')

const csvFilePath='input.csv'

csv().fromFile(csvFilePath).then((json)=>{
	const data = JSON.stringify(json)
	fs.writeFileSync('output.json', data)
})
