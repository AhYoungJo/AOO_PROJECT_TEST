var imagePaths = [
    '/img/donation01.png', // ".."은 상위 폴더를 나타냅니다.
    '/img/fox.jpg',
    '/img/turtle.jpg',
];
// 이미지를 5초 간격으로 무한루프로 표시하는 함수
function showImages() {
    var imageContainer = document.getElementById('image-container');
    var currentIndex = 0;

    function displayNextImage() {
        // 이미지 변경
        imageContainer.innerHTML = `<img src="${imagePaths[currentIndex]}" alt="Image">`;

        // 다음 이미지 인덱스 계산
        currentIndex = (currentIndex + 1) % imagePaths.length;

        // 5초 후에 다음 이미지 표시
        setTimeout(displayNextImage, 3000);
    }

    // 초기 이미지 표시
    displayNextImage();
}

// 페이지 로드 시 이미지 표시 시작
window.onload = showImages;
