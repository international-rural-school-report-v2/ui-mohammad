// Team Member Component
class TeamMember {
  constructor(name, title, img) {
    this.name = name;
    this.title = title;
    this.img = img;
    this.HTML = `<div class="team-member">
    <div class="member-img">
      <img src="${this.img}" />
    </div>
    <h3>${this.name}</h3>
    <p>${this.title}</p>
  </div>`
  }
  inject (parentElement){
    parentElement.insertAdjacentHTML("beforeend", this.HTML);
  }
}

const list = document.querySelector(".team-members");

const james = new TeamMember('James Page', 'Team Lead', 'img/team/team-james.png');
const mohammad = new TeamMember('Mohammad Tourjoman', 'UI Developer', "img/team/coverPhoto.jpg");
const michael = new TeamMember('Michael Hart', 'UI Developer', "img/team/team-michael.png");
const kenneth = new TeamMember('Kenneth Ridenour', 'Frontend/React', "img/team/team-ken.jpeg");
const matt = new TeamMember('Matt Poloni', 'Backend Developer', "img/team/team-matt.png");


james.inject(list);
mohammad.inject(list);
michael.inject(list);
kenneth.inject(list);
matt.inject(list);