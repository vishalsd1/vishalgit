// Get references to the relevant elements
const sendBtn = document.querySelector('.btn button');
const cancelBtn = document.getElementById('cancel');
const hiddenContent = document.getElementById('hiddenContent');
const OTPboxAll = document.getElementById('OTPboxAll');
const verify = document.getElementById('verify');
const submitBtn = document.getElementById('sendBtn');
const phoneNoInput = document.getElementById('PhoneNo');

// Event listener for when the user clicks the send button
sendBtn.addEventListener('click', () => {
    // Get the phone number entered by the user
    const phoneNo = phoneNoInput.value;
    
    // Here you would generate and send the OTP via an API call or any backend logic
    // For this example, let's just generate a random 4-digit OTP
    const OTP = Math.floor(1000 + Math.random() * 9000);
    
    // Show the OTP input boxes and verification message
    hiddenContent.classList.remove('hidden');
    
    // Populate the OTP input boxes with the generated OTP
    const OTPInputs = OTPboxAll.querySelectorAll('input[type="tel"]');
    OTPInputs.forEach((input, index) => {
        input.value = OTP.toString()[index];
    });

    // Disable the phone number input
    phoneNoInput.disabled = true;

    // Show the verified message
    verify.classList.remove('hidden');
});

// Event listener for when the user clicks the cancel button
cancelBtn.addEventListener('click', () => {
    // Hide the OTP input boxes and verification message
    hiddenContent.classList.add('hidden');

    // Enable the phone number input
    phoneNoInput.disabled = false; // Corrected from true to false

    // Hide the verified message
    verify.classList.add('hidden');
});

// Event listener for when the user clicks the submit button after verifying OTP
submitBtn.addEventListener('click', () => {
    // Here you would verify the OTP entered by the user
    // If the OTP is correct, you can proceed with further actions (e.g., setting password)
    // For this example, let's just show an alert indicating successful verification
    alert('OTP verified successfully! Proceed with setting password.');
});
// Function to show the popup
function showPopup() {
    document.getElementById('popupContainer').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('popupContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Event listener for the close button
document.getElementById('closePopup').addEventListener('click', hidePopup);

// Event listener for the submit button to show the popup
document.getElementById('submitBtn').addEventListener('click', showPopup);
