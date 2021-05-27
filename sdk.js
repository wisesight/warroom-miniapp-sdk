class Warroom {

    constructor() {
        this.appType = ""
        this.isReady = false
        document.addEventListener('warroom-miniapp:ready-state-changed', (e) => {
            resolve(true)
        });
    }

    postMessageToParent (eventName, payload) {
        parent.postMessage({'warroom-miniapp-type': this.appType, event: eventName, payload:payload }, "*")
    }

    handleMessageFromWarroom (event) {
        if(event.data.provider === 'warroom') {
            switch(event.data.event) {
                case 'response-to:status:init':
                    document.dispatchEvent(new CustomEvent("warroom-miniapp:status:init", { detail: event.data.payload }));
                    break;
                case 'response-to:get:current-thead':
                    document.dispatchEvent(new CustomEvent("warroom-miniapp:get:current-thead", { detail: event.data.payload }));
                    break;
                case 'send:on-close-case':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:on-close-case", { detail: event.data.payload }));
                        break;
                default:
                    
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
                resolve(true)
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

    // Get WARROOM Information functions

    getCurrentThread () {
        this.postMessageToParent('get:current-thead')

        return new Promise ((resolve, reject) => {
            document.addEventListener('warroom-miniapp:get:current-thead', (e) => {
                resolve(e.detail)
            }, false);
        })
    }

    // Event listen from WARROOM

    onCloseCase (cb) {
        document.addEventListener('warroom-miniapp:on-close-case', (e) => {
            cb(e.detail)
        }, false);
    }

}

window.Warroom = new Warroom();