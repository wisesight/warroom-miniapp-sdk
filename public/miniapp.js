    function appendResponse (text) {
        document.getElementById('debug-information').insertAdjacentHTML( 'afterbegin', `<strong>${ new Date().toString()}</strong><div class="response">${JSON.stringify(text, null, '\t')}</div><hr>` );
    };

    async function setMessage () {
        await warroom.setReplyMessage({ text: document.getElementById('reply-text').value })
    }

    async function resizeMiniApp (size) {
        await warroom.resize(size)
    }

    (async () => {

        applicationStatus = await warroom.init({ appType:'taskpane', appId: '117454667' })
        document.getElementById('status').innerHTML = '<span class="badge rounded-pill bg-success">Ready</span>'

        document.getElementById('get-client').addEventListener('click', async (e) => {
            const clientInformation = await warroom.getClientInformation()
            appendResponse(clientInformation)
        })    
        
        document.getElementById('get-subject').addEventListener('click', async (e) => {
            const currentSubject = await warroom.getSubject()
            appendResponse(currentSubject)
        })    
        

        document.getElementById('get-current-agent').addEventListener('click', async (e) => {
            const currentAgent = await warroom.getCurrentAgent()
            appendResponse(currentAgent)
        })    

        document.getElementById('get-current-thread').addEventListener('click', async (e) => {
            const currentThread = await warroom.getCurrentThread()
            appendResponse(currentThread)
        })    

        document.getElementById('get-current-case').addEventListener('click', async (e) => {
            const currentCase = await warroom.getCurrentCase()
            appendResponse(currentCase)
        })    

        document.getElementById('get-current-user').addEventListener('click', async (e) => {
            const currentUser = await warroom.getCurrentUser()
            appendResponse(currentUser)
        })    


        document.getElementById('get-user-case-history').addEventListener('click', async (e) => {
            const userCaseHistory = await warroom.getUserCaseHistory({socialIdList: ["wisesightofficial", "wisesighttwitter", "w!s3zight"]})
            appendResponse(userCaseHistory)
        })    

        // await warroom.closeMiniApp()

        warroom.onNewCase((d) => {
            appendResponse(d)
        })

        warroom.onAssignedCase((d) => {
            appendResponse(d)
        })

        warroom.onReply((d) => {
            appendResponse(d)
        })

        warroom.onReplyFormChange((d) => {
            appendResponse(d)
        })

        warroom.onTagged((d) => {
            appendResponse(d)
        })

        warroom.onCloseCase((d) => {
            appendResponse(d)
        })

        warroom.onFilterChanged((d) => {
            appendResponse(d)
        })

        warroom.onAgentStatusChanged((d) => {
            appendResponse(d)
        })

        warroom.onRefreshThread((d) => {
            appendResponse(d)
        })

        warroom.onFocusPost((d) => {
            appendResponse(d)
        })
    })()
