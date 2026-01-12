const data = {
  currentUser: {
    image: {
      png: "./images/avatars/pdp.png",
      webp: "./images/avatars/pdp.webp",
    },
    username: "User9904829",
  },
  comments: [
    {
      parent: 0,
      id: 1,
      content: `
Technologia listen to us

      I used to think the idea that our phones were listening was pure paranoia. “They’d need so much data to record everything,” I told myself, “and bandwidth doesn’t grow on trees.” So I kept Alexa on my kitchen counter, left “Hey Siri” enabled, and never once questioned why ads felt… too timely.
      
      Then I read the BBC experiment where researchers played 30 minutes of cat food ads near two phones—with full permissions granted to Facebook, Instagram, YouTube, etc.—and found zero pet-related ads afterward. Data usage stayed low. No spikes. No surreptitious uploads. That study convinced me: they’re not recording us—at least, not in the way we imagine. Facebook, Google, Apple—they all deny using passive audio for ads, and the forensic evidence backs them up. Even MetaRouter points out: if they were doing it at scale, the legal, PR, and technical fallout would be catastrophic. It’s just not worth it—when they already know so much.

      Because here’s what is happening: they’re not listening with microphones—they’re listening with algorithms. Your IP address, your location pings, the apps you open at 2 a.m., the friends you follow (and what they like), the Wi-Fi networks you connect to… All of it gets woven into a behavioral tapestry so dense, so predictive, that it feels like mind-reading. As one security researcher put it: “They now have the ability to effectively know what you could be interested in before even you do.” And honestly? That’s more unsettling than any microphone. It’s not Big Brother hearing you. It’s Big Brother inferring you—so accurately, it blurs the line between coincidence and clairvoyance.

      I don’t cover my camera anymore. But I did disable “Hey Google,” delete three years of voice history, and turned off mic access for every app except WhatsApp and my voice memos. Not because I think they’re eavesdropping—but because I finally understood: they don’t need to.

      Sources :
“What your Alexa smart speaker knows about you” — by Jeremy Ettinghausen, The GuardianWeekly, VOL. 212 No.22
https://www.bbc.com/news/technology-49585682 | https://www.reddit.com/r/NoStupidQuestions/comments/1jn28mf/do_our_devices_actually_listen_to_us_when_were | https://www.expressvpn.com/blog/is-my-phone-listening-to-me/#:~:text=Is%20my%20phone%20always%20listening,the%20wake%20command%20is%20triggered | https://www.metarouter.io/post/do-our-smart-devices-listen-to-us`,
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/pdp.png",
          webp: "./images/avatars/pdp.webp",
        },
        username: "anonymous",
      },
      replies: [],
    },
    {
      parent: 0,
      id: 2,
      content:
        "About Instagram… Personally, I’ve already had scary moments like that. When I talk about a subject out loud — and then, right after i open Instagram, Twitter, or Facebook — I instantly see posts or ads about it… Even though i’ve never searched for it before. Like it just… pops from nowhere.",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/pdp.png",
          webp: "./images/avatars/pdp.webp",
        },
        username: "L_H",
      },
      replies: [
        {
          parent: 2,
          id: 1,
          content: `Honestly? It’s not even about ads anymore.

Last week, I was helping my mum choose a hearing aid — just a 10 minute chat in her living room, phone in my bag, screen off.
That evening, her Facebook feed (she’s 72, barely uses it) was flooded with hearing‑aid reviews, audiologist ads… In her language, not mine.
Her phone wasn’t even nearby.

So either:
• My phone picked up her voice through fabric, inferred age/location context, and fed data to Meta’s “lookalike audience” targeting,
• Or… my contact sync linked her number, and her own sparse activity (a single login 3 months ago) was enough to “reactivate” her profile with my inferred intent.
Either way i felt like I’d accidentally doxxed her. With kindness.`,
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "L_H",
          user: {
            image: {
              png: "./images/avatars/pdp.png",
              webp: "./images/avatars/pdp.webp",
            },
            username: "krikrou_",
          },
        },
        {
          parent: 2,
          id: 1,
          content: `<<This

I’ve tested this with colleagues: same script, same room, same phone settings.

Result? If your contact list includes someone who recently searched for “divorce lawyer” or “IVF clinic”, and you mention related keywords near them—even jokingly—your shared social graphs light up.

It’s called cohort-based inference.
     Apple’s App Tracking Transparency (ATT) made it harder to track you—so platforms shifted to tracking your family, your friends, yourself. Basicaly your ecosystem.

You’re not the target, you’re the bridge. And... that’s ethically wild.`,
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "krikrou_",
          user: {
            image: {
              png: "./images/avatars/pdp.png",
              webp: "./images/avatars/pdp.webp",
            },
            username: "user8374202",
          },
        },
      ],
    },
  ],
};
function appendFrag(frag, parent) {
  var children = [].slice.call(frag.childNodes, 0);
  parent.appendChild(frag);
  //console.log(children);
  return children[1];
}

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getDisplayNameFromUrl(url) {
  try {
    const u = new URL(url);
    let host = u.hostname.replace(/^www\./, '');
    const map = {
      'bbc.com': 'BBC',
      'reddit.com': 'Reddit',
      'expressvpn.com': 'ExpressVPN',
      'metarouter.io': 'MetaRouter',
      'guardianweekly.com': 'The Guardian Weekly',
      'theguardian.com': 'The Guardian'
    };
    if (map[host]) return map[host];
    const name = host.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  } catch (e) {
    return url;
  }
}

function linkify(text) {
  if (typeof text !== 'string') return '';
  const urlRegex = /https?:\/\/[^\s)]+/g;
  let lastIndex = 0;
  let out = '';
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    out += escapeHtml(text.slice(lastIndex, match.index));
    const url = match[0];
    const safeUrl = escapeHtml(url);
    const display = escapeHtml(getDisplayNameFromUrl(url));
    out += `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${display}</a>`;
    lastIndex = urlRegex.lastIndex;
  }
  out += escapeHtml(text.slice(lastIndex));
  return out;
}

const addComment = (body, parentId, replyTo = undefined) => {
  let commentParent =
    parentId === 0
      ? data.comments
      : data.comments.filter((c) => c.id == parentId)[0].replies;
  let newComment = {
    parent: parentId,
    id:
      commentParent.length == 0
        ? 1
        : commentParent[commentParent.length - 1].id + 1,
    content: body,
    createdAt: "Now",
    replyingTo: replyTo,
    score: 0,
    replies: parent == 0 ? [] : undefined,
    user: data.currentUser,
  };
  commentParent.push(newComment);
  initComments();
};
const deleteComment = (commentObject) => {
  if (commentObject.parent == 0) {
    data.comments = data.comments.filter((e) => e != commentObject);
  } else {
    data.comments.filter((e) => e.id === commentObject.parent)[0].replies =
      data.comments
        .filter((e) => e.id === commentObject.parent)[0]
        .replies.filter((e) => e != commentObject);
  }
  initComments();
};

const promptDel = (commentObject) => {
  const modalWrp = document.querySelector(".modal-wrp");
  modalWrp.classList.remove("invisible");
  modalWrp.querySelector(".yes").addEventListener("click", () => {
    deleteComment(commentObject);
    modalWrp.classList.add("invisible");
  });
  modalWrp.querySelector(".no").addEventListener("click", () => {
    modalWrp.classList.add("invisible");
  });
};

const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
  if (parent.querySelectorAll(".reply-input")) {
    parent.querySelectorAll(".reply-input").forEach((e) => {
      e.remove();
    });
  }
  const inputTemplate = document.querySelector(".reply-input-template");
  const inputNode = inputTemplate.content.cloneNode(true);
  const addedInput = appendFrag(inputNode, parent);
  addedInput.querySelector(".bu-primary").addEventListener("click", () => {
    let commentBody = addedInput.querySelector(".cmnt-input").value;
    if (commentBody.length == 0) return;
    addComment(commentBody, parentId, replyTo);
  });
};

const createCommentNode = (commentObject) => {
  const commentTemplate = document.querySelector(".comment-template");
  var commentNode = commentTemplate.content.cloneNode(true);
  commentNode.querySelector(".usr-name").textContent =
    commentObject.user.username;
  commentNode.querySelector(".usr-img").src = commentObject.user.image.webp;
  commentNode.querySelector(".score-number").textContent = commentObject.score;
  commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt;
  const cBodyEl = commentNode.querySelector('.c-body');
  if (commentObject.content && commentObject.content.length > 0) {
    cBodyEl.innerHTML = linkify(commentObject.content).replace(/\n/g, '<br>');
  } else {
    cBodyEl.textContent = '';
  }
  if (commentObject.replyingTo)
    commentNode.querySelector(".reply-to").textContent =
      "@" + commentObject.replyingTo;

  commentNode.querySelector(".score-plus").addEventListener("click", () => {
    commentObject.score++;
    initComments();
  });

  commentNode.querySelector(".score-minus").addEventListener("click", () => {
    commentObject.score--;
    if (commentObject.score < 0) commentObject.score = 0;
    initComments();
  });
  if (commentObject.user.username == data.currentUser.username) {
    commentNode.querySelector(".comment").classList.add("this-user");
    commentNode.querySelector(".delete").addEventListener("click", () => {
      promptDel(commentObject);
    });
    commentNode.querySelector(".edit").addEventListener("click", (e) => {
      const path = e.path[3].querySelector(".c-body");
      if (
        path.getAttribute("contenteditable") == false ||
        path.getAttribute("contenteditable") == null
      ) {
        path.setAttribute("contenteditable", true);
        path.focus()
      } else {
        path.removeAttribute("contenteditable");
      }
      
    });
    return commentNode;
  }
  return commentNode;
};

const appendComment = (parentNode, commentNode, parentId) => {
  const bu_reply = commentNode.querySelector(".reply");
  // parentNode.appendChild(commentNode);
  const appendedCmnt = appendFrag(commentNode, parentNode);
  const replyTo = appendedCmnt.querySelector(".usr-name").textContent;
  bu_reply.addEventListener("click", () => {
    if (parentNode.classList.contains("replies")) {
      spawnReplyInput(parentNode, parentId, replyTo);
    } else {
      //console.log(appendedCmnt.querySelector(".replies"));
      spawnReplyInput(
        appendedCmnt.querySelector(".replies"),
        parentId,
        replyTo
      );
    }
  });
};

function initComments(
  commentList = data.comments,
  parent = document.querySelector(".comments-wrp")
) {
  parent.innerHTML = "";
  commentList.forEach((element) => {
    var parentId = element.parent == 0 ? element.id : element.parent;
    const comment_node = createCommentNode(element);
    if (element.replies && element.replies.length > 0) {
      initComments(element.replies, comment_node.querySelector(".replies"));
    }
    appendComment(parent, comment_node, parentId);
  });
}

initComments();
const cmntInput = document.querySelector(".reply-input");
cmntInput.querySelector(".bu-primary").addEventListener("click", () => {
  let commentBody = cmntInput.querySelector(".cmnt-input").value;
  if (commentBody.length == 0) return;
  addComment(commentBody, 0);
  cmntInput.querySelector(".cmnt-input").value = "";
});

// addComment("Hello ! It works !!",0);
