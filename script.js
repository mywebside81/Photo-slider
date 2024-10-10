// Saare content (emoji aur images) array mein store kiye gaye hain
const contentArray = [
    '<span class="large-emoji">😁</span><p>Hii</p>',
    '<div><img src="Raj.png1" alt="Raj1"><p>Hello</p></div>',
    '<div><img src="Raj.png2" alt="Raj2"><p>😅</p></div>',
    '<div><img src="Raj.png3" alt="Raj3"><p>10th mein</p></div>',
    '<div><img src="Raj.png4" alt="Raj4"><p>😅</p></div>',
    '<p class="last-text">Or abhi ka pic</p><p class="last-text">☺️</p>', // Last photo ke baad text ko alag class di
    '<p class="end-text">Milte hi dikhata hu<p>😅</p></p>' // Added "End" text
];

let currentIndex = 0;

// Content ko update karne ka function
function updateContent() {
    document.getElementById("content").innerHTML = contentArray[currentIndex];
    document.getElementById("backButton").disabled = currentIndex === 0;
    document.getElementById("nextButton").disabled = currentIndex === contentArray.length - 1;
}

// Next button ka function
function next() {
    if (currentIndex < contentArray.length - 1) {
        currentIndex++;
        updateContent();
    }
}

// Back button ka function
function previous() {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
}

// Pehli baar page load hone par initial content dikhana
window.onload = function() {
    updateContent();
};
