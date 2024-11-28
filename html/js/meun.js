function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    var menuIcon = document.querySelector(".menu-icon");

    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
        menuIcon.innerHTML = "&#9776;"
        menuIcon.style.transform = "rotate(0deg)";
    } else {
        menuItems.style.display = "block";
        menuIcon.innerHTML = "&#x2715;"; // X 아이콘
        menuIcon.style.transition = "transform 0.3s ease-in-out"; // 크로스 아이콘일 때만 transition 적용
        menuIcon.style.transition = "transform 0.3s ease-in-out"; // 크로스 아이콘일 때만 transition 적용
        menuIcon.style.transform = "rotate(90deg)"; // 크로스 아이콘일 때 90도 회전
    }

}

function showAttraction(city, divId) {
    var attractionDiv = document.getElementById(divId);

    // 현재 보이는 상태인지 확인
    var isDisplayed = attractionDiv.style.display === 'block';

    // 모든 div 숨기기
    var allAttractionDivs = document.querySelectorAll('[id^="attractionBox_"]');
    allAttractionDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    // 현재 보이는 상태라면 해당 도시의 div 숨기기
    if (isDisplayed) {
        attractionDiv.style.display = 'none';
    } else {
        attractionDiv.style.display = 'block';
    }
}