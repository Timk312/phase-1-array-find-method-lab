// code your solution here

 const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record){
const found = record.find(res=>res.result==="W")
if (found===undefined){
    return found
}
if (found.result==="W"){
    return found.year
}
}
superbowlWin(record)




