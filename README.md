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
window.getClientInformation().then(client => {

})
```
#### window.getSubject()
```javascript
window.getSubject().then(subject => {

})
```

#### warroom.getCurrentAgent()
```javascript
window.getCurrentAgent().then(agent => {

})
```

#### warroom.getCurrentThread()
```javascript
window.getCurrentThread().then(thread => {

})
```

#### warroom.getCurrentCase()
```javascript
window.getCurrentThread().then(thread => {

})
```

#### warroom.getCurrentUser()
```javascript
window.getCurrentUser().then(user => {

})
```

#### warroom.getUserCaseHistory()
```javascript
window.getUserCaseHistory({socialIdList: ["wisesightofficial", "wisesighttwitter", "w!s3zight"]}).then(history => {

})
```
-----------
### Event listeners type methods 

#### warroom.onNewCase()

#### warroom.onAssignedCase()

#### warroom.onReply()

#### warroom.onReplyFormChange()

#### warroom.onTagged()

#### warroom.onCloseCase()

#### warroom.onFilterChanged()

#### warroom.onAgentStatusChanged()

#### warroom.onRefreshThread()

#### warroom.onFocusPost()

### Other type methods
-----------