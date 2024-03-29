# WARROOM Mini App SDK

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

| Method               	| Is available on Working page 	| Is available on Setting |
|----------------------	|:---------------------------:	|:----------------------:|
| getClientInformation 	|       ✅      	|         ✅   | 
| getSubject           	|       ✅      	|         🚫  |
| getCurrentAgent      	|       ✅      	|          ✅     |                                                                          
| getCurrentThread     	|       ✅      	|          🚫     |                                                                            
| getUserCaseHistory   	|       ✅      	|           🚫      |
| onNewCase            	|       ✅      	|           🚫       |                                                                        
| onAssignedCase       	|       ✅      	|           🚫       |                                                                        
| onReply              	|       ✅     	 |           🚫       |                                                                       	
| onReplyFormChange    	|       🚧       |            🚫       |                                                                      	
| onTagged             	|       ✅      	|            🚫      |                                                                        
| onCloseCase          	|       ✅       |            🚫      |                                                                       	
| onFilterChanged      	|       🚧       |            🚫      |                                                                       	
| onAgentStatusChanged 	|       🚧       |            🚫      |                                                                      	
| onRefreshThread      	|       🚧       |            🚫      |                                                                       	
| onFocusPost          	|       ✅      	|            🚫      |                                                                        
| resizeMiniApp        	|       🚧       |            🚫      |                                                                       	
| setReplyMessage      	|       ✅       |            🚫      | 
| getCurrentCases       |       🚧       |            🚫      |  
| getCurrentUser       |       🚧       |            🚫      |  

### Init
Init Application before use sdk
```javascript
warroom.init({ appType:'taskpane', appId: 'demo#8251' }).then((result) => {
 // Complete init
});
```

### Request type methods 
Collecting the data from WARROOM which are as follows.

#### warroom.getClientInformation()

> Collecting the client or user’s data.

```javascript
warroom.getClientInformation().then((client) => {
  // {
  //     "client_id": 70,
  //     "client_name": "Demo"
  // }
});
```

#### window.getSubject()

> Collect the subject’s data from the message box currently in use.

```javascript
warroom.getSubject().then((subject) => {
  // {
  //     "subject_id": 11236,
  //     "subject_name": "Green Curry (Comment Page)",
  //     "subject_client_id": 70,
  //     "subject_type": "facebook",
  //     "subject_facebook_id": "503815916439094"
  // }
});
```

#### warroom.getCurrentAgent()

> Collecting the data of the agent or person who is currently working

```javascript
warroom.getCurrentAgent().then((agent) => {
  // {
  //     "agent_id": 24,
  //     "agent_name": "Green Curry",
  //     "agent_profile_picture": "https://s3-ap-southeast-1.amazonaws.com/warroom-sg/2a092c4d324951c3e3380579091b3ca5.jpg",
  //     "agent_employee_id": "User_01",
  //     "agent_client_id": 70,
  //     "agent_status": "active"
  // }
});
```

#### warroom.getCurrentThread()

> Collecting the data of the thread or subject which is currently active

```javascript
warroom.getCurrentThread().then((thread) => {
  // {
  //     "thread_id": 30957229,
  //     "thread_type": "Facebook",
  //     "thread_identity_id": "503815916439094_1754472711373402",
  //     "thread_subject_id": 11236,
  //     "thread_client_id": 70
  // }
});
```

#### warroom.getCurrentCase()

> Collecting the data of the case, messages you’re interested in or the problem that needs a solution.

```javascript
warroom.getCurrentCase().then((thread) => {
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
});
```

#### warroom.getCurrentUser()

> Collecting the data of the user or client which we’re currently talking to.

```javascript
warroom.getCurrentUser().then((user) => {
  // {
  //     "id" : 10,
  //     "displayname" : "Bean Curry",
  //     "social_id" : "503815916439094",
  //     "type" : "Twitter",
  //     "url_picture" : "https:\/\/twitter.com/pic/verygood.jpg",
  //     "latest_fetch" : "2021-07-29T08:33:17Z"
  // }
});
```

#### warroom.getUserCaseHistory()

> Collecting the data of case history or the solution history including the matter that we received in the past.

```javascript
warroom.getUserCaseHistory({ socialIdList: ["wisesightofficial", "wisesighttwitter", "w!s3zight"] }).then((history) => {
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
});
```

---

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
    // {
    //     "post_id": 1490806576,
    //     "post_comment_no": "123.00000",
    //     "post_date": "2022-07-27 16:36:18",
    //     "post_type": "comment",
    //     "post_author_id": 28024228,
    //     "author_displayname": "R Si Siwakorn",
    //     "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=4695683963824186&width=1024&ext=1662180982&hash=AeTYs0djEdkU8dPVfkY",
    //     "post_meta": {
    //         "post_identity_id": "m_rJ3xEli_--P3GltaXfGYzThgZBdZ1Q1QJ_A4Xt3-JAkPLs3GxcSAL-lDA4HzqT9kzGpuH5UlV8jiB0pu2IWzWA"
    //     },
    //     "post_identity_id": "371efbe1af9cb2e1bc4ae792c1527b2f",
    //     "post_sentiment": "neutral",
    //     "post_note": null,
    //     "post_body": "16.36",
    //     "author_social_id": "4695683963824186",
    //     "post_parent_id": 0,
    //     "case_current_case_audit": {
    //         "_id": "33935689_closed_1658914618013",
    //         "action_at": "2022-07-27T09:36:58.013Z",
    //         "action_comment": "",
    //         "action_date": "2022-07-27",
    //         "case_action": "Close",
    //         "case_previous_owner": null,
    //         "case_action_by": {
    //             "display_name": "Green Curry",
    //             "employee_id": "5701447",
    //             "id": 24,
    //             "username": "demo"
    //         },
    //         "case_action_to": null,
    //         "case_assigned_at": null,
    //         "case_assigned_comment": null,
    //         "case_audit_edited": false,
    //         "case_audit_edited_at": null,
    //         "case_created_at": "2022-07-27T09:36:20.387Z",
    //         "case_id": 33935689,
    //         "case_meta": null,
    //         "case_new_date": "2022-07-27T09:36:20.387Z",
    //         "case_status_from": "New Comment",
    //         "case_status_to": "Closed",
    //         "channel": "Facebook Inbox",
    //         "client_id": 70,
    //         "client_name": "Demo",
    //         "close_reason_level_1": "ข้อความที่โดนซ่อน (Hidden)",
    //         "close_reason_level_2": "NT Broadband BIZ",
    //         "close_reason_level_3": null,
    //         "close_reason_level_4": null,
    //         "close_reason_level_5": null,
    //         "close_reason_level_6": null,
    //         "close_reason_level_7": null,
    //         "close_reason_level_8": null,
    //         "conversation": [
    //             {
    //                 "post_id": "1490806547",
    //                 "comment_no": "116.00000",
    //                 "post_identity_id": "43c56150717505885c2767742919feb7",
    //                 "post_author_id": "28024228",
    //                 "post_author_type": "Customer",
    //                 "post_attachment": [
    //                     {
    //                         "patt_id": 2233584577,
    //                         "patt_url": "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/293054243_3379865328967560_4164129602607716021_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=58c789&_nc_ohc=v148SKfFrscAX91vZ0r&_nc_ht=scontent-xsp1-3.xx&edm=AFbNatQEAAAA&oh=03_AVIJRffERGMdccW15lCT0Bssjc6dkwVnlKZG2DOfT6p5-w&oe=630864BD",
    //                         "patt_filename": "image-1058453081480824",
    //                         "patt_post_id": 1490806547,
    //                         "patt_mime_type": "image/jpeg",
    //                         "patt_disposition": null
    //                     },
    //                     {
    //                         "patt_id": 2233584578,
    //                         "patt_url": "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/292545429_748304769771258_703882147306379457_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=58c789&_nc_ohc=-TH28Dv9cFMAX9_eN7w&_nc_ht=scontent-xsp1-2.xx&edm=AFbNatQEAAAA&oh=03_AVJAvVViz7oTu3Qx5wExtx37xpELBm36lT9WgtOht_fkdg&oe=630634E7",
    //                         "patt_filename": "image-430641502326256",
    //                         "patt_post_id": 1490806547,
    //                         "patt_mime_type": "image/jpeg",
    //                         "patt_disposition": null
    //                     }
    //                 ],
    //                 "author_social_id": "4695683963824186",
    //                 "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=4695683963824186&width=1024&ext=1661502609&hash=AeS-rjGaGd6k7DZJZS0",
    //                 "post_author_name": "R Si Siwakorn",
    //                 "post_body": "",
    //                 "post_date": "2022-07-27 14:03:03",
    //                 "post_type": "comment",
    //                 "thread_type": "FacebookInbox"
    //             },
    //             {
    //                 "post_id": "1490806569",
    //                 "comment_no": "121.00000",
    //                 "post_identity_id": "5ca428745a22d99d3a00aa9f36273017",
    //                 "post_author_id": "28024228",
    //                 "post_author_type": "Customer",
    //                 "post_attachment": [],
    //                 "author_social_id": "4695683963824186",
    //                 "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=4695683963824186&width=1024&ext=1661502609&hash=AeS-rjGaGd6k7DZJZS0",
    //                 "post_author_name": "R Si Siwakorn",
    //                 "post_body": "15.33 :)",
    //                 "post_date": "2022-07-27 15:33:23",
    //                 "post_type": "comment",
    //                 "thread_type": "FacebookInbox"
    //             },
    //             {
    //                 "post_id": "1490806573",
    //                 "comment_no": "122.00000",
    //                 "post_identity_id": "ef96744f5cef7e6e4b4a26821f4add9f",
    //                 "post_author_id": "28024228",
    //                 "post_author_type": "Customer",
    //                 "post_attachment": [],
    //                 "author_social_id": "4695683963824186",
    //                 "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=4695683963824186&width=1024&ext=1661502609&hash=AeS-rjGaGd6k7DZJZS0",
    //                 "post_author_name": "R Si Siwakorn",
    //                 "post_body": "15.44",
    //                 "post_date": "2022-07-27 15:44:29",
    //                 "post_type": "comment",
    //                 "thread_type": "FacebookInbox"
    //             },
    //             {
    //                 "post_id": "1490806576",
    //                 "comment_no": "123.00000",
    //                 "post_identity_id": "371efbe1af9cb2e1bc4ae792c1527b2f",
    //                 "post_author_id": "28024228",
    //                 "post_author_type": "Customer",
    //                 "post_attachment": [],
    //                 "author_social_id": "4695683963824186",
    //                 "author_url_picture": "https://platform-lookaside.fbsbx.com/platform/profilepic/?psid=4695683963824186&width=1024&ext=1661502609&hash=AeS-rjGaGd6k7DZJZS0",
    //                 "post_author_name": "R Si Siwakorn",
    //                 "post_body": "16.36",
    //                 "post_date": "2022-07-27 16:36:18",
    //                 "post_type": "comment",
    //                 "thread_type": "FacebookInbox"
    //             }
    //         ],
    //         "conversation_id_list": [
    //             "1490806547",
    //             "1490806569",
    //             "1490806573",
    //             "1490806576"
    //         ],
    //         "external_link": "https://business.facebook.com/greencurryth/inbox/4556073344477269",
    //         "first_response_time": 0,
    //         "internal_link": "https://warroom.wisesight.com/thread/21224737/1490806576",
    //         "mood": {
    //             "id": 57,
    //             "name": "Positive",
    //             "type": "positive"
    //         },
    //         "post_id": 1490806576,
    //         "post_title": null,
    //         "post_body": "16.36",
    //         "post_type": "Inbox",
    //         "post_author_name": "R Si Siwakorn",
    //         "post_author_id": 28024228,
    //         "post_author_social_id": "4695683963824186",
    //         "post_date": "2022-07-27",
    //         "post_at": "2022-07-27T09:36:18.000Z",
    //         "post_identity_id": "371efbe1af9cb2e1bc4ae792c1527b2f",
    //         "post_sentiment": "neutral",
    //         "post_comment_no": "123.00000",
    //         "reject_reason": null,
    //         "sla": 0.67,
    //         "subject_id": 4294967232,
    //         "subject_name": "Green Curry",
    //         "thread_id": 21224737,
    //         "time_from_assigned_to_closed": null,
    //         "time_from_new_to_assigned": null,
    //         "time_from_new_to_closed": 0.63,
    //         "post_tags": [],
    //         "custom_form": {
    //             "email_subject": "Send 16.36",
    //             "email_lists": {
    //                 "to": "siwakorn.r@wisesight.com",
    //                 "cc": null
    //             }
    //         },
    //         "created_at": "2022-07-27T09:36:20.388Z",
    //         "updated_at": "2022-07-27T09:36:20.388Z",
    //         "deleted_at": null
    //     },
    //     "case_meta": {
    //         "email_subject": "Send 16.36",
    //         "email_lists": {
    //             "to": "siwakorn.r@wisesight.com",
    //             "cc": null
    //         }
    //     },
    //     "case_id": 33935689,
    //     "post_by_username": null,
    //     "post_by_user_name": null,
    //     "close_reason_hierachy": [
    //         {
    //             "name": "ข้อความที่โดนซ่อน (Hidden)"
    //         },
    //         {
    //             "name": "NT Broadband BIZ"
    //         }
    //     ],
    //     "attachments": [],
    //     "external_link": "https://business.facebook.com/greencurryth/inbox/4556073344477269",
    //     "editing": false,
    //     "$$hashKey": "object:3150",
    //     "agent": {
    //         "agent_id": 24,
    //         "agent_name": "Green Curry",
    //         "agent_username": "demo",
    //         "agent_profile_picture": "https://s3-ap-southeast-1.amazonaws.com/warroom-sg/3936ff6639d2a0bf63dbf5eefe2c2cd0.jpg",
    //         "agent_employee_id": "5701447",
    //         "agent_client_id": 70,
    //         "agent_status": "active"
    //     },
    //     "message_payload": [
    //         {
    //             "type": "text",
    //             "text": "16.37"
    //         }
    //     ]
    // }
});
```

#### warroom.onReplyFormChange()

> When there is an edit at the answer box.

```javascript
warroom.onReplyFormChange((message) => {});
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
});
```

#### warroom.onRefreshThread()

> When refreshing the active thread.

```javascript
warroom.onRefreshThread((status) => {
  // { time: new Date() }
});
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
});
```

### Other type methods

Sending other data from Miniapp to WARROOM

#### warroom.resizeMiniApp()

> Adjusting the size of currently active Miniapp.

```javascript
warroom.resizeMiniApp("full"); // half, taskpane
```

#### warroom.setReplyMessage()

> Editing or changing the answer in the latest used answer box.

```javascript
warroom.setReplyMessage({ text: "Message" });
```

---

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

---

### Build and Run Dockerfile

```
docker build -t dev-tools-app .
docker run -dp 8009:3000 dev-tools-app
```
