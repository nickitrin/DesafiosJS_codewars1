function createPhoneNumber(numbers){
  let ddd = "(" + numbers[0] +numbers[1] + numbers[2]+ ")"
  let numero = "" 
  
  for (let digito in numbers){
  if (digito > 2) {
  numero += numbers[digito]}
  };
  
  return ddd + " " + numero.slice(0,3) +"-" + numero.slice(3,10)
}