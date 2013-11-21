# js-windows-timezones

A set of convenience methods on JavaScript's date object to enable support for Windows time-zone strings.

This does something kind of dirty, which is modifies the Date object's prototype, and also hangs an array off of the Date function itself (Date.winZones).  

## Usage

    var dt = new Date();
    dt.isInDaylightSavingTime(); // True if the date is in daylight-savings mode
    dt.supportsDaylightSavingTime(); // True if the current timezone supports daylight savings mode
    dt.winZone(); // Gets the Windows time-zone id (this is a best-guess, not an accurate guarantee)
    
    Date.winZones;  // Gets a list of Windows time-zone objects
    // An example timezone object:
    // { offset: -420, id: "US Mountain Standard Time", supportsDaylightSavingTime: false }
    

## Credits

The daylight computations are based on the answer here:

http://stackoverflow.com/questions/11887934/check-if-daylight-saving-time-is-in-effect-and-if-it-is-for-how-many-hours

## License
MIT: http://www.tldrlegal.com/license/mit-license
