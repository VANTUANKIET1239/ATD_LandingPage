function openInterestPopup(eventName) {
    document.getElementById('interest-popup').style.display = 'flex';
    document.getElementById('popup-event-name').textContent = eventName;
}
function closeInterestPopup() {
    document.getElementById('interest-popup').style.display = 'none';
}
function submitInterest() {
    var email = document.getElementById('user-email').value;
    if (email && email.includes('@')) {
        closeInterestPopup();
        var notification = document.getElementById('success-notification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2500);
    } else {
        alert('Vui lòng nhập email hợp lệ!');
    }
}
// Hide popup and notification by default
window.onload = function() {
    document.getElementById('interest-popup').style.display = 'none';
    document.getElementById('success-notification').style.display = 'none';
};
