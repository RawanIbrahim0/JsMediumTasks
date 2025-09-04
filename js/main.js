// 1  //
function smile(input) {
    let result = input.replaceAll(")", "(");
    return result;
  }
  
  let input = ":) :) :) All smiles here :)";

  let output1 = smile(input);
  

  console.log("\n"+output1);

  // 2  //
  function hidenCardNumber(number) {
    let lastFour = number.slice(-4);
  

    let hidden = "*".repeat(12);
  
    return hidden + lastFour;
  }
  
  let number = "1234567890123456";
  let output2 = hidenCardNumber(number);
  
  console.log("\n-----------------------------------------------------\n");

  console.log(output2);

