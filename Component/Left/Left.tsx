import Card from "./Card/Card";
import styles from "./Left.module.scss";
//img
import fast from "../../assets/icons/fast.svg";
import returning from "../../assets/icons/returning.svg";
import certificate from "../../assets/icons/certificate.svg";
import buy from "../../assets/icons/buy.svg";
import { Certificate } from "crypto";
import TestCard from "./TestCard/TestCard";
const Left = () => {
  const CardDetail = [
    {
      text: "ارسال سریع",
      subtext: "ارسال با پست ویژه (3 روزه)",
      img: fast,
    },
    {
      text: "مرجوعی تا 7 روز",
      subtext: "درصورت وجود مشکل در کالا",
      img: returning,
    },
    {
      text: "ضمانت 6 ماهه",
      subtext: "درصورت وجود مشکل در کالا",
      img: certificate,
    },
    {
      text: "امکان خرید حضوری",
      subtext: "پروفایل فروشگاه",
      img: buy,
    },
  ];
  return (
    <div className={`${styles.left} w-[300px] mx-auto`}>
      {CardDetail.map((item, index) => {
        return (
          <Card
            key={index}
            text={item.text}
            subtext={item.subtext}
            img={item.img}
          />
        );
      })}
      <TestCard />
    </div>
  );
};

export default Left;
