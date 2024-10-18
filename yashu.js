// Function to handle slot booking
function bookSlot(facultyId, slotTime) {
    // Get the faculty slot list and booking message elements
    const slotList = document.querySelector(`#${facultyId}-slots`);
    const bookingMessage = document.getElementById('bookingMessage');

    // Find the slot in the list that was clicked
    const slotItems = slotList.getElementsByTagName('li');
    for (let i = 0; i < slotItems.length; i++) {
        const slotItem = slotItems[i];
        if (slotItem.textContent.includes(slotTime)) {
            // Mark the slot as booked
            slotItem.innerHTML = `${slotTime} - <strong>Booked</strong>`;
            slotItem.style.color = 'red'; // Optional: Change color to indicate booking
            bookingMessage.innerHTML = `You have successfully booked the ${slotTime} slot for ${facultyId.replace('faculty', 'Faculty ')}!`;

            // Disable further booking for this slot
            const buttons = slotItem.getElementsByTagName('button');
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = true;
            }

            break;
        }
    }
}

// Chat system - A simple way to display messages
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    if (chatInput.value.trim() !== "") {
        // Add the message to the chat box
        const newMessage = document.createElement('p');
        newMessage.textContent = `You: ${chatInput.value}`;
        chatMessages.appendChild(newMessage);

        // Clear the input field
        chatInput.value = "";

        // Auto-scroll the chat box
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
