var mockdata = null;
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6NzAsImNsaWVudE5hbWUiOiJXSVNFU0lHSFQiLCJ1c2VySWQiOjEsInVzZXJOYW1lIjoiZGVtbyIsIm1pbmlhcHBJZCI6ImRlbW8jODI1MSIsIm1pbmlhcHBOYW1lIjoiZGVtbyIsImlhdCI6MTY2MDAyMTMzNiwiaXNzIjoid2Fycm9vbSJ9.tt1d8gwsEP8I6IWaq-uJp2QPN_RnkU3ES7ILNPdZAuu3dx6N66aj3sLjVt2Xt2kcaMT5iw_T6a3HrfOlDUrKH3KUiME3nBNvkrdrpbJNsJgIvRx_wf1dN3esRYumPoAuOqI3xx8MyR9aVJOzW1EMxm2qaZVXD4oXI564KzgDLTiATQTJVUgSxoZjEck7VzgDNlwQi1C4v615C5mVyMt8bHOncCzDgz_QPpFqo_QVd8rVXbQe6K0IOeEmPs7F8EvszkMeuMwz1HSKLsLLCf5FmIFmVok4xo3ebPiV31acbCu73j7m-Q8M1jRftLHn4vGv4yLWf5GaZODs7M3EoAuoDw';

document.getElementById("load-miniapp").addEventListener("click", async () => {
  await loadMiniApp();
  iFrameResize(
    { checkOrigin: false, heightCalculationMethod: "bodyScroll" },
    "#mini-app"
  );
});

window.addEventListener("load", async () => {
  const mockDataResponse = await fetch("/mocked-data.json");
  mockdata = await mockDataResponse.json();
});

async function changeMode(type) {
  if (type === "taskpane") {
    await resizeMiniApp("taskpane");
    document.getElementById("warroom-controller").style.display = "block";
  }

  if (type === "setting") {
    await resizeMiniApp("full");
    document.getElementById("warroom-controller").style.display = "none";
  }
}

async function loadMiniApp() {
  const miniAppUrl = document.getElementById("miniapp-url").value;
  document.getElementById(
    "mini-app-container"
  ).innerHTML = `<div id="loading" class="spinner-grow text-secondary" role="status" style="margin-top: 30px;">
    <span class="visually-hidden">Loading...</span>
  </div><iframe id="mini-app" src="${miniAppUrl}?token=${token}&mode=devtool"></iframe>`;
}

async function setMessageToMiniApp(eventName, payload) {
  document
    .getElementById("mini-app")
    .contentWindow.postMessage(
      { provider: "warroom", event: eventName, payload: payload, token: token },
      "*"
    );
}

async function onFocusPost(profileID) {
  const miniAppContainer = document.getElementById("mini-app-container");
  await setMessageToMiniApp(
    "response-to:send:on-focus-post",
    mockdata.social_user[profileID]
  );
}

function closeCase(caseId) {
  setMessageToMiniApp(
    "response-to:send:on-close-case",
    mockdata.case[caseId].close
  );
}

function assignCase(caseId) {
  setMessageToMiniApp(
    "response-to:send:on-assigned-case",
    mockdata.case[caseId].assign
  );
}

function newCase(caseId) {
  setMessageToMiniApp(
    "response-to:send:on-new-case",
    mockdata.case[caseId].new
  );
}

function tagMessage(tag) {
  const messageData = mockdata.post[0];
  messageData.tag = tag;
  setMessageToMiniApp("response-to:send:on-tag-message", messageData);
}

function formChange() {
  setMessageToMiniApp("response-to:send:on-form-change", {
    text: document.getElementById("reply-text").value
  });
}

function reply() {
  const messageData = mockdata.post[0];
  messageData.reply_text = document.getElementById("reply-text").value;
  setMessageToMiniApp("response-to:send:on-reply", messageData);
}

function changeAgentStatus(staus) {
  const agentData = mockdata.agent;
  agentData.status = staus;
  setMessageToMiniApp("response-to:send:agent-status-changed", agentData);
}

function filterChanged(staus) {
  setMessageToMiniApp("response-to:send:agent-filter-changed", {
    time: new Date()
  });
}

function refreshThread(staus) {
  setMessageToMiniApp("response-to:send:agent-refresh-thread", {
    time: new Date()
  });
}

function resizeMiniApp(size) {
  const miniAppContainer = document.getElementById("mini-app-container");
  if (size !== "close") {
    miniAppContainer.classList.remove("col-3");
    miniAppContainer.classList.remove("col-6");
    miniAppContainer.classList.remove("col-12");
  }
  if (size === "full") {
    miniAppContainer.classList.add("col-12");
  } else if (size === "half") {
    miniAppContainer.classList.add("col-6");
  } else if (size === "taskpane") {
    miniAppContainer.classList.add("col-3");
  } else if (size === "close") {
    miniAppContainer.removeChild(miniAppContainer.childNodes[1]);
  }
}

window.addEventListener(
  "message",
  async event => {
    if (typeof event.data === 'object') {
      if ("warroom-miniapp-type" in event.data) {
        console.log("[WARROOM]", event.data);
        switch (event.data.event) {
          case "status:init":
            setMessageToMiniApp("response-to:status:init", {
              time: new Date()
            });
            document.getElementById("loading").style.display = "none";
            document.getElementById("mini-app").classList.remove("offscreen");
            break;
          case "send:set-reply-message":
            document.getElementById("reply-text").value =
              event.data.payload.text;
            break;
          case "get:client-information":
            setMessageToMiniApp(
              "response-to:get:client-information",
              mockdata.client
            );
            break;
          case "get:subject":
            setMessageToMiniApp("response-to:get:subject", mockdata.subject);
            break;
          case "get:current-thread":
            setMessageToMiniApp(
              "response-to:get:current-thread",
              mockdata.thread
            );
            break;
          case "get:current-case":
            setMessageToMiniApp(
              "response-to:get:current-case",
              mockdata.case[0].new
            );
            break;
          case "get:current-agent":
            setMessageToMiniApp(
              "response-to:get:current-agent",
              mockdata.agent
            );
            break;
          case "get:current-user":
            setMessageToMiniApp(
              "response-to:get:current-user",
              mockdata.social_user[0]
            );
            break;
          case "get:user-case-history":
            setMessageToMiniApp(
              "response-to:get:user-case-history",
              mockdata.caseHistory
            );
            break;
          case "control:resize":
            resizeMiniApp(event.data.payload.size);
            break;
          default:
        }
      }
    }
  },
  false
);
