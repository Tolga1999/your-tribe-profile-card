function readMore(){
    let dots = document.getElementById("dots")
    let more = document.getElementById("more")
    let readMoreButton = document.getElementById("readMoreButton")

    // === also compares data types instead of only the value
    if(dots.style.display === "none"){
        dots.style.display = "inline"
        more.style.display = "none"
    }else{
        dots.style.display = "none"
        // more shows as inline so it can continue on the same line
        more.style.display = "inline"
    }

}



