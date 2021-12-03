// function check_number_list(num1,num2){
//     for(var i=0;i<num1.length;i++)
//     if(num1%2==0 && num2%2==0){
//         console.log("both are even")
//         console.log("both are not odd")
//     }
//     else{
//         console.log("both are odd")
//         console.log("both are not even")
//     }
//     console.log(num1[i],num2[i])
// }
// check_number_list( [2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])



function check_numbers(num1,num2){
   if(num1%2 ===0 && num2%2===0){
       console.log("Both are Even");
       console.log("-------------");
   }
   else{
       console.log("Both are not Even");
       console.log("-------------");
   }
}
 
function check_numbers_list(list1,list2){
   for(var i=0;i<6;i++){
       check_numbers(list1[i],list2[i]);
   }
}
 
check_numbers_list( [2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87]);
