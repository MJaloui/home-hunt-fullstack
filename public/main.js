// used template from previous projects, some help with Michael
// some troubleshooting with co-pilot

var loveitButtons = document.getElementsByClassName("loveit-btn");
var hateitButtons = document.getElementsByClassName("hateit-btn");
var deleteButtons = document.getElementsByClassName("delete-btn");

Array.from(loveitButtons).forEach(function (element) {
  element.addEventListener('click', function () {
    const homeId = this.getAttribute('data-home-id')
    const loveit = parseFloat(this.getAttribute('data-loveit')) || 0
    fetch('/homes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'homeId': homeId,
        'loveit': loveit
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        window.location.reload(true)
      })
  });
});

Array.from(hateitButtons).forEach(function (element) {
  element.addEventListener('click', function () {
    const homeId = this.getAttribute('data-home-id')
    const hateit = parseFloat(this.getAttribute('data-hateit')) || 0
    fetch('/homes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'homeId': homeId,
        'hateit': hateit
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        window.location.reload(true)
      })
  });
});

Array.from(deleteButtons).forEach(function (element) {
  element.addEventListener('click', function () {
    const homeId = this.getAttribute('data-home-id')
    fetch('/homes', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'homeId': homeId
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});