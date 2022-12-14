import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { CategoryBanner } from "../categoryBanner/CategoryBanner";
import { Store } from "../store/Store";
import { NewShare } from "../newshare/NewShare";

export const Main = () => {
  return (
    <>
      <EventBanner />
      <CategoryBanner />
      <Store />
      <NewShare />


      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        <Product />
      </main>
    </>
  );
};
