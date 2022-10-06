let numFirst = '';
let numSecond = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '*', '/']

const out = document.querySelector(".calc-screen p");

document.getElementById('clear-btn').onclick = (event) => {
    location.reload();
}

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {

        if(numSecond === '' && sign === '') {

            numFirst += key;
            out.textContent = numFirst;
        } else if (numFirst !== '' && numSecond !== '' && finish) {

            numSecond = key;
            out.textContent = numSecond;
            finish = false;
        } else {

            numSecond += key;
            out.textContent = numSecond;
        }
    }

    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    if (key === '=' && numFirst !== '' && numSecond !== '' && sign !== '') {
        
        var data = JSON.stringify({
            num1: numFirst,
            num2: numSecond,
            s: sign
        });
            
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/side", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
            if (xhr.status == 200) {

                out.textContent = xhr.responseText;
                numFirst = out.textContent;
                if (out.textContent == 'null') {
                    out.textContent = 'error';
                    setTimeout(function() {
                        location.reload();
                    }, 1500);
                }
            }else {        
                
                console.log("Server response: ", xhr.statusText);
            }
        }

        xhr.send(data);
        finish = true;
    } else if (key === '=' && (numFirst === '' || numSecond === '' || sign === '')) {

        out.textContent = 'again';
        setTimeout(function() {
            location.reload();
        }, 1500);
    }
}