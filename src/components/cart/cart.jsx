import { useRecoilState } from "recoil";
import { atomCart } from "../../utils/atom";
import styles from "./cart.module.css";
import { CartDetail } from "./CartDetail";

export const Cart = () => {
  //체크 박스를 눌렀을때 변수 state를 하나 생성한다.

  const [atomCarts,setAtomCart] = useRecoilState(atomCart);

  const totalPrice = atomCarts.map((item)=>{
    return item.price * item.productCount;
  })

  console.log(totalPrice);
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>

      {
        atomCarts.map((item) => (
          <CartDetail item={item}/>
        ))
      }
      
      <div className={styles.total}>
        <div className={styles.total_price}>
          <p className={styles.cart_product_total_price}>총 상품금액</p>
          <p className={styles.cart_product_price}>{
            totalPrice.reduce((a,b)=>{
              return (a+b);
            }) 
          }
          원</p>
        </div>
        <div className={styles.pay_minus}>
          <img src="/images/icon-minus-line.svg" alt="minus" />
        </div>
        <div className={styles.sale}>
          <p className={styles.cart_product_sale}>상품 할인</p>
          <p className={styles.cart_product_sale_price}>0원</p>
        </div>
        <div className={styles.pay_plus}>
          <img src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        <div className={styles.delivery}>
          <p className={styles.cart_product_delivery}>배송비</p>
          <p className={styles.cart_product_delivery_price}>0원</p>
        </div>

        <div className={styles.payment}>
          <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
          <p className={styles.cart_prouct_payment_price}>0</p>
        </div>
      </div>
    </>
  );
};
