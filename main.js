// counter working code
function startTimerAndSubmit() {
    let countdown = 10; // 10 seconds timer

    // Display countdown
    // const timerElement = document.querySelector(".timer");
    // timerElement.textContent = `Time remaining: ${countdown} seconds`;

    const timer = setInterval(() => {
        countdown--; // Decrease the timer by 1 second
        // timerElement.textContent = `Time remaining: ${countdown} seconds`;
        console.log(countdown)
        // When countdown reaches 0, submit the question
        if (countdown <= 0) {
            clearInterval(timer); // Clear the interval
        }
    }, 1000); // Update every second

    // Function to simulate the question submission
    // nextQuestion()
    console.log("countdown", countdown);
}
startTimerAndSubmit()