// DDoS Protection Script

// Display the challenge page
function showChallenge() {
    const challengeDiv = document.createElement('div');
    challengeDiv.id = 'challenge';
    challengeDiv.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f9f9f9;
        text-align: center;
        font-family: Arial, sans-serif;
    `;

    challengeDiv.innerHTML = `
        <h1>Checking your browser before accessing the site...</h1>
        <noscript>
            <h1 style="color: red;">Please enable JavaScript and reload the page.</h1>
        </noscript>
        <p>This process is automatic. Your browser will redirect shortly.</p>
        <p>Please wait a few seconds...</p>
        <img src="/cdn-cgi/images/spinner.gif" alt="Loading..." style="margin: 20px;">
    `;

    document.body.innerHTML = '';
    document.body.appendChild(challengeDiv);

    setTimeout(() => {
        executeChallenge();
    }, 3000); // Wait for 3 seconds before solving the challenge
}

// Execute the challenge (simulating browser verification)
function executeChallenge() {
    // Simulated arithmetic challenge
    const challengeAnswer = calculateAnswer();

    // Mock form submission with challenge answer
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/challenge-response'; // Replace with your server's endpoint

    const answerInput = document.createElement('input');
    answerInput.type = 'hidden';
    answerInput.name = 'challenge_answer';
    answerInput.value = challengeAnswer;

    form.appendChild(answerInput);
    document.body.appendChild(form);

    form.submit(); // Submit the form to pass the challenge
}

// Simple arithmetic challenge calculation
function calculateAnswer() {
    const baseValue = 42; // A random number used in the calculation
    const currentLength = window.location.pathname.length; // Example dynamic value
    return baseValue + currentLength * 2; // Challenge logic
}

// Initialize the protection script
document.addEventListener('DOMContentLoaded', showChallenge);
