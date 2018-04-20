const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const password = req.body.password;

    //To check validation
    var upperCase = false;
    var lowerCase = false;
    var numeric = false;
    var symbols = false;
    var length = false;

    //To set progress
    var progress = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ];

    var count=0;


    //checking password length
    if (password.length >= 6 && password.length <= 24) {
        length = true;
        count++;
    }


    if (password.length >= 6) {
        count++;
    }

    if (password.length >= 9) {
        count++;
    }

    if (password.length >= 12) {
        count++;
    }

    if (password.length >= 15) {
        count++;
    } //

    if (password.length >= 18) {
        count++;
    }

    if (password.length >= 20) {
        count++;
    }

    if (password.length >= 22) {
        count++;
    }


    //checking Rest of the Conditions
    var upperCheck = false;
    
    for (var i=0; i< password.length; i++) {
        var character = password.charAt(i);

        var char_val = character.charCodeAt(0);

        var temp = 0;

        if(char_val>=32 && char_val<=47) {
            symbols = true;
        }

        if(char_val>=48 && char_val<=57) {
            numeric = true;
        }

        if(char_val>=58 && char_val<=64) {
            symbols = true;
        }

        if (char_val >= 65 && char_val <= 90) {
            upperCase = true;
        }

        if (char_val >= 91 && char_val <= 96) {
            symbols = true;
        }

        if (char_val >= 97 && char_val <= 122) {
            lowerCase = true;
        }

        if (char_val >= 123 && char_val <= 127) {
            symbols = true;
        }

    }//end of For Loop

    if (upperCase) {
        count++;
    }

    if (lowerCase) {
        count++;
    }

    if (numeric) {
        count++;
    }

    if (symbols) {
        count++;
    }



    for(var j=0;j<count;j++) {
        progress[j] = true;
    }



    res.status(200).json({
        upperCase: upperCase,
        lowerCase: lowerCase,
        numeric: numeric,
        symbols: symbols,
        length: length,
        progress: progress,
        count: count,
        passLength: password.length
    });
});

module.exports = router;