import axios from "axios";


export async function getCategoryDatas() {
    const {data} = await axios.get("/data/category.json");
    return data.category;
}

export async function getStoreDatas() {
    const {data} = await axios.get("/data/store.json");
    return data.store;
}


export async function getShareDatas(type) {
    const {data} = await axios.get("/data/store.json");
    return data.store;
}