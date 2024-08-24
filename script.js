
let num1 = document.getElementById('firstnum');
let num2 = document.getElementById('secondnum');
let result = document.getElementById('result')
let add = document.getElementById('add');
let diff = document.getElementById('diff');
let prod = document.getElementById('prod');
let divide = document.getElementById('divide');
let mod = document.getElementById('mod');
let reset = document.getElementById('reset');
let calculate = document.getElementById('calculate');
reset.addEventListener('click', function () {
    num1.value = '';
    num2.value = '';
    result.value = '';
});

//if (parseFloat(num1)===NaN||  parseFloat(num2)===NaN) {
// document.getElementById('error').innerText="enter the  number";
//  document.getElementById('error').style.display = 'block';
// } 





add.addEventListener('click', function () {
    firstnum1 = num1.value;
    secondnum2 = num2.value;
    // console.log(firstnum1, secondnum2);
    let sum = parseFloat(firstnum1) + parseFloat(secondnum2);
    function calculation(x) {
        result.value = x;
    }
    calculate.addEventListener('click', function () {
        calculation(sum);
    });       //passing sum as an argument to  calculation function after only the  button calculate is clicked.
});
//console.log(sum);
//document.getElementById('result').value= ("  "+sum);

diff.addEventListener('click', function () {
    firstnum1 = num1.value;
    secondnum2 = num2.value;
    //console.log(firstnum1, secondnum2);
    let difference = parseFloat(firstnum1) - parseFloat(secondnum2);
    function calculation(x) {
        result.value = x;
    }
    calculate.addEventListener('click', function () {
        calculation(difference);
    });
    //console.log(difference);
    //document.getElementById('result').value= ("  "+difference);
});

prod.addEventListener('click', function () {
    firstnum1 = num1.value;
    secondnum2 = num2.value;
    let product = parseFloat(firstnum1) * parseFloat(secondnum2);
    function calculation(x) {
        result.value = x;        //inserting  the result in the input result field in  the html
    }
    calculate.addEventListener('click', function () {
        calculation(product);
    });
    //document.getElementById('result').value= ("  "+product);
});

divide.addEventListener('click', function () {
    firstnum1 = num1.value;
    secondnum2 = num2.value;
    let divv = parseFloat(firstnum1) / parseFloat(secondnum2);
    function calculation(x) {
        result.value = x;
    }
    calculate.addEventListener('click', function () {
        calculation(divv);
    });
});

mod.addEventListener('click', function () {
    firstnum1 = num1.value;
    secondnum2 = num2.value;
    let modular = parseInt(firstnum1) % parseInt(secondnum2);
    function calculation(x) {
        result.value = x;
    }
    calculate.addEventListener('click', function () {
        calculation(modular);
    });

    // document.getElementById('result').value= ("  "+modular);
});


