// JavaScript Document

//Get the video Element
const video = document.getElementsByTagName('video')[0];

// Select all the spans
const span = document.querySelectorAll('p span');


//Highlighting text
video.ontimeupdate = () => {
	const vidTime = video.currentTime;

	for (let i = 0;i < span.length; i += 1){
		if(vidTime > span[i].getAttribute("data-start") &&
		vidTime < span[i].getAttribute("data-end")){
			span[i].style.color = '#5C8FBA';
		}
		else{
			span[i].style.color = '';
		}
	}
};


//Select where to go in the video
for (i = 0; i < span.length; i += 1){
	span[i].addEventListener('click', (e) => {
		video.currentTime = e.target.getAttribute('data-start');
		video.play();
	});
}
