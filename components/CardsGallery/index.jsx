import Card from "@/components/Card";
import s from "./cards.module.css";

const CardsGallery = ({ list }) => {
  return (
    <ul className={s.gallery}>
      {list?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </ul>
  );
};

export default CardsGallery;
