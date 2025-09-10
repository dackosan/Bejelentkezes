document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("loginButton").addEventListener("click", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let gmail = document.getElementById("loginGmail").value;
        let pass = document.getElementById("loginPassword").value;
        
        let validPassword = pass.length >= 8 && /\d/.test(pass);

        if(!emailPattern.test(gmail) || !validPassword){
            alert("Az Email és/vagy a Jelszó helytelen!");
        }
        else{
            alert("Sikeres bejelentkezés!");
        }
    });

    document.getElementById("registButton").addEventListener("click", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let gmail = document.getElementById("registGmail").value;
        let pass = document.getElementById("registPassword").value;
        let passAgain = document.getElementById("registPasswordAgain").value;
        
        let validPassword = pass.length >= 8 && /\d/.test(pass);
        let validPasswordAgain = passAgain.length >= 8 && /\d/.test(passAgain);

        if(!emailPattern.test(gmail) || !validPassword || !validPasswordAgain){
            alert("Az Email és/vagy a Jelszó nem felel meg a követelménynek!");
        }
        else if(pass != passAgain){
            alert("A két Jelszó nem egyezik meg!");
        }
        else{
            alert("Sikeres regisztráció!");
        }
    });
});