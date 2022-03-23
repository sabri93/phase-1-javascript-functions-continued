// code your solution here
 
 function saturdayFun(string = "roller-skate"){
      return `This Saturday, I want to ${string}!`
     }
     
     
     
  function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`
}
   

  function wrapAdjective( string = "*"){
     
     return  function(x= "special"){
           return `You are ${string}${x}${string}!`
       }

    }
 
    const encouragingPromptFunction = wrapAdjective(string, x)

 
 
    
