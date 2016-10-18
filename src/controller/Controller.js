// This class is supposed to send calls to a restful API
// By now it just returns dummy data :)
class Controller {
    authenticate(username, password) {
        return true;
    }

    wait(ms) {
        // var start = +(new Date());
        // while (new Date() - start < ms) ;
        }

    search(what) {
        this.wait(1000);
        if (what.indexOf("1") >= 0) {
            return [
                {
                    "physId": what,
                    "type": "ADV5000",
                    "sn": "5818962",
                    "lasc": "2016-09-28",
                    "lasr": "28",
                    "cash": "None",
                    "pu": "None"
                }
            ];
        } else {
            return [];
        }
    }

    searchLocation(what) {
        this.wait(1000);
        if (what.indexOf("2") >= 0) {
            return [
                {
                    "locId": what,
                    "cust": "Everbuy Mall",
                    "loc": "156 South Street, Malvern, PA",
                    "asset": "100089653",
                    "type": "Royal RV660-MDB - Bottling",
                    "status": "none"
                }
            ];
        } else if(what.indexOf("3") >= 0){
            return [
                {
                    "locId": what,
                    "cust": "The Barber Shop",
                    "loc": "789 Wall Street, Malvern, PA",
                    "asset": "100089653",
                    "type": "Royal RV660-MDB - Bottling",
                    "status": "assigned"
                }
            ];
        }
        else {
            return [];
        }
    }

    createPendingUpdate(physId, locationId) {
        this.wait(1000);
        return;
    }

    getCallHistory() {
        return [
            {
                "dateTime": "2016-10-16 08:22:30 PM",
                "callType": "Heartbeat",
                "rssi": "30",
                "alarms": "None"
            }, {
                "dateTime": "2016-10-15 08:20:01 PM",
                "callType": "Heartbeat",
                "rssi": "28",
                "alarms": "None"
            }, {
                "dateTime": "2016-10-14 08:25:50 PM",
                "callType": "Audit",
                "rssi": "32",
                "alarms": "CJ, BJ"
            }, {
                "dateTime": "2016-10-13 08:20:40 PM",
                "callType": "Heartbeat",
                "rssi": "31",
                "alarms": "None"
            }, {
                "dateTime": "2016-10-12 08:20:40 PM",
                "callType": "Heartbeat",
                "rssi": "33",
                "alarms": "SO"
            }
        ];
    }
}

export default new Controller();
