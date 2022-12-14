import styles from "../main/main.module.css";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NewList } from "../commonList/NewList";

export function NewShare(){
    return(
        <section>
            <article>
                <div className={styles.articleHead}>
                    <h2>오늘 업데이트 되었어요!</h2>
                    <div>
                        <p>
                            <Link to="" className={styles.articleLinkBtn}>
                                신규공간 보러가기
                            </Link>
                        </p>
                    </div>
                </div>
                <NewList />
            </article>
        </section>
    );
}