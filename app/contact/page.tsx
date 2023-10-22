import Image from "next/image";
import Link from "next/link";
import { Card } from "antd";

export default function Contact() {

    return (
        <main className="flex flex-col items-center justify-between top-0 pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <iframe width={"100%"} height={300} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5856038339907!2d100.49621977423354!3d13.74352058664747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991b9e08e2dd%3A0x5158736cefddaf8f!2sSuankularb%20Wittayalai%20School!5e0!3m2!1sen!2sth!4v1697638403379!5m2!1sen!2sth" />
                <div className="flex flex-col items-start justify-start gap-2 pt-3">
                    <h1 className="text-2xl font-bold">ติดต่อ</h1>
                    <p className="text-lg font-normal text-start">โรงเรียนสวนกุหลาบวิทยาลัย 88 ถนนตรีเพชร แขวงวังบูรพาภิรมย์ เขตพระนคร กรุงเทพมหานคร 10200</p>
                    <p className="text-lg font-normal text-start">โทรศัพท์ 02-2216701, 02-2255605-8</p>
                    <p className="text-lg font-normal text-start">โทรสาร 02-2248554</p>
                    <p className="text-lg font-normal text-start">รหัสสถานศึกษา : 00100101</p>
                </div>
            </div>
        </main>
    )
}
