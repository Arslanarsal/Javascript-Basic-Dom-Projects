const button = document.querySelectorAll(".buttons");
button.forEach(function (e) {
    e.addEventListener('click', function (a) {

        if (a.target.id === 'yellow') {
            document.body.style.backgroundColor = "yellow";
        }
        if (a.target.id === 'red') {
            document.body.style.backgroundColor = "red";
        }
        if (a.target.id === 'pink') {
            document.body.style.backgroundColor = "pink";
        }
        if (a.target.id === 'gray') {
            document.body.style.backgroundColor = "gray";
        }
    })
})
