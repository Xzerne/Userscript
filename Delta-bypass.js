(function() {
    'use strict';
    if (window.location.href.startsWith(' https://gateway.platoboost.com/a/8')) {
        if (document.title == 'Just a moment...') {
            console.log('please solve the captcha')
            return;
        }
        try {
        const ctbutton = document.querySelector("#app > main > main > div > div > div:nth-child(2) > div > button")
        if (ctbutton && !ctbutton.disabled) {
            ctbutton.click()
        }
    } catch (e) {
            console.log('fail to click button')
    }
    }
    if (window.location.href.startsWith('https://loot-link.com/')) {
        var a = decodeURIComponent(window.location.href.split('r=')[1])
            try {
                var decodedUrl = atob(a);
                window.location.assign(decodedUrl);
                
            } catch (e) {
                console.error('ERROR : ', e);
            }
        }
    if (window.location.href.includes('tk=')) {
        try {
        const ck = document.querySelector("#app > main > main > div > div > div.p-6.pt-0.px-8.grid.gap-2 > button")
                if (ck && !ck.disabled) {
                document.querySelector("#app > main > main > div > div > div.p-6.pt-0.px-8.grid.gap-2 > button").click()
                }
    } catch (e) {
            console.log('fail to click button')
    }
    }
})()
