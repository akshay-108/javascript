// How to check two numbers are approximately equal in JavaScript ? 

/**Approach: To check the numbers are approximately the same or not, first, we have to decide the epsilon value. Epsilon is the maximum difference between two numbers, if the difference of the numbers is less than or equal to epsilon then the numbers are approximately equal to each other. So first we create a function named checkApprox which takes three arguments num1, num2, and epsilon. Now check the absolute difference of num1 and num2 is less than epsilon or not. */

const checkApprox=(num1,num2,epsilon)=>{
    return Math.abs(num1-num2) < epsilon;
}

console.log(checkApprox(10.003,10.001,0.005));