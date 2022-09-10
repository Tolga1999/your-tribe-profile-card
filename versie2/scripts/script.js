function readMore(){
    let more1 = document.getElementById("more1")
    let more2 = document.getElementById("more2")
    let more3 = document.getElementById("more3")
    let mainImage1 = document.getElementById("mainImage1")
    let mainImage2 = document.getElementById("mainImage2")
    let mainImage3 = document.getElementById("mainImage3")
    let mainH1 = document.getElementById("mainH1")
    let secondH1 = document.getElementById("secondH1")
    let thirdH1 = document.getElementById("thirdH1")
    let readMoreButton = document.getElementById("readMoreButton");

    // === also compares data types instead of only the value
    if(more1.style.display !== "none"){
        more1.style.display = "none"
        mainImage1.style.display = "none"
        more2.style.display = "inline"
        mainImage2.style.display = "inline"
        mainH1.style.display = "none"
        secondH1.style.display = "inline"
        readMoreButton.innerHTML = "2"
    }else if(more2.style.display === "inline"){
        // more shows as inline so it can continue on the same line
        more2.style.display = "none"
        more3.style.display = "inline"
        mainImage2.style.display = "none"
        mainImage3.style.display = "inline"
        secondH1.style.display = "none"
        thirdH1.style.display = "inline"
        readMoreButton.innerHTML = "3"
    }else{
        more1.style.display = "inline"
        more3.style.display = "none"
        mainImage1.style.display = "inline"
        mainImage3.style.display = "none"
        mainH1.style.display = "inline"
        thirdH1.style.display = "none"
        readMoreButton.innerHTML = "1"
    }
}



