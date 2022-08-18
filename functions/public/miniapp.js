    function appendResponse (text, method) {
        document.getElementById('debug-information').insertAdjacentHTML( 'afterbegin', `<strong>${ new Date().toString()}</strong> <p><span class="badge bg-primary">${method}</span></p> <div class="response">${JSON.stringify(text, null, '\t')}</div><hr>` );
    };

    async function setMessage () {
        appendResponse({ text: document.getElementById('reply-text').value }, 'setReplyMessage()')
        await warroom.setReplyMessage({ text: document.getElementById('reply-text').value })
    }

    async function resizeMiniApp (size) {
        appendResponse(size, 'resize()')
        await warroom.resize(size)
    }

    (async () => {

        applicationStatus = await warroom.init({ appType:'taskpane', appId: 'demo#8251' })
        document.getElementById('status').innerHTML = '<span class="badge rounded-pill bg-success">Ready</span>'

        document.getElementById('get-client').addEventListener('click', async (e) => {
            const clientInformation = await warroom.getClientInformation()
            appendResponse(clientInformation, 'getClientInformation()')
        })    
        
        document.getElementById('get-subject').addEventListener('click', async (e) => {
            const currentSubject = await warroom.getSubject()
            appendResponse(currentSubject, 'getSubject()')
        })    
        

        document.getElementById('get-current-agent').addEventListener('click', async (e) => {
            const currentAgent = await warroom.getCurrentAgent()
            appendResponse(currentAgent, 'getCurrentAgent()')
        })    

        document.getElementById('get-current-thread').addEventListener('click', async (e) => {
            const currentThread = await warroom.getCurrentThread()
            appendResponse(currentThread, 'getCurrentThread()')
        })    

        document.getElementById('get-current-case').addEventListener('click', async (e) => {
            const currentCase = await warroom.getCurrentCase()
            appendResponse(currentCase, 'getCurrentCase()')
        })    

        document.getElementById('get-current-user').addEventListener('click', async (e) => {
            const currentUser = await warroom.getCurrentUser()
            appendResponse(currentUser, 'getCurrentUser()')
        })    


        document.getElementById('get-user-case-history').addEventListener('click', async (e) => {
            const userCaseHistory = await warroom.getUserCaseHistory({socialIdList: ["wisesightofficial", "wisesighttwitter", "w!s3zight"]})
            appendResponse(userCaseHistory, 'getUserCaseHistory()')
        })    

        warroom.onNewCase((d) => {
            appendResponse(d, 'onNewCase()')
        })

        warroom.onAssignedCase((d) => {
            appendResponse(d, 'onAssignedCase()')
        })

        warroom.onReply((d) => {
            appendResponse(d, 'onReply()')
        })

        warroom.onReplyFormChange((d) => {
            appendResponse(d, 'onReplyFormChange()')
        })

        warroom.onTagged((d) => {
            appendResponse(d, 'onTagged()')
        })

        warroom.onCloseCase((d) => {
            appendResponse(d, 'onCloseCase()')
        })

        warroom.onFilterChanged((d) => {
            appendResponse(d, 'onFilterChanged()')
        })

        warroom.onAgentStatusChanged((d) => {
            appendResponse(d, 'onAgentStatusChanged()')
        })

        warroom.onRefreshThread((d) => {
            appendResponse(d, 'onRefreshThread()')
        })

        warroom.onFocusPost((d) => {
            appendResponse(d, 'onFocusPost()')
        })
    })()
