import { waits } from "@/lib/utils";

export async function  fetchSomething(){
    await waits(1000)
    // throw new Error('HOHOHOHO')
}


const asd = async ()=>{
    await waits(2000)
    return 'xxxxxxxxx'
}

const zxc = asd()