// This class is supposed to send calls to a restful API
// By now it just returns dummy data :)
class Controller{
    authenticate(username, password){
        return true;
    }


    wait(ms){
        var start = +(new Date());
        while (new Date() - start < ms);
    }

    search(what){
        this.wait(1000);
        if(what.indexOf("1") >= 0){
            return [{
                "physId": what,
                "type": "ADV5000",
                "sn": "5818962",
                "lasc": "2016-09-28",
                "lasr": "28",
                "cash": "None",
                "pu": "None"
            }];
        }
        else{
            return [];
        }
    }

    searchLocation(what){
        this.wait(1000);
        if(what.indexOf("2") >= 0){
            return [{
                "locId": what,
                "cust": "Everbuy Mall",
                "loc": "156 South Street, Malvern, PA",
                "asset": "100089653",
                "type": "Royal RV660-MDB - Bottling"
            }];
        }
        else{
            return [];
        }
    }

    createPendingUpdate(physId, locationId){
        this.wait(1000);
        return;
    }
}

export default new Controller();
