//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();
//Once you do that, invoke inner.

  //Code Here
inner();


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

callF(435-215-9248);

callFriend();

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/
var makeCounter = function(){
  var number = 0;
  function count(number){
    number +=1;
    return number;
  }
}

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

  //Code Here
var rec = function (funct{
  var N = 1;
  while(N < 1){
    N += 1;
    return N;
  }
  return func();
};


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

var fnCounter = function (funct, N){
  for(i=0; i < N; i++){
    func();
  }
  return 'STOP';
}

//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
This function will invoke a for loop starting at 1 and running until it hits 5. It will also invoke another function that prints the current number of the variable times 1000 to give the user a number of milliseconds.

  Now, run the function in your console and note what happpens.

counter();

  Was your answer right or wrong?

    //Answer Here

wrong
  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

   var counter = function(){
    for (var i=1000; i<=5000; i=+1000) {
      setTimeout( function timer(){
          console.log( i/1000 );
      }, i);
    }
  };



//Next Problem

var funcArray = new Array();
for (var i = 0; i <= 5; i++) {
  funcArray[i] = new Array();
}

funcArray[0][0] = function (){
  console.log(funcArray[i])
};


/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


