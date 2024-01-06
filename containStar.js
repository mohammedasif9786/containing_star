let containStar  = (input)=>{

  let trueFalse = false

  outer:  for(i of input){
      for(j of i){

              if(j=="*"){
                trueFalse = true
                console.log(trueFalse)
                break outer
                }
           
       
    }
  
  }

}
containStar(["##*#"])
