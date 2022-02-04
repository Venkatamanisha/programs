function myfunc(){
    var t1,t2,t3,t4,t5,t6,t7,t8,t9;
   t1= document.getElementById("t1").value;
   t2= document.getElementById("t2").value;
   t3= document.getElementById("t3").value;
   t4= document.getElementById("t4").value;
   t5= document.getElementById("t5").value;
   t6= document.getElementById("t6").value;
   t7= document.getElementById("t7").value;
   t8= document.getElementById("t8").value;
   t9= document.getElementById("t9").value;
   if ((t1 == 'x' || t1 == 'X') && (t2 == 'x' ||
        t2 == 'X') && (t3 == 'x' || t3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        window.alert('Player X won');
    }
    else if ((t1 == 'x' || t1 == 'X') && (t5 == 'x' ||
        t5 == 'X') && (t9 == 'x' || t9== 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t7").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t1 == 'x' || t1 == 'X') && (t4 == 'x' ||
        t4 == 'X') && (t7 == 'x' || t7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t3 == 'x' || t3 == 'X') && (t5== 'x' ||
        t5== 'X') && (t7 == 'x' || t7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t3 == 'x' || t3 == 'X') && (t6 == 'x' ||
        t6 == 'X') && (t9 == 'x' || t9== 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t7== 'x' || t7 == 'X') && (t8 == 'x' ||
        t8 == 'X') && (t9 == 'x' || t9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t1").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t4 == 'x' || t4 == 'X') && (t5 == 'x' ||
        t5 == 'X') && (t6 == 'x' || t6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((t2 == 'x' || t2 == 'X') && (t5 == 'x' ||
        t5 == 'X') && (t8 == 'x' || t8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player X won');
    }
   else if ((t1 == 'o' || t1 == 'O') && (t2 == 'o' ||
        t2 == 'O') && (t3 == 'o' || t3 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
        window.alert('Player O won');
    }
    else if ((t1 == 'o' || t1 == 'O') && (t5 == 'o' ||
        t5 == 'O') && (t9 == 'o' || t9== 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t7").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t1 == 'o' || t1 == 'O') && (t4 == 'o' ||
        t4 == 'O') && (t7 == 'o' || t7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t3 == 'o' || t3 == 'O') && (t5== 'o' ||
    t5== 'O') && (t7 == 'o' || t7 == 'O')) {
    document.getElementById('print').innerHTML = "Player O won";
    document.getElementById("t1").disabled = true;
    document.getElementById("t2").disabled = true;
    document.getElementById("t4").disabled = true;
    document.getElementById("t6").disabled = true;
    document.getElementById("t8").disabled = true;
    document.getElementById("t9").disabled = true;

    window.alert('Player O won');
}
else if ((t3 == 'o' || t3 == 'O') && (t6 == 'o' ||
        t6 == 'O') && (t9 == 'o' || t9== 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t7== 'o' || t7 == 'O') && (t8 == 'o' ||
        t8 == 'O') && (t9 == 'o' || t9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t5").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t1").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t4 == 'o' || t4 == 'O') && (t5 == 'o' ||
        t5 == 'O') && (t6 == 'o' || t6 == 'O')) {
        document.getElementById('print')
            .innerHTML = "Player O won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t2").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t8").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t2 == 'o' || t2 == 'O') && (t5 == 'o' ||
        t5 == 'O') && (t8 == 'o' || t8 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("t1").disabled = true;
        document.getElementById("t3").disabled = true;
        document.getElementById("t7").disabled = true;
        document.getElementById("t6").disabled = true;
        document.getElementById("t4").disabled = true;
        document.getElementById("t9").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((t1 == 'X' || t1 == '0') && (t2 == 'X'
        || t2 == '0') && (t3 == 'X' || t3 == '0') &&
        (t4 == 'X' || t4 == '0') && (t5 == 'X' ||
        t5 == '0') && (t6 == 'X' || t6 == '0') &&
        (t7 == 'X' || t7 == '0') && (t8 == 'X' ||
        t8 == '0') && (t9 == 'X' || t9 == '0')) {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
 
        
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player O Turn";
        }
    }
}
function mytictac2() {
    location.reload();
    document.getElementById('t1').value = '';
    document.getElementById("t2").value = '';
    document.getElementById("t3").value = '';
    document.getElementById("t4").value = '';
    document.getElementById("t5").value = '';
    document.getElementById("t6").value = '';
    document.getElementById("t7").value = '';
    document.getElementById("t8").value = '';
    document.getElementById("t9").value = '';
 
}
flag = 1;
function mytictac3() {
    if (flag == 1) {
        document.getElementById("t1").value = "X";
        document.getElementById("t1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t1").value = "0";
        document.getElementById("t1").disabled = true;
        flag = 1;
    }
}

function mytictac4() {
    if (flag == 1) {
        document.getElementById("t2").value = "X";
        document.getElementById("t2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t2").value = "0";
        document.getElementById("t2").disabled = true;
        flag = 1;
    }
}

function mytictac5() {
    if (flag == 1) {
        document.getElementById("t3").value = "X";
        document.getElementById("t3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t3").value = "0";
        document.getElementById("t3").disabled = true;
        flag = 1;
    }
}

function mytictac6() {
    if (flag == 1) {
        document.getElementById("t4").value = "X";
        document.getElementById("t4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t4").value = "0";
        document.getElementById("t4").disabled = true;
        flag = 1;
    }
}

function mytictac7() {
    if (flag == 1) {
        document.getElementById("t5").value = "X";
        document.getElementById("t5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t5").value = "0";
        document.getElementById("t5").disabled = true;
        flag = 1;
    }
}

function mytictac8() {
    if (flag == 1) {
        document.getElementById("t6").value = "X";
        document.getElementById("t6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t6").value = "0";
        document.getElementById("t6").disabled = true;
        flag = 1;
    }
}

function mytictac9() {
    if (flag == 1) {
        document.getElementById("t7").value = "X";
        document.getElementById("t7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t7").value = "0";
        document.getElementById("t7").disabled = true;
        flag = 1;
    }
}

function mytictac10() {
    if (flag == 1) {
        document.getElementById("t8").value = "X";
        document.getElementById("t8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t8").value = "0";
        document.getElementById("t8").disabled = true;
        flag = 1;
    }
}
function mytictac11() {
    if (flag == 1) {
        document.getElementById("t9").value = "X";
        document.getElementById("t9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("t9").value = "0";
        document.getElementById("t9").disabled = true;
        flag = 1;
    }
}