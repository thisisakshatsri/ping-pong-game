document.addEventListener("DOMContentLoaded", () =>{

    let ball = document.getElementById("ball"); //targeting the ball element
    let table = document.getElementById("ping-pong-table"); //targeting
    //here ballX and ballY will be helping us to set a starting point of the ball w.r.t table
    let ballX = 10; //distance of the top of the ball w.r.t to table
    let ballY = 10; //distance of the top of the ball w.r.t to table

    let dx = 2; //displacement factor in x direction 2-> you'll displace by 2 px in x direction, -2 -> you'll displace by 2px in -x direction.
    let dy = 2; //displacement direction in y direction 2-> you'll displace by 2 px in y direction, -2 -> you'll displace 2px in -y direction.



    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    setInterval(function exec(){
        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
        
        // if(ballX > 680 || ballX <= 0) dx *= -  1;
        // if(ballY > 380 || ballY <= 0) dy *= -1;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -  1; //change x-direction
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -  1; //change y-direction
    }, 1)


})