import styles from "./list.module.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { getShareDatas } from "../../api/api";




export function NewList({type}){
    const [datas,setData] = useState([]);
    const word = type;
    const {isLoading,data:ShereDatas} = useQuery(["shereDatas",word],()=>
        getShareDatas(word)
    );
        
    
    
    
    return(
        <>
            {
                isLoading ? (
                    <>
                        Loading...
                    </>
                ) : (
                    <ul className={styles.item_ul}>
                        {
                            ShereDatas.slice(0,20).map((item,i)=>(
                                <li key={i}>
                                    {
                                        item.items.slice(0,1).map((items,index)=> (
                                            <div key={index}>
                                                <img src={`${items.images[0]}`} width="100%"/>
                                                {items.name}
                                            </div>
                                        ))
                                    }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    );

}