import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { atomCart } from "../../utils/atom";
import styles from "./detail.module.css";

export const Detail = () => {
  const seq = useParams();
  const [product, setProduct]= useState([]);
  const [productLength, setProductLength] = useState(1);
  const [loading, setLoading]= useState(false);

  

  useEffect(()=>{
    if(seq){
      getProduct();
    }
  },[seq])

  const getProduct = async () => {
    setLoading(false);
    const {data} = await axios.get("/data/products.json");
    const arr = data.products.filter((item)=> item.id === Number(seq.id));
    setProduct(arr);
    setLoading(true);
  }


  const [atomCarts, setAtomCart] =  useRecoilState(atomCart);
  
  const fafa = () => {
    const newItem = atomCarts.map((item)=>({
      ...item,
      productCount : item.seq === Number(seq.id) ? item.productCount+productLength : item.productCount
    }))
    setAtomCart(newItem);
  }


  const handleCart = () => {
    const found = atomCarts.find((item)=> item.seq === product[0].id);
    const productInfo = {
      seq : product[0].id,
      name : product[0].name,
      provider : product[0].provider,
      price : product[0].price,
      productCount : productLength,
      image : product[0].image
    }
    if(found){
      fafa();
    }else{
      setAtomCart([...atomCarts, productInfo]);
    }
  }
  
  const handleProductMinus = () => {
    if(productLength <= 1){
      alert("1개는 필수입니다.")
      return;
    }
    setProductLength((prev)=> prev - 1);
  }
  
console.log(atomCarts);

  return (
    loading && (
      <>
        <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={product[0].image} alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{product[0].provider}</p>
            <p className={styles.product_name}>{product[0].name}</p>
            <span className={styles.price}>
              {product[0].price}
              <span className={styles.unit}>원</span>
            </span>
          </div>

          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.amount}>
            <img
              className={styles.minus}
              src="/images/icon-minus-line.svg"
              alt="minus"
              onClick={handleProductMinus}
            />

            <div className={styles.count}>
              <span>{productLength}</span>
            </div>

            <img
              className={styles.plus}
              src="/images/icon-plus-line.svg"
              alt="plus"
              onClick={()=>setProductLength((prev)=> prev + 1)}
            />
          </div>

          <div className={styles.line}></div>

          <div className={styles.sum}>
            <div>
              <span className={styles.sum_price}>총 상품 금액</span>
            </div>

            <div className={styles.total_info}>
              <span className={styles.total}>
                총 수량 <span className={styles.total_count}>{productLength}개</span>
              </span>
              <span className={styles.total_price}>
                {productLength * product[0].price}
                <span className={styles.total_unit}>원</span>
              </span>
            </div>
          </div>

          <div className={styles.btn}>
            <button className={styles.btn_buy}>바로 구매</button>
            <button className={styles.btn_cart} onClick={handleCart}>장바구니</button>
          </div>
        </section>
      </main>    
      </>
    )
  );
};
