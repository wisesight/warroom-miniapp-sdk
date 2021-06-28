class Warroom {

    constructor() {
        this.appType = ""
        this.token = ""
        this.isReady = false
        document.addEventListener('warroom-miniapp:ready-state-changed', (e) => {
            resolve(true)
        });
    }
    
    // This is util for sending event back to Warroom
    postMessageToParent (eventName, payload) {
        if(this.token === "") {
            throw Error('Authentication is not valid please init app before use')
        } else {
            parent.postMessage({'warroom-miniapp-type': this.appType, event: eventName, payload:payload, token: this.token }, "*")
        }
    }

    // Handle method when WARROOM send message back to Mini App
    handleMessageFromWarroom (event) {
        if(event.data.provider === 'warroom') {

            if (event.data.token !== this.token || this.token === "") {
                throw Error('Authentication is not valid please init app before use')
            } else {
                switch(event.data.event) {
                    case 'response-to:status:init':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:status:init", { detail: event.data.payload }));
                        break;
                    case 'response-to:get:current-thead':
                        // (GET) Step 4: Recieve message from WARROOM and create event for Mini App
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:get:current-thead", { detail: event.data.payload }));
                        break;
                    case 'send:case:on-close-case':
                            // (EVENT) Step 3: Recieve message from WARROOM and create event for Mini App
                            document.dispatchEvent(new CustomEvent("warroom-miniapp:case:on-close-case", { detail: event.data.payload }));
                            break;
                    default:
                        
                }
            }

            console.log('[MINI APP]',event.data)
        }
    }

    init ({appType, appId}) {
        window.addEventListener('message', this.handleMessageFromWarroom.bind(this), false);
        this.appType = appType
        this.postMessageToParent('status:init', new Date())
        return new Promise ((resolve,reject) => {

            if(this.isReady === true) {
                resolve(true)
            }

            document.addEventListener('warroom-miniapp:status:init', (e) => {
                // Get recieve from warroom  Verify token with end point
                
                if(true) {
                    // Save token when valid
                    this.token = "abcdefg"
                    resolve(true)
                }

            });
        })
    }

    isInMiniApp () {
        return document.referrer.includes('warroom') && isInIframe()
    }
    
    isInIframe () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    // Example of get WARROOM information method (GET)
    getCurrentThread () {
        // (GET) Step 2: send message to WARROOM to request a data
        this.postMessageToParent('get:current-thead')

        return new Promise ((resolve, reject) => {
            // (GET) Step 5: Listen internal event and return as a promise
            document.addEventListener('warroom-miniapp:get:current-thead', (e) => {
                resolve(e.detail)
            }, false);
        })
    }

    // Example of WARROOM event methods (EVENT)

    onCloseCase (cb) {
        // (EVENT) Step 4: Listen internal event and return as a callback
        document.addEventListener('warroom-miniapp:case:on-close-case', (e) => {
            cb(e.detail)
        }, false);
    }

}

window.Warroom = new Warroom();