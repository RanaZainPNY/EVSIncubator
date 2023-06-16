document.querySelectorAll(".img-thumbnail").forEach(function (thumbnail) {
    thumbnail.addEventListener("mouseenter", function () {
        const targetId = this.getAttribute("data-target");
        document.getElementById(targetId).setAttribute("src", this.getAttribute("src"));
    })
})



//find given value is what percent of total 
//e.g value 45 and total is 50 then result is 90 
function getPercentage(value, total) {
    let per = value / total * 100;
    return per;
}

//find grade based on given marks
function findGrade(percentage) {
    let g = "F";
    if (percentage >= 90) {
        g = "A*";
    }
    if (percentage >= 80 && percentage < 90) {
        g = "A";
    }
    if (percentage >= 70 && percentage < 80) {
        g = "B";
    }
    if (percentage >= 60 && percentage < 70) {
        g = "C";
    }
    if (percentage >= 50 && percentage < 60) {
        g = "D";
    }
    return g;
}
