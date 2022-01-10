# Warroom Mini App SDK

WARROOM Miniapp is an application helping your application easily connect with WARROOM by embedding the application’s iframe into WARROOM by connecting via WARROOM’s SDK. There are 3 connection types which are as follows.

## Development tools

```
yarn

yarn start

// Enter http://localhost:3000
```

## Get start

```html
<script src="https://cdn.jsdelivr.net/gh/wisesight/warroom-miniapp-sdk@main/dist/sdk.js"></script>
```
-----------
## Avaliable Methods

| Method               	| Is available 	| Note                                                                                    	|
|----------------------	|:------------:	|-----------------------------------------------------------------------------------------	|
| getClientInformation 	|       ✅      	|                                                                                         	|
| getSubject           	|       ✅      	|                                                                                         	|
| getCurrentAgent      	|       ✅      	|                                                                                         	|
| getCurrentThread     	|       ✅      	|                                                                                         	|
| getUserCaseHistory   	|       ✅      	| ทำงานได้ แต่ต้องส่ง socialIdList ใน payload มาให้ถูก                                          	|
| onNewCase            	|       ✅      	|                                                                                         	|
| onAssignedCase       	|       ✅      	|                                                                                         	|
| onReply              	|       ❌      	|                                                                                         	|
| onReplyFormChange    	|       ❌      	|                                                                                         	|
| onTagged             	|       ✅      	|                                                                                         	|
| onCloseCase          	|       ❌      	|                                                                                         	|
| onFilterChanged      	|       ❌      	|                                                                                         	|
| onAgentStatusChanged 	|       ❌      	|                                                                                         	|
| onRefreshThread      	|       ❌      	|                                                                                         	|
| onFocusPost          	|       ✅      	|                                                                                         	|
| resizeMiniApp        	|       ❌      	|                                                                                         	|
| setReplyMessage      	|       ❌      	|                                                                                       	|

### Request type methods 
Collecting the data from WARROOM which are as follows.
#### warroom.getClientInformation()
> Collecting the client or user’s data.
```javascript
warroom.getClientInformation().then(client => {
    // {
    //     "client_id": 70,
    //     "client_name": "Demo"
    // }
})
```
#### window.getSubject()
> Collect the subject’s data from the message box currently in use.
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
> Collecting the data of the agent or person who is currently working
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
> Collecting the data of the thread or subject which is currently active
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
> Collecting the data of the case, messages you’re interested in or the problem that needs a solution.
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
> Collecting the data of the user or client which we’re currently talking to.
```javascript
warroom.getCurrentUser().then(user => {
    // {
    //     "id" : 10,
    //     "displayname" : "Bean Curry",
    //     "social_id" : "503815916439094",
    //     "type" : "Twitter",
    //     "url_picture" : "https:\/\/twitter.com/pic/verygood.jpg",
    //     "latest_fetch" : "2021-07-29T08:33:17Z"
    // }
})
```

#### warroom.getUserCaseHistory()
> Collecting the data of case history or the solution history including the matter that we received in the past.
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
Sending the data from actions in WARROOM which are as follows.
#### warroom.onNewCase()
> When creating a new case.
```javascript
warroom.onNewCase((case) => {
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
#### warroom.onAssignedCase()
> When assigning a case.
```javascript
warroom.onAssignedCase((case) => {
    // {
    //     "action_at": "2021-07-29T08:57:54.760Z",
    //     "action_comment": "assign",
    //     "action_date": "2021-07-29",
    //     "case_action": "Assign",
    //     "case_previous_owner": null,
    //     "case_action_by": {
    //       "display_name": "Green Curry",
    //       "employee_id": "User_01",
    //       "id": 24,
    //       "username": "demo"
    //     },
    //     "case_action_to": {
    //       "display_name": "test",
    //       "employee_id": "",
    //       "id": 4104,
    //       "username": "testewewew"
    //     },
    //     "case_assigned_at": "2021-07-29T08:57:54.760Z",
    //     "case_assigned_comment": "assign",
    //     "case_audit_edited": false,
    //     "case_audit_edited_at": null,
    //     "case_created_at": "2021-03-29T10:30:26.924Z",
    //     "case_id": 67087208,
    //     "case_meta": null,
    //     "case_new_date": "2021-03-29T10:30:26.924Z",
    //     "case_status_from": "New",
    //     "case_status_to": "Assigned",
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
    //     "time_from_new_to_assigned": 47427.47,
    //     "time_from_new_to_closed": null,
    //     "post_tags": [],
    //     "custom_form": null
    // }
})
```
#### warroom.onReply()
> When answering a question.
```javascript
warroom.onReply((message) => {
})
```
#### warroom.onReplyFormChange()
> When there is an edit at the answer box.
```javascript
warroom.onReplyFormChange((message) => {
})
```
#### warroom.onTagged()
> When there is a tag attached on the post.
```javascript
warroom.onTagged((case) => {
    // {
    //     "post_id": 2208025058,
    //     "post_date": "2020-07-21 12:07:40",
    //     "thread_id": 30957229,
    //     "post_type": "fb_post",
    //     "post_author_name": "Green Curry",
    //     "post_body": "ทดลองอัพรูปหลายรูป123",
    //     "post_identity_id": "503815916439094_1754472711373402",
    //     "post_comment_no": "1.00000",
    //     "post_client_id": 70,
    //     "post_subject_id": 11236
    // }
})
```
#### warroom.onCloseCase()
> When closing the case.
```javascript
warroom.onCloseCase((case) => {
    // {
    //     "action_at": "2021-07-29T09:00:17.145Z",
    //     "action_comment": "reward sent",
    //     "action_date": "2021-07-29",
    //     "case_action": "Close",
    //     "case_previous_owner": {
    //       "display_name": "test",
    //       "employee_id": "",
    //       "id": 4104,
    //       "username": "testewewew"
    //     },
    //     "case_action_by": {
    //       "display_name": "Green Curry",
    //       "employee_id": "User_01",
    //       "id": 24,
    //       "username": "demo"
    //     },
    //     "case_action_to": null,
    //     "case_assigned_at": "2021-07-29T08:57:54.760Z",
    //     "case_assigned_comment": "assign",
    //     "case_audit_edited": false,
    //     "case_audit_edited_at": null,
    //     "case_created_at": "2021-03-29T10:30:26.924Z",
    //     "case_id": 67087208,
    //     "case_meta": null,
    //     "case_new_date": "2021-03-29T10:30:26.924Z",
    //     "case_status_from": "Assigned",
    //     "case_status_to": "Closed",
    //     "channel": "Facebook",
    //     "client_id": 70,
    //     "client_name": "Demo",
    //     "close_reason_level_1": "เข้าร่วมกิจกรรมประจำเดือน",
    //     "close_reason_level_2": "ยืนยันรับของรางวัล",
    //     "close_reason_level_3": null,
    //     "close_reason_level_4": null,
    //     "close_reason_level_5": null,
    //     "close_reason_level_6": null,
    //     "close_reason_level_7": null,
    //     "close_reason_level_8": null,
    //     "conversation": [
    //       {
    //         "post_id": 2208025060,
    //         "comment_no": "2.00000",
    //         "post_identity_id": "1754472711373402_1980334488787222",
    //         "post_author_id": 32280485,
    //         "post_author_type": "Customer",
    //         "post_attachment": [],
    //         "author_social_id": "3417661834951760",
    //         "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=3417661834951760&height=50&width=50&ext=1630139354&hash=AeSS7DncZ3cp8hGHDsg",
    //         "post_author_name": "Natthapong Somboonphattarakit",
    //         "post_body": "สอบทด",
    //         "post_date": "2021-03-29 17:30:19",
    //         "post_type": "comment",
    //         "thread_type": "Facebook"
    //       },
    //       {
    //         "post_id": 2471351247,
    //         "comment_no": "3.00000",
    //         "post_identity_id": "1754472711373402_2077825265704810",
    //         "post_author_id": 24305231,
    //         "post_author_type": "Customer",
    //         "post_attachment": [],
    //         "author_social_id": "2477493089002244",
    //         "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=2477493089002244&width=1024&ext=1630139353&hash=AeTvBUUxROlEAlcB6Gc",
    //         "post_author_name": "Suthitham Kerdchana",
    //         "post_body": "คอมมเม้นท์",
    //         "post_date": "2021-07-29 15:29:07",
    //         "post_type": "comment",
    //         "thread_type": "Facebook"
    //       }
    //     ],
    //     "conversation_id_list": [
    //       2208025060,
    //       2471351247
    //     ],
    //     "external_link": "https://www.facebook.com/1980334488787222",
    //     "first_response_time": 0,
    //     "internal_link": "https://warroom.wisesight.com/thread/30957229/2208025060",
    //     "mood": {
    //       "id": 57,
    //       "name": "Positive",
    //       "type": "positive"
    //     },
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
    //     "sla": 47429.97,
    //     "subject_id": 11236,
    //     "subject_name": "Green Curry (Comment Page)",
    //     "thread_id": 30957229,
    //     "time_from_assigned_to_closed": 2.38,
    //     "time_from_new_to_assigned": 47427.47,
    //     "time_from_new_to_closed": 47429.85,
    //     "post_tags": [],
    //     "custom_form": {
    //       "first_name": null,
    //       "last_name": null,
    //       "telephone_no": null,
    //       "identification_no": null,
    //       "email": null,
    //       "reason_level_1": null,
    //       "reason_level_2": null,
    //       "reason_level_3": null,
    //       "reason_level_4": null,
    //       "reason_level_5": null,
    //       "reason_level_6": null,
    //       "reason_level_7": null,
    //       "reason_level_8": null
    //     }
    //   }
    // }
})
```
#### warroom.onFilterChanged()

```javascript
warroom.onFilterChanged((case) => {
    // { time: new Date() }
})
```
#### warroom.onAgentStatusChanged()
> When changing the status of the agent who is currently working.
```javascript
warroom.onAgentStatusChanged((status) => {
    // { status: 'online' }
})
```
#### warroom.onRefreshThread()
> When refreshing the active thread.
```javascript
warroom.onRefreshThread((status) => {
    // { time: new Date() }
})
```
#### warroom.onFocusPost()
> When the post is clicked.
```javascript
warroom.onFocusPost((post) => {
    // {
    //     "post_id": 2208025058,
    //     "post_date": "2020-07-21 12:07:40",
    //     "thread_id": 30957229,
    //     "post_type": "fb_post",
    //     "post_author_name": "Green Curry",
    //     "post_body": "ทดลองอัพรูปหลายรูป123",
    //     "post_identity_id": "503815916439094_1754472711373402",
    //     "post_comment_no": "1.00000",
    //     "post_client_id": 70,
    //     "post_subject_id": 11236
    // }
})
```
### Other type methods
Sending other data from Miniapp to WARROOM
#### warroom.resizeMiniApp()
> Adjusting the size of currently active Miniapp.
```javascript
warroom.resizeMiniApp('full') // half, taskpane
```
#### warroom.setReplyMessage()
> Editing or changing the answer in the latest used answer box.
```javascript
warroom.setReplyMessage({ text: 'Message' })
```
-----------

### Refernace
> Possible return type of case channel
- Pantip
- Facebook
- Tweet
- FacebookInbox
- PantipInbox
- Website
- Email
- TwitterInbox
- Instagram
- Line
- GoogleBusinessReview
- GoogleBusinessQA
- LineAccountConnect
- WarroomConnectInbox
- WarroomConnect
- YouTube

-----------
