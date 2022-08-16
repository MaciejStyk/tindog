class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `          
      <div class="dog-image" style="background-image: url(${avatar});">
        <h1>${name}, ${age}</h1>
        <p>${bio}</p>
      </div>`;
  }

  getLikeHtml() {
    document.getElementById("main").innerHTML += `
      <img
        src="./images/badge-like.png"
        alt="Like badge"
        class="badge"
      />`;
  }

  getNopeHtml() {
    document.getElementById("main").innerHTML += `
      <img
        src="./images/badge-nope.png"
        alt="Nope badge"
        class="badge"
      />`;
  }

  getWinnerHtml() {
    document.getElementById("main").innerHTML += `
      <span class="winner">❤️ Your favourite ❤️</span>`;
  }
}

export default Dog;
