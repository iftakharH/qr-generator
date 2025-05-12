const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
            generateQRCode();
        });

        qrInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                generateQRCode();
            }
        });

        function generateQRCode() {
    let qrValue = qrInput.value.trim();
    if (!qrValue) {
        wrapper.classList.remove("active");
        qrImg.src = "";
        generateBtn.innerText = "Generate QR Code";
        preValue = "";
        return;
    }
    if (preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.onload = () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    };
    qrImg.onerror = () => {
        generateBtn.innerText = "Generate QR Code";
        //alert("Failed to generate QR Code. Please check the URL and try again.");
        wrapper.classList.remove("active");
        qrImg.src = "";
    };
}


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
        qrImg.src = "";
        generateBtn.innerText = "Generate QR Code";
    }
});