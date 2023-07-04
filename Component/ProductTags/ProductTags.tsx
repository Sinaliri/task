import Link from "next/link";
import styles from "./ProductTags.module.scss";
import Image from "next/image";
import angle from "../../assets/icons/angle.svg";

const ProductTags = (props: {
  ID: number;
  storeName: string;
  tags: string[];
}) => {
  const { ID, storeName, tags } = props;
  return (
    <div className={`${styles.ProductTags}`}>
      <div>
        <span style={{ color: "#878787" }}> 12345 </span>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          : کد کالا
        </span>
      </div>
      <div className={`${styles.storename}`}>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          : نام فروشگاه{" "}
        </span>
        <div className={`${styles.link}`}>
          <Link href="#"> </Link>
          <Image src={angle} alt="angle" /> مهرا شاپ{" "}
        </div>
      </div>
      <div>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          تگ ها:
        </span>
        {tags.map((item, index) => {
          return (
            <span
              key={index}
              style={{
                color: "#878787",
                borderBottom: "1px dotted #878787 ",
                margin: "0 5px",
              }}
            >
              {`${item} `}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTags;
