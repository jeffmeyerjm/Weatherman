module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html', 1000)
    },
    after: browser => {
        browser.end()
    },

    'Search for Redwood City': browser => {
        browser.click('input[class="enter-location__input"]')
            .setValue('input[class="enter-location__input"]', 'Redwood City')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementVisible('div[class="current-weather__weather"]', 5000)
            .assert.containsText('h3[class="current-weather__location"]', "Redwood City")
    },

    'Search Again Tool': browser => {
        browser.click('input[class="enter-location__input"]')
            .setValue('input[class="enter-location__input"]', 'Redwood City')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementVisible('div[class="current-weather__weather"]', 5000)
            .click('button[class="current-weather__search-again"]')
            .waitForElementPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementNotPresent('button[class="enter-location__search-again"]', 5000)
            .assert.elementPresent('input[class="enter-location__input"]')
    },

    // 'Search for valid Alphanumeric Zip - Calgary Zip Code': browser => {
    //     browser.click('input[class="enter-location__input"]')
    //         .setValue('input[class="enter-location__input"]', 'T3M1H7')
    //         .click('button[class="enter-location__submit"]')
    //         .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
    //         .waitForElementVisible('div[class="current-weather__weather"]', 5000)
    //         .assert.containsText('h3[class="current-weather__location"]', "Calgary")
    // },


    'Check for Empty Field Error' : browser => {
        browser .click('input[class="enter-location__input"]')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementPresent('button[class="error-message__try-again"]' , 5000)
            .assert.containsText('h3[class="error-message__message"]' , 'There was a problem fetching the weather!')
    },


    'Check for Error w/ Invalid Zip or City' : browser => {
        browser .click('input[class="enter-location__input"]')
            .setValue('input[class="enter-location__input"]', '49ers')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementPresent('button[class="error-message__try-again"]' , 5000)
            .assert.containsText('h3[class="error-message__message"]' , 'There was a problem fetching the weather!')
    },


    'Check for Error w/ invalid symbol enry' : browser => {
        browser .click('input[class="enter-location__input"]')
            .setValue('input[class="enter-location__input"]', '?')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementPresent('button[class="error-message__try-again"]' , 5000)
            .assert.containsText('h3[class="error-message__message"]' , 'There was a problem fetching the weather!')
            .click('button[class="error-message__try-again"]')
    },


    'Search for Zip Code': browser => {
        browser.click('input[class="enter-location__input"]')
            .setValue('input[class="enter-location__input"]', '94061')
            .click('button[class="enter-location__submit"]')
            .waitForElementNotPresent('button[class="enter-location__submit"]', 5000)
            .waitForElementVisible('div[class="current-weather__weather"]', 5000)
            .assert.containsText('h3[class="current-weather__location"]', "Palo Alto")
    }


}