var checkMail = function() {
    var email = document.getElementById("mail").value;
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (expr.test(email)) {
        document.getElementById('mail').style.backgroundColor = 'lightgreen';
    }

    else if(email!== expr){
        document.getElementById('mail').style.backgroundColor = 'pink';
    }
    else if (document.getElementById('mail').value == '') {
        document.getElementById('mail').style.backgroundColor = 'pink';
    }
    else {
        document.getElementById('mail').style.backgroundColor = 'pink';
    }

    
}

var check = function() {
    var strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{5,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("^(?=.{1,4}).*", "g");
    var pwd = document.getElementById("password");

    if ((strongRegex.test(pwd.value))) {
        document.getElementById('pwStrength').innerHTML = 'Strong';
        pwd.style.backgroundColor = 'lightgreen';
    } 
    else if ((mediumRegex.test(pwd.value))) {
        document.getElementById('pwStrength').innerHTML = 'Medium';
        pwd.style.backgroundColor = 'lightorange';
    }
    else if((enoughRegex.test(pwd.value))){
        document.getElementById('pwStrength').innerHTML = 'Weak';
        pwd.style.backgroundColor = 'lightred';
    }
    
    else {
        document.getElementById('pwStrength').innerHTML = '';
        pwd.style.backgroundColor = 'pink';
    }
}