import { Suspense } from "react"
import SomeAsync from "./some-async"
import { waits } from "@/lib/utils"

export default function TestPage2(){
    console.log('TEST PAGE 2')

    const fetchData = async () => {
        console.log('FETCH DATA xxxx')
        await waits(5000)
        return 'kjashdkasjhdas'
    }


    return (
        <div>
            <h1 className="m-4 text-xl">Test Page 2</h1>

            {/* Streaming data to client */}
            <Suspense fallback={<p>loading...</p>}>
                <SomeAsync dataPromise={fetchData()} />
            </Suspense>
        </div>
    )
}