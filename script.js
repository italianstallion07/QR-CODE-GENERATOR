const getQr = ()=>{
    let imgURL = ''
    const inputEle = document.querySelector('#input');
    const text = inputEle.value;
    sendAPIreq(text)
        .then(response => {
            imgURL = response.url;
            const img = document.querySelector('img');
            img.setAttribute('src',imgURL)
        })
}

const sendAPIreq = (text)=>{
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`
    return fetch(url)
}

// Event listener for the input field to add todo on pressing enter
let inputEle = document.querySelector("input");
inputEle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.keycode == 13) {
    getQr();
  }
});
