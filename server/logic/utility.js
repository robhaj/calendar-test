var events = [
        {
          title  : 'event1',
          start  : '2015-08-27'
        },
        {
          title  : 'event2',
          start  : '2015-08-26',
          end    : '2015-08-27'
        },
        {
          title  : 'event3',
          start  : '2015-08-28T12:30:00',
        }
      ];


function postHandler(body) {
  var newEvent = new CalEvent(
                        body['event-name'],
                        body['event-desc'],
                        body['event-date'],
                        body['event-start'],
                        body['event-end'],
                        body['event-url'] );


  return {message: "Event added.", calEvent: newEvent};
}

function CalEvent(name, desc, date, start, end, url) {
  this.title = name;
  this.description = desc;
  this.date = date;
  this.start = start;
  this.end = end;
  this.url = url || 'https://www.google.com';
  this.attendees = 0;
}

CalEvent.prototype.calFormat = function() {
  // this will do things
  var out = {
    title: this.name,
    start: this.start,
    end: this.end,
    url: this.url,
    description: this.description,
    overlap: true
  };
};

module.exports = {
  postHandler: postHandler,
  CalEvent: CalEvent,
  events: events
};
