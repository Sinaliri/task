import styles from "./Center.module.scss";
//img
import info from "../../assets/icons/info.svg";
import basket from "../../assets/icons/basket.svg";
import Image from "next/image";
import { useState } from "react";
const Center = () => {
  const [number, setNumber] = useState<number>(1);
  return (
    <div className={`${styles.Center}`}>
      <h3 className={`${styles.title}`}>
        عنوان محصول عنوان محصول عنوان محصول{" "}
      </h3>
      <div className={`${styles.rating} flex`}>
        <div className={`${styles.info} flex flex-nowrap`}>
          <span>کالای غیراصل</span>
          <Image src={info} alt="info" />
        </div>
        <div>rating</div>
      </div>
      <p className={`${styles.desc}`}>
        توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط
        به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح
        کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به
        محصول
      </p>
      <div className={`${styles.detail}`}>
        <h4>
          <span>چهل گیاه</span>: نوع عسل
        </h4>
        <h4>
          <span>صفر</span>:میزان قند
        </h4>
        <h4>
          <span>بیماران دیابتی</span>:مناسب برای
        </h4>
      </div>
      <div className={`${styles.orderSection} flex justify-between w-12`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.discount} flex`}>
            <span>۲۰%</span>
            <s>۴۶۰۰۰۰</s>
          </div>
          <div className={`${styles.price}`}>
            <div>تومان</div>
            <div>۴۶۰۰۰۰</div>
          </div>
          <button
            className={`${styles.addtobasket} flex justify-center items-center`}
          >
            <span className="mr-1">افزودن به سبد خرید</span>
            <Image src={basket} alt="basket" />
          </button>
        </div>
        <div className={`${styles.right}`}>
          <div
            className={`${styles.buttoncontainer} ms-5 flex justify-between items-center`}
          >
            <button className="mr-2.5">۱ لیتر</button>
            <button className="mr-2.5">۱.5 لیتر</button>
            <button className="mr-2.5">۲ لیتر</button>
          </div>
          <div className={`${styles.Counter}`}>
            <div
              className={`${styles.decrease} flex justify-center items-center `}
              style={
                number > 1
                  ? { backgroundColor: "#6B6B6B" }
                  : { backgroundColor: "#C4C6C2" }
              }
            >
              -
            </div>
            <div className={`${styles.number}`}>{number}</div>
            <div
              className={`${styles.increase} flex justify-center items-center  bg-[#6B6B6B]`}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
