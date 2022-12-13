const ID = "foundry-timey-wimey";

Hooks.on("init", () => {
  console.log(ID + " | Initiated Timey-Wimey Detector")
})

Hooks.on('updateWorldTime', () => {
  const data = {
    src: `modules/${ID}/assets/ding.ogg`,
    volume: 0.8,
    autoplay: true,
    loop: false,
  };
  AudioHelper.play(data, true);
});