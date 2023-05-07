import styles from "./HomeSec3.module.css";
import ShowCard from "./ShowCard.js";

// const cardObj = [
//   { name: "Better Call Saul", alt: "better call saul image", src:"../../assets/images/showCards/betterCallSaul.png", link: "BCS"},
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
//   { name: "Better Call Saul", alt: "better call saul image", src: "../../assets/images/showCards/betterCallSaul.png", link: "BCS" },
// ]

export default function HomeSec3() {
  return(
    <>
      <section className={styles.container} id="shows">
        <h2 className={styles.title}>Shows</h2>
        <ShowCard/>
      </section>
    </>
  )
}