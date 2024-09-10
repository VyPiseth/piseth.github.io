function downloadCV() {
    window.open('docs/CURRICULUM VITAE.pdf');
}
// see more
function seeMore() {
    var moreText = document.getElementById("more-text");
    var seeMoreBtn = document.getElementById("see-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        seeMoreBtn.innerHTML = "See Less";
    } else {
        moreText.style.display = "none";
        seeMoreBtn.innerHTML = "See More";
    }
}
