   
    export function IsTheWinner(t, ll, ul){
        var u = range(ll, ul, 1);
        if (u.length === 0)
        {
            return true;            
        }
        else
        {
            return false;            
        }
       };
       
    export function CalculateAngleChange(t,a)
       {
           return (a + ((9*t)/25)) % 360;
       };

  export function range(start, end, step) {
        var range = [];
        var typeofStart = typeof start;
        var typeofEnd = typeof end;
    
        if (step === 0) {
            throw TypeError("Step cannot be zero.");
        }
    
        if (typeofStart === "undefined" || typeofEnd === "undefined") {
            throw TypeError("Must pass start and end arguments.");
        } else if (typeofStart !== typeofEnd) {
            throw TypeError("Start and end arguments must be of same type.");
        }
    
        typeof step == "undefined" && (step = 1);
    
      
    
        if (typeofStart === "number") {
    
            while (step > 0 ? end >= start : end <= start) {
                range.push(start);
                start += step;
            }
    
        } else if (typeofStart === "string") {
    
            if (start.length !== 1 || end.length !== 1) {
                throw TypeError("Only strings with one character are supported.");
            }
    
            start = start.charCodeAt(0);
            end = end.charCodeAt(0);
    
            while (step > 0 ? end >= start : end <= start) {
                range.push(String.fromCharCode(start));
                start += step;
            }
    
        } else {
            throw TypeError("Only string and number types are supported");
        }
    
        return range;
    
    }