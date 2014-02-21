(function () {
    var winter = new Date(2013, 0, 1);
    var summer = new Date(2013, 6, 1);
    var winZones = Date.winZones = [
        { offset: -720, id: "Dateline Standard Time", supportsDaylightSavingTime: false, offsetText: "-12:00" },
        { offset: -660, id: "UTC-11", supportsDaylightSavingTime: false, offsetText: "-11:00" },
        { offset: -600, id: "Hawaiian Standard Time", supportsDaylightSavingTime: false, offsetText: "-10:00" },
        { offset: -540, id: "Alaskan Standard Time", supportsDaylightSavingTime: true, offsetText: "-9:00" },
        { offset: -480, id: "Pacific Standard Time (Mexico)", supportsDaylightSavingTime: true, offsetText: "-8:00" },
        { offset: -480, id: "Pacific Standard Time", supportsDaylightSavingTime: true, offsetText: "-8:00" },
        { offset: -420, id: "US Mountain Standard Time", supportsDaylightSavingTime: false, offsetText: "-7:00" },
        { offset: -420, id: "Mountain Standard Time (Mexico)", supportsDaylightSavingTime: true, offsetText: "-7:00" },
        { offset: -420, id: "Mountain Standard Time", supportsDaylightSavingTime: true, offsetText: "-7:00" },
        { offset: -360, id: "Central America Standard Time", supportsDaylightSavingTime: false, offsetText: "-6:00" },
        { offset: -360, id: "Central Standard Time", supportsDaylightSavingTime: true, offsetText: "-6:00" },
        { offset: -360, id: "Central Standard Time (Mexico)", supportsDaylightSavingTime: true, offsetText: "-6:00" },
        { offset: -360, id: "Canada Central Standard Time", supportsDaylightSavingTime: false, offsetText: "-6:00" },
        { offset: -300, id: "SA Pacific Standard Time", supportsDaylightSavingTime: false, offsetText: "-5:00" },
        { offset: -300, id: "Eastern Standard Time", supportsDaylightSavingTime: true, offsetText: "-5:00" },
        { offset: -300, id: "US Eastern Standard Time", supportsDaylightSavingTime: true, offsetText: "-5:00" },
        { offset: -270, id: "Venezuela Standard Time", supportsDaylightSavingTime: false, offsetText: "-4:-30" },
        { offset: -240, id: "Paraguay Standard Time", supportsDaylightSavingTime: true, offsetText: "-4:00" },
        { offset: -240, id: "Atlantic Standard Time", supportsDaylightSavingTime: true, offsetText: "-4:00" },
        { offset: -240, id: "Central Brazilian Standard Time", supportsDaylightSavingTime: true, offsetText: "-4:00" },
        { offset: -240, id: "SA Western Standard Time", supportsDaylightSavingTime: false, offsetText: "-4:00" },
        { offset: -240, id: "Pacific SA Standard Time", supportsDaylightSavingTime: true, offsetText: "-4:00" },
        { offset: -210, id: "Newfoundland Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:-30" },
        { offset: -180, id: "E. South America Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:00" },
        { offset: -180, id: "Argentina Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:00" },
        { offset: -180, id: "SA Eastern Standard Time", supportsDaylightSavingTime: false, offsetText: "-3:00" },
        { offset: -180, id: "Greenland Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:00" },
        { offset: -180, id: "Montevideo Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:00" },
        { offset: -180, id: "Bahia Standard Time", supportsDaylightSavingTime: true, offsetText: "-3:00" },
        { offset: -120, id: "UTC-02", supportsDaylightSavingTime: false, offsetText: "-2:00" },
        { offset: -120, id: "Mid-Atlantic Standard Time", supportsDaylightSavingTime: true, offsetText: "-2:00" },
        { offset: -60, id: "Azores Standard Time", supportsDaylightSavingTime: true, offsetText: "-1:00" },
        { offset: -60, id: "Cape Verde Standard Time", supportsDaylightSavingTime: false, offsetText: "-1:00" },
        { offset: 0, id: "Morocco Standard Time", supportsDaylightSavingTime: true, offsetText: "0:00" },
        { offset: 0, id: "UTC", supportsDaylightSavingTime: false, offsetText: "0:00" },
        { offset: 0, id: "GMT Standard Time", supportsDaylightSavingTime: true, offsetText: "0:00" },
        { offset: 0, id: "Greenwich Standard Time", supportsDaylightSavingTime: false, offsetText: "0:00" },
        { offset: 60, id: "W. Europe Standard Time", supportsDaylightSavingTime: true, offsetText: "1:00" },
        { offset: 60, id: "Central Europe Standard Time", supportsDaylightSavingTime: true, offsetText: "1:00" },
        { offset: 60, id: "Romance Standard Time", supportsDaylightSavingTime: true, offsetText: "1:00" },
        { offset: 60, id: "Central European Standard Time", supportsDaylightSavingTime: true, offsetText: "1:00" },
        { offset: 60, id: "W. Central Africa Standard Time", supportsDaylightSavingTime: false, offsetText: "1:00" },
        { offset: 60, id: "Namibia Standard Time", supportsDaylightSavingTime: true, offsetText: "1:00" },
        { offset: 120, id: "GTB Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Middle East Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Egypt Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Syria Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "E. Europe Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "South Africa Standard Time", supportsDaylightSavingTime: false, offsetText: "2:00" },
        { offset: 120, id: "FLE Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Turkey Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Israel Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 120, id: "Libya Standard Time", supportsDaylightSavingTime: true, offsetText: "2:00" },
        { offset: 180, id: "Jordan Standard Time", supportsDaylightSavingTime: true, offsetText: "3:00" },
        { offset: 180, id: "Arabic Standard Time", supportsDaylightSavingTime: true, offsetText: "3:00" },
        { offset: 180, id: "Kaliningrad Standard Time", supportsDaylightSavingTime: true, offsetText: "3:00" },
        { offset: 180, id: "Arab Standard Time", supportsDaylightSavingTime: false, offsetText: "3:00" },
        { offset: 180, id: "E. Africa Standard Time", supportsDaylightSavingTime: false, offsetText: "3:00" },
        { offset: 210, id: "Iran Standard Time", supportsDaylightSavingTime: true, offsetText: "3:30" },
        { offset: 240, id: "Arabian Standard Time", supportsDaylightSavingTime: false, offsetText: "4:00" },
        { offset: 240, id: "Azerbaijan Standard Time", supportsDaylightSavingTime: true, offsetText: "4:00" },
        { offset: 240, id: "Russian Standard Time", supportsDaylightSavingTime: true, offsetText: "4:00" },
        { offset: 240, id: "Mauritius Standard Time", supportsDaylightSavingTime: true, offsetText: "4:00" },
        { offset: 240, id: "Georgian Standard Time", supportsDaylightSavingTime: false, offsetText: "4:00" },
        { offset: 240, id: "Caucasus Standard Time", supportsDaylightSavingTime: true, offsetText: "4:00" },
        { offset: 270, id: "Afghanistan Standard Time", supportsDaylightSavingTime: false, offsetText: "4:30" },
        { offset: 300, id: "West Asia Standard Time", supportsDaylightSavingTime: false, offsetText: "5:00" },
        { offset: 300, id: "Pakistan Standard Time", supportsDaylightSavingTime: true, offsetText: "5:00" },
        { offset: 330, id: "India Standard Time", supportsDaylightSavingTime: false, offsetText: "5:30" },
        { offset: 330, id: "Sri Lanka Standard Time", supportsDaylightSavingTime: false, offsetText: "5:30" },
        { offset: 345, id: "Nepal Standard Time", supportsDaylightSavingTime: false, offsetText: "5:45" },
        { offset: 360, id: "Central Asia Standard Time", supportsDaylightSavingTime: false, offsetText: "6:00" },
        { offset: 360, id: "Bangladesh Standard Time", supportsDaylightSavingTime: true, offsetText: "6:00" },
        { offset: 360, id: "Ekaterinburg Standard Time", supportsDaylightSavingTime: true, offsetText: "6:00" },
        { offset: 390, id: "Myanmar Standard Time", supportsDaylightSavingTime: false, offsetText: "6:30" },
        { offset: 420, id: "SE Asia Standard Time", supportsDaylightSavingTime: false, offsetText: "7:00" },
        { offset: 420, id: "N. Central Asia Standard Time", supportsDaylightSavingTime: true, offsetText: "7:00" },
        { offset: 480, id: "China Standard Time", supportsDaylightSavingTime: false, offsetText: "8:00" },
        { offset: 480, id: "North Asia Standard Time", supportsDaylightSavingTime: true, offsetText: "8:00" },
        { offset: 480, id: "Singapore Standard Time", supportsDaylightSavingTime: false, offsetText: "8:00" },
        { offset: 480, id: "W. Australia Standard Time", supportsDaylightSavingTime: true, offsetText: "8:00" },
        { offset: 480, id: "Taipei Standard Time", supportsDaylightSavingTime: false, offsetText: "8:00" },
        { offset: 480, id: "Ulaanbaatar Standard Time", supportsDaylightSavingTime: false, offsetText: "8:00" },
        { offset: 540, id: "North Asia East Standard Time", supportsDaylightSavingTime: true, offsetText: "9:00" },
        { offset: 540, id: "Tokyo Standard Time", supportsDaylightSavingTime: false, offsetText: "9:00" },
        { offset: 540, id: "Korea Standard Time", supportsDaylightSavingTime: false, offsetText: "9:00" },
        { offset: 570, id: "Cen. Australia Standard Time", supportsDaylightSavingTime: true, offsetText: "9:30" },
        { offset: 570, id: "AUS Central Standard Time", supportsDaylightSavingTime: false, offsetText: "9:30" },
        { offset: 600, id: "E. Australia Standard Time", supportsDaylightSavingTime: false, offsetText: "10:00" },
        { offset: 600, id: "AUS Eastern Standard Time", supportsDaylightSavingTime: true, offsetText: "10:00" },
        { offset: 600, id: "West Pacific Standard Time", supportsDaylightSavingTime: false, offsetText: "10:00" },
        { offset: 600, id: "Tasmania Standard Time", supportsDaylightSavingTime: true, offsetText: "10:00" },
        { offset: 600, id: "Yakutsk Standard Time", supportsDaylightSavingTime: true, offsetText: "10:00" },
        { offset: 660, id: "Central Pacific Standard Time", supportsDaylightSavingTime: false, offsetText: "11:00" },
        { offset: 660, id: "Vladivostok Standard Time", supportsDaylightSavingTime: true, offsetText: "11:00" },
        { offset: 720, id: "New Zealand Standard Time", supportsDaylightSavingTime: true, offsetText: "12:00" },
        { offset: 720, id: "UTC+12", supportsDaylightSavingTime: false, offsetText: "12:00" },
        { offset: 720, id: "Fiji Standard Time", supportsDaylightSavingTime: true, offsetText: "12:00" },
        { offset: 720, id: "Magadan Standard Time", supportsDaylightSavingTime: true, offsetText: "12:00" },
        { offset: 720, id: "Kamchatka Standard Time", supportsDaylightSavingTime: true, offsetText: "12:00" },
        { offset: 780, id: "Tonga Standard Time", supportsDaylightSavingTime: false, offsetText: "13:00" },
        { offset: 780, id: "Samoa Standard Time", supportsDaylightSavingTime: true, offsetText: "13:00" }
    ];
    
    Date.prototype.stdTimezoneOffset = function () {
        return Math.max(winter.getTimezoneOffset(), summer.getTimezoneOffset());
    }

    Date.prototype.isInDaylightSavingTime = function () {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }

    Date.prototype.supportsDaylightSavingTime = function () {
        return winter.getTimezoneOffset() != summer.getTimezoneOffset();
    }

    Date.prototype.winZone = function () {
        var offset = -(winter.getTimezoneOffset());
        var matches = winZones.filter(function (zone) { return zone.offset == offset; });

        if (matches.length) {
            var supportsDaylightSavingTime = this.supportsDaylightSavingTime();
            var preferred = matches.filter(function (zone) { return zone.supportsDaylightSavingTime == supportsDaylightSavingTime; });
            return (preferred.length ? preferred[0] : matches[0]).id;
        }

        return null;
    }
})();
