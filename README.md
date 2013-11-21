# js-windows-timezones

A set of convenience methods on JavaScript's date object to enable support for Windows time-zone strings.

## Usage

    var dt = new Date();
    dt.isInDaylightSavingsTime(); // True if the date is in daylight-savings mode
    dt.supportsDaylightSavingTime(); // True if the current timezone supports daylight savings mode
    dt.winZone(); // Gets the Windows time-zone id (this is a best-guess, not an accurate guarantee)
    
    Date.winZones;  // Gets a list of Windows time-zone objects
    // An example timezone object:
    // { offset: -420, id: "US Mountain Standard Time", supportsDaylightSavingTime: false }
    

    
