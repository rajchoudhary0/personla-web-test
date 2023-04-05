function currentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    var output = hours + ":" + minutes + ":" + seconds + "<br/>";
    const show = document.querySelector('.demo');
    show.innerHTML = output;
    setTimeout(function() {
        currentTime()
    }, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}
currentTime();

function movement() {
    document.addEventListener('mousemove', (e) => {
        const intro = document.querySelector('.intro');
        const btn = document.querySelector('.btn');
        const box = document.querySelector('.box');
        const content = document.querySelector('.content');
        // console.log(e.clientX + "" + e.clientY);
        intro.style.left = 100 + e.clientX / 2 + "px";
        box.style.right = 170 + e.clientX / 1.5 + "px";
        // content.style.background = "rgb(" + e.clientX + "," + e.clientY + "," + 000 + ")";
        // btn.style.color = "rgb(" + e.clientX + "," + e.clientY + "," + 000 + ")";
        content.style.width = 100 + e.clientX / 100 + "%";
    })
}
setInterval(movement(), 1000);
movement();