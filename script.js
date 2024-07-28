document.addEventListener("DOMContentLoaded", () =>{

    let ball = document.getElementById("ball"); //targeting the ball element
    let table = document.getElementById("ping-pong-table"); //targeting the table
    let paddle = document.getElementById("paddle"); //targeting paddle element
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

        //collision of paddle
        /* 
        *ballX < paddle.offsetLeft + paddle.offsetWidth -> if left (wrt to table) of ball < right(wrt table) of the paddle 
        *ballY > paddle.offsetTop -> if top of the ball is > top of paddle
        *ballY + ball.offsetHeight -> bottom of the ball
        *paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
        */
        if(ballX < paddle.offsetLeft + paddle.offsetWidth &&
           ballY > paddle.offsetTop &&
           ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight    
        ){
            dx *= (-1);
        }

        // if(ballX > 680 || ballX <= 0) dx *= -  1;
        // if(ballY > 380 || ballY <= 0) dy *= -1;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -  1; //change x-direction
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -  1; //change y-direction

    }, 1);

    let paddleY = 0;
    let dPy = 5; //displacement for paddle
    document.addEventListener("keydown", (event) => {
        event.preventDefault() // prevent the execution of the default event behaviour
        if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight){
            //up arrow
            console.log("down");
            paddleY += dPy;
        } else if(event.keyCode == 38 && paddleY>0){
            //down arrow
            paddleY += (-1)*dPy;
            console.log("up");
        }
        paddle.style.top = `${paddleY}px`;
    })
    document.addEventListener("mousemove", (event)=> {
        let mouseDistanceFromTop = event.clientY //this is the distance of the mouse point from the top of the screen
        let distanceOfTableFromTop = table.offsetTop
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        paddleY = mousePointControl;
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return; //if bottom of the paddle touches bottom of the table, return
        paddle.style.top = `${paddleY}px`
    })
})
