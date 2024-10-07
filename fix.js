document.addEventListener("DOMContentLoaded", () => {
    const failuresList = document.getElementById("failures-list");
    const successList = document.getElementById("success-list");
    const submitButton = document.getElementById("submit-button");
    const problemInput = document.getElementById("problem-input");
    const suggestionsBox = document.getElementById("suggestions");

    // Event listener for adding success items
    failuresList.addEventListener("click", (e) => {
        if (e.target.classList.contains("complete-button")) {
            const challengeInput = e.target.previousElementSibling;
            const challengeValue = challengeInput.value.trim();

            if (challengeValue) {
                // Create a new success item
                const successItem = document.createElement("li");
                successItem.classList.add("success-item");
                successItem.innerHTML = `
                    Failure: ${challengeValue}
                    <input type="text" class="success-input" placeholder="Write your action steps here...">
                    <button class="add-success-button">Add</button>
                `;

                // Append the new success item to the success list
                successList.appendChild(successItem);

                // Clear the input and hide it
                challengeInput.value = '';

                // Add event listener for the new button
                const addSuccessButton = successItem.querySelector(".add-success-button");
                addSuccessButton.addEventListener("click", function() {
                    const actionInput = successItem.querySelector(".success-input");
                    const actionValue = actionInput.value.trim();

                    if (actionValue) {
                        const actionItem = document.createElement("li");
                        actionItem.textContent = actionValue;
                        successItem.appendChild(actionItem);
                        actionInput.value = ''; // Clear the input after adding
                    }
                });
            }
        }
    });

    // General tips array
    const generalTips = [
        "Consider reaching out to a mentor or counselor for personalized guidance.",
        "Set small, achievable goals to build momentum.",
        "Take regular breaks to stay refreshed and focused.",
        "Stay organized by using a planner or task management app.",
        "Keep a positive mindset, and don't be afraid to ask for help.",
        "Try to maintain a healthy work-life balance.",
        "Practice mindfulness and focus on things within your control.",
        "Develop healthy routines to improve mental and physical well-being.",
        "Make time for activities that bring you joy and relaxation.",
        "Focus on personal growth, not perfection.",
        "Learn from setbacks and view failure as a stepping stone.",
        "Stay connected with supportive friends and family members.",
        "Avoid multitasking, focus on one task at a time.",
        "Celebrate small wins to keep yourself motivated.",
        "Track your progress and adjust your approach as needed."
    ];

    // Function to get random tips
    function getRandomTips(tipsArray) {
        const shuffled = tipsArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    // Event listener for the "Get Suggestions" button
    submitButton.addEventListener("click", function() {
        const userInput = problemInput.value.toLowerCase();
        let suggestions = '';

        // Check for keywords and provide suggestions
        if (userInput.includes('time management')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=time+management">Time Management Videos</a></li><li>Try using a planner or scheduling app!</li></ul>';
        } else if (userInput.includes('study')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=study+techniques">Study Techniques Videos</a></li><li>Consider the Pomodoro technique!</li></ul>';
        } else if (userInput.includes('motivation')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=motivation+tips">Motivation Tips Videos</a></li><li>Set small, achievable goals to build momentum!</li></ul>';
        } else if (userInput.includes('procrastination')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=stop+procrastination">How to Stop Procrastination Videos</a></li><li>Break tasks into smaller steps to make them less daunting!</li></ul>';
        } else if (userInput.includes('stress')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=stress+management">Stress Management Videos</a></li><li>Try deep breathing or meditation exercises!</li></ul>';
        } else if (userInput.includes('confidence')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=boost+confidence">Boost Confidence Videos</a></li><li>Positive affirmations and focusing on your strengths can help!</li></ul>';
        } else if (userInput.includes('sleep')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=better+sleep">Better Sleep Tips Videos</a></li><li>Try maintaining a regular sleep schedule and avoid screens before bed!</li></ul>';
        } else if (userInput.includes('anxiety')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=anxiety+management">Anxiety Management Videos</a></li><li>Consider practicing mindfulness or relaxation techniques!</li></ul>';
        } else if (userInput.includes('burnout')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=prevent+burnout">Prevent Burnout Videos</a></li><li>Take breaks and engage in activities you enjoy!</li></ul>';
        } else if (userInput.includes('overwhelm')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=overwhelm+management">Overwhelm Management Videos</a></li><li>Try breaking tasks into smaller, manageable pieces!</li></ul>';
        } else if (userInput.includes('confidence')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=boost+confidence">Boost Confidence Videos</a></li><li>Consider positive affirmations and focusing on your strengths!</li></ul>';
        } else if (userInput.includes('failure')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=overcoming+failure">Overcoming Failure Videos</a></li><li>Remember that failure is a stepping stone to success!</li></ul>';
        } else if (userInput.includes('focus')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=improve+focus">Improve Focus Videos</a></li><li>Consider techniques like the Pomodoro Technique!</li></ul>';
        } else if (userInput.includes('goal setting')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=goal+setting+strategies">Goal Setting Strategies Videos</a></li><li>Use SMART criteria to set effective goals!</li></ul>';
        } else if (userInput.includes('productivity')) {
            suggestions = '<h3>Helpful Resources:</h3><ul><li><a href="https://www.youtube.com/results?search_query=productivity+tips">Productivity Tips Videos</a></li><li>Consider batching similar tasks together!</li></ul>';
        } else if (userInput === '') {
            // If no input is provided, display 3 random general tips
            const randomTips = getRandomTips(generalTips);
            suggestions = '<h3>General Tips:</h3><ul>' + randomTips.map(tip => `<li>${tip}</li>`).join('') + '</ul>';
        } else {
            suggestions = '<h3>General Tips:</h3><p>Consider reaching out to a mentor or counselor for personalized guidance.</p>';
        }

        // Apply the suggestions to the suggestions box
        suggestionsBox.innerHTML = suggestions;

        // Add the fade-in effect by adding the 'show' class
        suggestionsBox.classList.add('show');
    });
});

 // Apply the suggestions to the suggestions box
 suggestionsBox.innerHTML = suggestions;

 // Add the fade-in effect by adding a class
 suggestionsBox.classList.add('fade-in');
