import Image from "next/image";
import styles from "./Card.module.scss";
import fast from "../../../assets/icons/fast.svg";

const Card = (props: { text: string; subtext: string; img: string }) => {
  return (
    <div
      className={`${styles.card} flex py-4 items-center justify-center w-full `}
    >
      <div className={`${styles.detail} mr-5`}>
        <h5>{props.text}</h5>
        <span>{props.subtext}</span>
      </div>
      <div className={`${styles.img}`}>
        <Image src={props.img} alt="fast" />
      </div>
    </div>
  );
};

export default Card;
