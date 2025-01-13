const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    qrText.innerText = " ";
    isEmptyInput();
   

});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

function isEmptyInput(){
    if(qrText.value.length>0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generatet your QR");
    }
}


function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"red",
    })
}


downloadBtn.addEventListener("click",()=>{
    let img = document.querySelector('.qr-body img');
    if(img !==null){
      let imgAtrr = img.attributes('src');
      downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`
        )
    }
})
