// const handleSection = (direction) => {
//   console.log("handleSection = ", section);
//   const hero = document.getElementById("hero");
//   const about = document.getElementById("about");
//   const process = document.getElementById("process");
//   const recruiters = document.getElementById("recruiters");
//   const talent = document.getElementById("talent");
//   const experience = document.getElementById("experience");
//   const experienceCard = document.getElementById("experience-card");

//   if (direction === "up") {
//     switch (section) {
//       case "hero":
//         setSection("hero");
//         hero.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "about":
//         setSection("hero");
//         hero.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "process":
//         setSection("about");
//         about.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "recruiters":
//         setSection("process");
//         process.scrollIntoView({ block: "start", inline: "nearest" });
//         setTimeout(() => {
//           process.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 300);
//         break;
//       case "talent":
//         setSection("recruiters");
//         recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//         setTimeout(() => {
//           recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 100);
//         setTimeout(() => {
//           recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 200);
//         setTimeout(() => {
//           recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 300);
//       case "experience":
//         setSection("talent");
//         talent.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "experience-card":
//         setSection("experience");
//         experience.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "footer":
//         setSection("experience-card");
//         experienceCard.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       default:
//         console.log("fail");
//       // setSection("about");
//       // hero.scrollIntoView({ block: "start", inline: "nearest" });
//     }
//   } else {
//     switch (section) {
//       case "hero":
//         setSection("about");
//         about.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "about":
//         setSection("process");
//         process.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "process":
//         setSection("recruiters");
//         recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//         setTimeout(() => {
//           recruiters.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 300);
//         break;
//       case "recruiters":
//         setSection("talent");
//         talent.scrollIntoView({ block: "start", inline: "nearest" });
//         setTimeout(() => {
//           talent.scrollIntoView({ block: "start", inline: "nearest" });
//           console.log("click");
//         }, 300);
//         break;
//       case "talent":
//         setSection("experience");
//         experience.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "experience":
//         setSection("experience-card");
//         experienceCard.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "experience-card":
//         setSection("footer");
//         experienceCard.scrollIntoView({ block: "start", inline: "nearest" });
//         break;
//       case "footer":
//         setSection("footer");
//         window.scrollTo(0, document.body.scrollHeight);
//         break;
//       default:
//         console.log("fail");
//       // setSection("about");
//       // hero.scrollIntoView({ block: "start", inline: "nearest" });
//     }
//   }
// };

// const handleScroll = (e) => {
//   e.preventDefault();
//   if (e.wheelDelta < 0) {
//     handleSection("down");
//   } else {
//     handleSection("up");
//   }
// };
