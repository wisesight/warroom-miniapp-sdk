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
warroom.getCurrentCase().then(thread => {
    // {
    //     "action_at": "2021-03-29T10:30:26.924Z",
    //     "action_comment": null,
    //     "action_date": "2021-03-29",
    //     "case_action": "Mark as Case",
    //     "case_previous_owner": null,
    //     "case_action_by": null,
    //     "case_action_to": null,
    //     "case_assigned_at": null,
    //     "case_assigned_comment": null,
    //     "case_audit_edited": false,
    //     "case_audit_edited_at": null,
    //     "case_created_at": "2021-03-29T10:30:26.924Z",
    //     "case_id": 67087208,
    //     "case_meta": null,
    //     "case_new_date": "2021-03-29T10:30:26.924Z",
    //     "case_status_from": null,
    //     "case_status_to": "New",
    //     "channel": "Facebook",
    //     "client_id": 70,
    //     "client_name": "Demo",
    //     "close_reason_level_1": null,
    //     "close_reason_level_2": null,
    //     "close_reason_level_3": null,
    //     "close_reason_level_4": null,
    //     "close_reason_level_5": null,
    //     "close_reason_level_6": null,
    //     "close_reason_level_7": null,
    //     "close_reason_level_8": null,
    //     "conversation": [],
    //     "conversation_id_list": [],
    //     "external_link": "https://www.facebook.com/1980334488787222",
    //     "first_response_time": null,
    //     "internal_link": "https://warroom.wisesight.com/thread/30957229/2208025060",
    //     "mood": null,
    //     "post_id": 2208025060,
    //     "post_title": null,
    //     "post_body": "สอบทด",
    //     "post_type": "Comment",
    //     "post_author_name": "Natthapong Somboonphattarakit",
    //     "post_author_id": 32280485,
    //     "post_author_social_id": "3417661834951760",
    //     "post_date": "2021-03-29",
    //     "post_at": "2021-03-29T10:30:19.000Z",
    //     "post_identity_id": "1754472711373402_1980334488787222",
    //     "post_sentiment": "neutral",
    //     "post_comment_no": "2.00000",
    //     "reject_reason": null,
    //     "sla": null,
    //     "subject_id": 11236,
    //     "subject_name": "Green Curry (Comment Page)",
    //     "thread_id": 30957229,
    //     "time_from_assigned_to_closed": null,
    //     "time_from_new_to_assigned": null,
    //     "time_from_new_to_closed": null,
    //     "post_tags": [],
    //     "custom_form": null
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
    // [
    //     {
    //         "action_at": "2021-03-29T10:30:26.924Z",
    //         "action_comment": null,
    //         "action_date": "2021-03-29",
    //         "case_action": "Mark as Case",
    //         "case_previous_owner": null,
    //         "case_action_by": null,
    //         "case_action_to": null,
    //         "case_assigned_at": null,
    //         "case_assigned_comment": null,
    //         "case_audit_edited": false,
    //         "case_audit_edited_at": null,
    //         "case_created_at": "2021-03-29T10:30:26.924Z",
    //         "case_id": 67087208,
    //         "case_meta": null,
    //         "case_new_date": "2021-03-29T10:30:26.924Z",
    //         "case_status_from": null,
    //         "case_status_to": "New",
    //         "channel": "Facebook",
    //         "client_id": 70,
    //         "client_name": "Demo",
    //         "close_reason_level_1": null,
    //         "close_reason_level_2": null,
    //         "close_reason_level_3": null,
    //         "close_reason_level_4": null,
    //         "close_reason_level_5": null,
    //         "close_reason_level_6": null,
    //         "close_reason_level_7": null,
    //         "close_reason_level_8": null,
    //         "conversation": [],
    //         "conversation_id_list": [],
    //         "external_link": "https://www.facebook.com/1980334488787222",
    //         "first_response_time": null,
    //         "internal_link": "https://warroom.wisesight.com/thread/30957229/2208025060",
    //         "mood": null,
    //         "post_id": 2208025060,
    //         "post_title": null,
    //         "post_body": "สอบทด",
    //         "post_type": "Comment",
    //         "post_author_name": "Natthapong Somboonphattarakit",
    //         "post_author_id": 32280485,
    //         "post_author_social_id": "3417661834951760",
    //         "post_date": "2021-03-29",
    //         "post_at": "2021-03-29T10:30:19.000Z",
    //         "post_identity_id": "1754472711373402_1980334488787222",
    //         "post_sentiment": "neutral",
    //         "post_comment_no": "2.00000",
    //         "reject_reason": null,
    //         "sla": null,
    //         "subject_id": 11236,
    //         "subject_name": "Green Curry (Comment Page)",
    //         "thread_id": 30957229,
    //         "time_from_assigned_to_closed": null,
    //         "time_from_new_to_assigned": null,
    //         "time_from_new_to_closed": null,
    //         "post_tags": [],
    //         "custom_form": null
    //     }
    // ]
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