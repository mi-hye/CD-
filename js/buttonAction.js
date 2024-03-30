const [$prevBtn, $nextBtn] = document.querySelectorAll(".button-wrap button");
const $contentWrap = document.querySelector(".cd-wrap");
const $diskInners = document.querySelectorAll(".disk_inner");
const $albums = document.querySelectorAll(".album");
// const bgArray ;
function readyButton() {
	const totalNum = $albums.length;
	let pageNum = 0;

	$prevBtn.addEventListener("click", () => {
		if (pageNum > 0) pageNum -= 1;
		else pageNum = totalNum - 1;
		pageChangeFunc(pageNum, totalNum);
	});

	$nextBtn.addEventListener("click", () => {
		if (pageNum < totalNum - 1) pageNum += 1;
		else pageNum = 0;
		pageChangeFunc(pageNum, totalNum);
	});

	pageChangeFunc(pageNum, totalNum);
}

function pageChangeFunc(pageNum, totalNum) {
	Array.from({ length: totalNum }).forEach((_, i) => {
		$albums[i].classList.remove("active");
		if (pageNum === i) $albums[i].classList.add("active");
	});
}

document.addEventListener("DOMContentLoaded", readyButton);
