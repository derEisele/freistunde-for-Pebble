/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var config = JSON.parse(require('./config.json'));

var myAPIKey = config.apiKey;
var myUserID = '1';
var url = 'https://home.eiselecloud.de/freistunde/api.php' +
          '?appid=' + myAPIKey;
var date;



var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }, {
        title: 'Third Item',
      }, {
        title: 'Fourth Item',
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  
  ajax({ url: url},
  function(data) {
    console.log(data);
    date = JSON.parse(data).data[0].Date;
    console.log(date);  
  }
);
});

main.on('click', 'down', function(e) {


  
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body("Am: " + date);
  card.show();
});
