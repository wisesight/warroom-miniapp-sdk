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

})
```

#### warroom.getCurrentAgent()
```javascript
warroom.getCurrentAgent().then(agent => {

})
```

#### warroom.getCurrentThread()
```javascript
warroom.getCurrentThread().then(thread => {

})
```

#### warroom.getCurrentCase()
```javascript
warroom.getCurrentThread().then(thread => {

})
```

#### warroom.getCurrentUser()
```javascript
warroom.getCurrentUser().then(user => {

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