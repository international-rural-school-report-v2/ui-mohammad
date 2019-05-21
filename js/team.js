// Team Member Component
class TeamMember {
  constructor(name, title, img, github) {
    this.name = name;
    this.title = title;
    this.img = img;
    this.github = github;
    this.HTML = `<div class="team-member">
    <div class="member-img">
      <img src="${this.img}" />
    </div>
    <h3>${this.name}</h3>
    <p>${this.title}</p>
    <a class='button' target="_blank" href="${this.github}">GitHub</a>
  </div>`;
  }
  inject(parentElement) {
    parentElement.insertAdjacentHTML("beforeend", this.HTML);
  }
}

const list = document.querySelector(".team-members");

let team = [];

team.push(
  new TeamMember(
    "James Page",
    "Team Lead",
    "img/team/team-james.png",
    "https://github.com/jamespagedev"
  )
);
team.push(
  new TeamMember(
    "Mohammad Tourjoman",
    "UI Developer",
    "img/team/coverPhoto.jpg",
    "https://github.com/mtourj"
  )
);
team.push(
  new TeamMember(
    "Michael Hart",
    "UI Developer",
    "img/team/team-michael.png",
    "https://github.com/fromthehart"
  )
);
team.push(
  new TeamMember(
    "Kenneth Ridenour",
    "Frontend/React",
    "img/team/team-ken.jpeg",
    "https://github.com/ken1286"
  )
);
team.push(
  new TeamMember(
    "Matt Poloni",
    "Backend Developer",
    "img/team/team-matt.png",
    "https://github.com/matt-poloni"
  )
);

team.forEach(member => {
  member.inject(list);
});
