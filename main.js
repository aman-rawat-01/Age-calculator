function age(){
   
    //get DOB from user
    var dob = new Date(document.getElementById("dob").value);
    
    //calculate month difference from current date in time
    var monthDiff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    var ageDate = new Date(monthDiff); 
    
    //extract year from date    
    var year = ageDate.getFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + age + ' years old.');
    h1.setAttribute('id', 'age');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);  

}

function reset(){
    document.getElementById('age').remove();
}
