//Restart button
var r = document.querySelector('#b');

//Grab all squares
var sqs = document.querySelectorAll("td");

//Clear board function
function clearBoard() {
    for(var i = 0; i < sqs.length; i++){
        sqs[i].textContent = '';
    }
}
r.addEventListener('click',clearBoard)



//Create a function that will check the square maker
function maker() {
    if(this.textContent === ''){
        this.textContent = 'X';
    } else if(this.textContent === 'X') {
            this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

// Use a for loop to add event listeners to all the squares
for (var i = 0; i < sqs.length;i++) {
    sqs[i].addEventListener('click', maker);
}