const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(record){
  let year = record.find(function(res){
    return res.result === 'W'
  })
  
  return year = year ? year.year : undefined
}
