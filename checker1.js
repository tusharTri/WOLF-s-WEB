
function fSubmit() {
    var score = 0;
    var correct = [document.getElementById("a4"), document.getElementById("a7"), document.getElementById("a11"), document.getElementById("a14"), document.getElementById("a19"), document.getElementById("a24"), document.getElementById("a25"), document.getElementById("a30"), document.getElementById("a35"), document.getElementById("a38"),];
    for (var i = 0; i <= 9; i++) {
        if (correct[i].checked == true) {
            score++;
        }
    }
    alert("Your total score is : " + score + "\nThe answers are: \nQ1.This device is used to display the output:MONITOR option 4\nQ2.It is a big size printer that allow users to get big size print that cannot be done by basic printers:PLOTTER option 3 \nQ3.This device is used to listen music:HEADPHONE option 3\nQ4.Earliest Known Tool for Computation developed in the period between 2700 and 2300 BCE:ABACUS option 2\nQ5.Who Developed Analytical Engine which is accepted as the first design for a modern computer: CHARLES BABBAGE option 3\nQ6.It was initially commissioned for the use in World War II : ENIAC option 4\nQ7.First Touch Screen Computer was produced by which company:HP option 1\nQ8.It carries out arithmetic and logic operations on the operands:ALU option B\nQ9.It acts as a buffer between the CPU and the main memory:CACHE option 3\nQ10.it holds only those data and instructions on which the computer is currently working:RAM option 2\n ");
var score = 0;
}