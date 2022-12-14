import { useRecoilState } from "recoil";
import styles from "./cart.module.css";
import { atomCart } from "../../utils/atom";

export function CartDetail({item}){
    const [atomCarts,setAtomCart] = useRecoilState(atomCart);

    
    const handleAdd = () => {
        console.log(`추가`);
        const newItem = atomCarts.map((product)=>({
            ...product,
            productCount : product.seq === item.seq ? product.productCount+1 : product.productCount
          }))
          setAtomCart(newItem);
    }

    const handleRemove = () => {
        console.log(`마이너스`);
        const newItem = atomCarts.map((product)=>({
            ...product,
            productCount : product.seq === item.seq ? product.productCount-1 : product.productCount
          }))
          setAtomCart(newItem);
    }
    

    return (
              <section className={styles.cart_product_list}>
                <input type="checkbox" />
                <div className={styles.cart_product_wrap}>
                  <div className={styles.cart_product_image}>
                    <img src={item.image} alt="product-img" />
                  </div>
    
                  <div className={styles.cart_product_info}>
                    <p className={styles.seller_store}>{item.name}</p>
                    <p className={styles.product_name}>{item.provider}</p>
                    <p className={styles.price}>{item.price * item.productCount}원</p>
                    <p className={styles.delivery}>택배배송 / 무료배송</p>
                  </div>
                </div>
    
                <div className={styles.cart_product_count}>
                  <img
                    className={styles.minus}
                    src="/images/icon-minus-line.svg"
                    alt="minus"
                    onClick={handleRemove}
                  />
    
                  <div className={styles.count}>
                    <span>{item.productCount}</span>
                  </div>
                  <img
                    className={styles.plus}
                    src="/images/icon-plus-line.svg"
                    alt="plus"
                    onClick={handleAdd}
                  />
                </div>
    
                <div className={styles.cart_product_price}>
                  <p className={styles.total_price}></p>
                  <button className={styles.btn_submit}>주문하기</button>
                </div>
    
                <div className={styles.product_remove}>
                  <img src="/images/icon-delete.svg" alt="delete" />
                </div>
              </section>
    );
}