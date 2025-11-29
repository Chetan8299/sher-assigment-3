const reels = [
  {
    username: "travel_with_aarav",
    caption: "Sunset vibes hitting different today 🌅",
    likeCount: 12800,
    isLiked: false,
    commentCount: 320,
    video: "https://www.pexels.com/download/video/4761250/",
    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 150,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "fitness_rhea",
    caption: "No excuses. Just progress 💪🔥",
    likeCount: 24500,
    isLiked: true,
    commentCount: 540,
    video: "https://www.pexels.com/download/video/4260553/",
    userprofile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 220,
    isFollowed: true,
     isMuted: true
  },
  {
    username: "chef_kabir",
    caption: "Today's special: Creamy white sauce pasta 🍝✨",
    likeCount: 9800,
    isLiked: false,
    commentCount: 210,
    video: "https://www.pexels.com/download/video/4253149/",
    userprofile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 95,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "style_by_ishika",
    caption: "Weekend outfit inspiration 👗💖",
    likeCount: 16700,
    isLiked: true,
    commentCount: 480,
    video: "https://www.pexels.com/download/video/27989388/",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 130,
    isFollowed: true,
     isMuted: true
  },
  {
    username: "tech_samar",
    caption: "This gadget is insane 🤯🔥",
    likeCount: 5600,
    isLiked: false,
    commentCount: 140,
    video: "https://www.pexels.com/download/video/3971609/",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 70,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "dance_with_meera",
    caption: "Practicing my new choreography! 💃✨",
    likeCount: 21000,
    isLiked: true,
    commentCount: 600,
    video: "https://www.pexels.com/download/video/7102478/",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 260,
    isFollowed: true,
     isMuted: true
  },
  {
    username: "mountain_vivek",
    caption: "Hiking to the clouds ⛰️🌤️",
    likeCount: 3400,
    isLiked: false,
    commentCount: 80,
    video: "https://www.pexels.com/download/video/5787236/",
    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 40,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "gamer_arjun",
    caption: "New level unlocked 🎮🔥",
    likeCount: 15200,
    isLiked: true,
    commentCount: 350,
    video: "https://www.pexels.com/download/video/8128342/",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 180,
    isFollowed: true,
     isMuted: true
  },
  {
    username: "artist_sana",
    caption: "Blending colors until it feels right 🎨✨",
    likeCount: 6200,
    isLiked: false,
    commentCount: 120,
    video: "https://www.pexels.com/download/video/3796066/",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 55,
    isFollowed: false,
    isMuted: true
  },
  {
    username: "petlover_rahul",
    caption: "My dog is the real superstar 🐶❤️",
    likeCount: 18800,
    isLiked: true,
    commentCount: 500,
    video: "https://www.pexels.com/download/video/5501730/",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 210,
    isFollowed: true,
     isMuted: true
  },
];

const allReels = document.querySelector(".reels");

function addData() {
  let sum = "";
  reels.forEach(
    ({
      username,
      caption,
      likeCount,
      isLiked,
      commentCount,
      video,
      userprofile,
      shareCount,
      isFollowed,
      isMuted
    }, idx) => {
      sum += ` <div class="reel">
                <div id=${idx} class="mute">
                ${isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}
                </div>
            <video autoplay ${isMuted ? "muted" : ""} loop src=${video}></video>

            <!-- bottom text goes here -->
            <div class="bottom">
              <div class="user">
                <img
                  src=${userprofile}
                  alt=""
                />
                <h2>${username}</h2>
                <button id=${idx} class="follow">${isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <p>${caption}</p>
            </div>
            <!-- right buttons go here -->
            <div class="right">
              <div id=${idx} class="like-icon">${
                isLiked
                  ? '<i class="ri-heart-3-fill love"></i>'
                  : '<i class="ri-heart-3-line"></i>'
              }
                <h6>${likeCount}</h6>
              </div>
              <div class="comment-icon">
                <i class="ri-chat-3-line"></i>
                <h6>${commentCount}</h6>
              </div>
              <div class="share-icon">
                <i class="ri-share-forward-line"></i>
                <h6>${shareCount}</h6>
              </div>
              <div class="menu-icon">
                <i class="ri-more-2-fill"></i>
              </div>
            </div>
          </div>`;
    }
  );
  allReels.innerHTML = sum;
}

addData()

allReels.addEventListener('click', (dets) => {
  let idName = dets.target.id;
  let className = dets.target.className;
  console.log(reels[idName], className)
  if(className === "like-icon") {
    if(!reels[idName].isLiked) {
      reels[idName].isLiked = true;
      reels[idName].likeCount++;
    } else {
      reels[idName].isLiked = false;
      reels[idName].likeCount--;
    }

    addData();
  } else if(className === "follow") {
    if(!reels[idName].isFollowed) {
      reels[idName].isFollowed = true;
    } else {
      reels[idName].isFollowed = false;
    }

    addData();
  } else if(className === "mute") {
    if(reels[idName].isMuted) {
      reels[idName].isMuted = false;
    } else {
      reels[idName].isMuted = true;
    }

    addData();
  }
})