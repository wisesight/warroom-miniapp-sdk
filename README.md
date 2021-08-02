# Mini App SDK

## Development tools

```
yarn

yarn start

// Enter http://localhost:3000
```

## Get start

```html
<script src="/sdk.js"></script>
```
-----------
## Avaliable Methods

### Request type methods 

#### window.getClientInformation()
```javascript
warroom.getClientInformation().then(client => {
    // {
    //     "client_id": 70,
    //     "client_name": "Demo"
    // }
})
```
#### window.getSubject()
```javascript
warroom.getSubject().then(subject => {
    // {
    //     "subject_id": 11236,
    //     "subject_name": "Green Curry (Comment Page)",
    //     "subject_client_id": 70,
    //     "subject_type": "facebook",
    //     "subject_facebook_id": "503815916439094"
    // }
})
```

#### warroom.getCurrentAgent()
```javascript
warroom.getCurrentAgent().then(agent => {
    // {
    //     "agent_id": 24,
    //     "agent_name": "Green Curry",
    //     "agent_profile_picture": "https://s3-ap-southeast-1.amazonaws.com/warroom-sg/2a092c4d324951c3e3380579091b3ca5.jpg",
    //     "agent_employee_id": "User_01",
    //     "agent_client_id": 70,
    //     "agent_status": "active"
    // }
})
```

#### warroom.getCurrentThread()
```javascript
warroom.getCurrentThread().then(thread => {
    // {
    //     "thread_id": 30957229,
    //     "thread_type": "Facebook",
    //     "thread_identity_id": "503815916439094_1754472711373402",
    //     "thread_subject_id": 11236,
    //     "thread_client_id": 70
    // }
})
```

#### warroom.getCurrentCase()
```javascript
warroom.getCurrentThread().then(thread => {
    // {
    //     "thread_id": 30957229,
    //     "thread_type": "Facebook",
    //     "thread_identity_id": "503815916439094_1754472711373402",
    //     "thread_subject_id": 11236,
    //     "thread_client_id": 70
    // }
})
```

#### warroom.getCurrentUser()
```javascript
warroom.getCurrentUser().then(user => {
    // {
    //     "id" : 10,
    //     "displayname" : "Bean Curry",
    //     "social_id" : "503815916439094",
    //     "type" : "twitter",
    //     "url_picture" : "https:\/\/twitter.com/pic/verygood.jpg",
    //     "latest_fetch" : "2021-07-29T08:33:17Z"
    // }
})
```

#### warroom.getUserCaseHistory()
```javascript
warroom.getUserCaseHistory({socialIdList: ["wisesightofficial", "wisesighttwitter", "w!s3zight"]}).then(history => {

})
```
-----------
### Event listeners type methods 

#### warroom.onNewCase()
```javascript
warroom.onNewCase((case) => {
})
```
#### warroom.onAssignedCase()
```javascript
warroom.onAssignedCase((case) => {
})
```
#### warroom.onReply()
```javascript
warroom.onReply((message) => {
})
```
#### warroom.onReplyFormChange()
```javascript
warroom.onReplyFormChange((message) => {
})
```
#### warroom.onTagged()
```javascript
warroom.onTagged((case) => {
})
```
#### warroom.onCloseCase()
```javascript
warroom.onCloseCase((case) => {
})
```
#### warroom.onFilterChanged()
```javascript
warroom.onFilterChanged((case) => {
})
```
#### warroom.onAgentStatusChanged()
```javascript
warroom.onFilterChanged((status) => {
})
```
#### warroom.onRefreshThread()
```javascript
warroom.onFilterChanged((status) => {
})
```
#### warroom.onFocusPost()
```javascript
warroom.onFocusPost((post) => {
})
```
### Other type methods
#### warroom.resizeMiniApp()
```javascript
warroom.resizeMiniApp('full') // half, taskpane
```
#### warroom.setReplyMessage()
```javascript
warroom.setReplyMessage({ text: 'Message' })
```
-----------