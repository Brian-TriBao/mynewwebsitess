document.getElementById("numerologyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const birthdate = document.getElementById("birthdate").value;

    const numbers = birthdate.split('-').join('').split('');
    let sum = numbers.reduce((acc, n) => acc + parseInt(n), 0);

    while (sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    localStorage.setItem("lifePath", sum);
    window.location.href = "result.html";
});


