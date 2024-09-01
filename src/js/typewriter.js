
export function typewriterp() {
    const aText = [
        "There are only 10 types of people in the world:", 
        "Those who understand binary, and those who don't"
    ];
    const iSpeed = 100;
    let iIndex = 0;
    let iArrLength = aText[0].length;
    const iScrollAt = 20;

    let iTextPos = 0;
    let sContents = '';
    let iRow;

    function type() {
        sContents = ' ';
        iRow = Math.max(0, iIndex - iScrollAt);
        const destination = document.getElementById("typedtext");

        if (destination) { // Asegúrate de que el elemento existe
            while (iRow < iIndex) {
                sContents += aText[iRow++] + '<br />';
            }

            destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

            if (iTextPos++ === iArrLength) {
                iTextPos = 0;
                iIndex++;
                if (iIndex !== aText.length) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(type, 500);
                }
            } else {
                setTimeout(type, iSpeed);
            }
        } else {
            console.error("Element with ID 'typedtext' not found.");
        }
    }

    type();
}

typewriterp()