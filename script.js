document.addEventListener("DOMContentLoaded", () => {
    const chatbot_text_container = document.querySelector(".chatbot_text");
    const chatbot_text_content = chatbot_text_container.textContent.trim();
    chatbot_text_container.textContent = ""; // Clear the text content

    function typeWriter(text, index) {
        if (index < text.length) {
            chatbot_text_container.textContent += text.charAt(index);
            index++;
            setTimeout(() => {
                typeWriter(text, index);
            }, 50); // Adjusted delay for typing speed
        }
    }

    // Start the typewriter animation
    typeWriter(chatbot_text_content, 0);
});

document.addEventListener("DOMContentLoaded", () => {
    const hoverElement = document.querySelector(".hover-element");
    
    hoverElement.addEventListener("mouseover", () => {
        // Generate random values between -0.5 and 0.5 for x and y coordinates
        const randomX = Math.random() - 0.5;
        const randomY = Math.random() - 0.5;
        
        // Apply the translation directly to the element's position
        hoverElement.style.transform = `translate(${randomX * 100}vw, ${randomY * 100}vh)`;
    });
});


