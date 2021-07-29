class Warroom {

    constructor() {
        this.appType = ""
        this.token = ""
        this.isReady = false
        this.appId = ""
        // Replace this for production 
        this.verifyUrl = '/verify-token'
    }
    
    postMessageToParent (eventName, payload) {
        if(this.token === "") {
            throw Error('Authentication is not valid please init app before use')
        } else {
            parent.postMessage({'warroom-miniapp-type': this.appType, event: eventName, payload:payload, token: this.token, appId: this.appId }, "*")
        }
    }

    handleMessageFromWarroom (event) {

        if(event.data.provider === 'warroom') {
            
            if ((event.data.token !== this.token || this.token === "") && event.data.event !== 'response-to:status:init') {
                throw Error('Authentication is not valid please init app before use')
            } else {
                switch(event.data.event) {
                    
                    case 'response-to:status:init':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:status:init", { detail: event.data.payload }));
                        break;
                    case 'response-to:get:current-thread':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:get:current-thread", { detail: event.data.payload }));
                        break;
                    case 'response-to:get:client-information':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:get:client-information", { detail: event.data.payload }));
                        break;
                    case 'response-to:get:subject':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:get:subject", { detail: event.data.payload }));
                        break;
                    case 'response-to:get:user-case-history':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:get:user-case-history", { detail: event.data.payload }));
                        break;
                    case 'response-to:send:on-close-case':
                        document.dispatchEvent(new CustomEvent("warroom-miniapp:send:on-close-case", { detail: event.data.payload }));
                        break;
                    default:
                        
                }
            }

            console.log('[MINI APP]',event.data)
        }
    }

    async init ({appType, appId}) {
        window.addEventListener('message', this.handleMessageFromWarroom.bind(this));
        this.appType = appType

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        
        const verifyRespone = await fetch(this.verifyUrl,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({token: this.token, appId: appId})
        })

        if(verifyRespone.status === 200) {
            this.appId = appId
            this.token = token
        }

        this.postMessageToParent('status:init', new Date())
        return new Promise ((resolve,reject) => {

            document.addEventListener('warroom-miniapp:status:init', (e) => {
                this.isReady = true
                resolve(true)
            });
        })
    }

    isInMiniApp () {
        return document.referrer.includes('warroom.wisewsight.com')  && isInIframe()
    }
    
    isInIframe () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    resize(size) {
        this.postMessageToParent('control:resize', {size: size})
    }

    async getClientInformation () {
        return this.getMethodInterface('client-information')
    }

    getSubject () {
        return this.getMethodInterface('subject')
    }

    getCurrentAgent () {
        return this.getMethodInterface('current-agent')
    }

    async getCurrentThread () {
        return this.getMethodInterface('current-thread')
    }

    getCurrentCase () {
        return this.getMethodInterface('current-case')
    }

    getCurrentUser () {
        return this.getMethodInterface('current-user')
    }

    getFocusedPost () {
        return this.getMethodInterface('focused-post')
    }

    async getUserCaseHistory (payload) {
        return this.getMethodInterface('user-case-history', payload)
    }

    onCloseCase (cb) {
        this.eventMethodInterface('send:on-close-case',cb)
    }

    eventMethodInterface (eventName,cb) {
        document.addEventListener(`warroom-miniapp:${eventName}`, (e) => {
            cb(e.detail)
        }, false);
    } 

    getMethodInterface (eventName, payload) {
        this.postMessageToParent(`get:${eventName}`, payload)

        return new Promise ((resolve, reject) => {

            document.addEventListener(`warroom-miniapp:get:${eventName}`, (e) => {
                resolve(e.detail)
            }, false);
        })
    } 

}

window.Warroom = new Warroom();