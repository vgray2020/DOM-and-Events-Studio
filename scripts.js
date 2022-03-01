// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {    //everything is wrapped in this
 // console.log('it is loaded');

  //TAKE OFF BUTTON
  //When the "Take off" button is clicked, the following should happen:
  //A window CONFIRM (true or false) should let the user know "Confirm that the shuttle is ready for takeoff."
  document.getElementById('takeoff').addEventListener('click', function () {
    let response = window.confirm('The shuttle is ready for takeoff');

    ////If the shuttle is ready for liftoff, then The flight status should change to "Shuttle in flight."
    if (response) {
      //is true
      document.getElementById('flightStatus').innerText = 'Shuttle in flight';
      // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
      document
        .getElementById('shuttleBackground')
        .setAttribute('style', 'background-color: blue');
      // The shuttle height should increase by 10,000 miles.
      document.getElementById('spaceShuttleHeight').innerText = '10000';
    }
  });

  //LANDING BUTTON
  // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
  document.getElementById('landing').addEventListener('click', function () {
    window.alert('The shuttle is landing. Landing gear engaged.');
    // The flight status should change to "The shuttle has landed."
    document.getElementById('flightStatus').innerText =
      'The shuttle has landed';
    // The background color of the shuttle flight screen should change from blue to green.
    document
      .getElementById('shuttleBackground')
      .setAttribute('style', 'background-color: green');
    // The shuttle height should go down to 0.
    document.getElementById('spaceShuttleHeight').innerText = '0';
  });

  //ABORT BUTTON
  // A window confirm should let the user know "Confirm that you want to abort the mission."
  document
    .getElementById('missionAbort')
    .addEventListener('click', function () {
      let response = window.confirm(
        'Confirm that you want to abort the mission.'
      );

      //// The flight status should change to "Mission aborted."
      if (response) {
        //is true
        document.getElementById('flightStatus').innerText = 'Mission aborted.';
        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from blue to green.
        document
          .getElementById('shuttleBackground')
          .setAttribute('style', 'background-color: green');
        // The shuttle height should be 0.
        document.getElementById('spaceShuttleHeight').innerText = '0';
      }      
    });

    //When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.






});




