// This class is supposed to send calls to a restful API
// By now it just returns dummy data :)
class Controller{
    authenticate(username, password){
        return true;
    }

    search(what){
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
}

export default new Controller();
