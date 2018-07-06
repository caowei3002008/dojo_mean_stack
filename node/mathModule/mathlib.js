module.exports = function (){
  return {
    add: function(num1, num2) { 
         var total = num1 + num2;
         return total;
    },
    multiply: function(num1, num2) {
         // add code here 
         var total = num1 * num2;
         return total;
    },
    square: function(num) {
         // add code here 
         var total = Math.pow(num,2);
         return total;
    },
    random: function(num1, num2) {
         // add code here
         if(num1<=num2) var randomNum = Math.random(num1, num2);
         else var randomNum = Math.random(num2,num1);

         return randomNum;

    }
  }
};