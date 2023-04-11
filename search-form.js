document.addEventListener('turbo:load', () => {
  function vSearch() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      let recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onspeechstart = function () {
        showNotif('Listening...');
      };
      recognition.onresult = function (e) {
        const userQuery = e.results[0][0].transcript;
        showNotif(`Searching for "${userQuery}"`);
        document.querySelector('#search-form input').value = userQuery;
        recognition.stop();
        document.querySelector('#search-form').submit();
      };
      recognition.onerror = function (e) {
        showNotif('Unable to use Voice Search!');
        recognition.stop();
      };
      recognition.onnomatch = function () {
        showNotif('Didn\'t hear that. Try again.');
      };
      if (navigator.permissions) {
        navigator.permissions
          .query({ name: 'microphone' })
          .then(function (permissionStatus) {
            if (permissionStatus.state === 'granted') {
              recognition.start();
              showNotif('Speak now!');
            } else {
              showNotif('You blocked "Microphone" permission');
            }
          });
      } else {
        recognition.start();
        showNotif('Speak now!');
      }
    }
  }

  document.querySelector('#search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action + '?' + new URLSearchParams(new FormData(form)).toString();
    Turbo.visit(url);
  });
});
