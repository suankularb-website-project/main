import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";

export default function Contact() {

    return (
        <main className="flex flex-col items-center justify-between top-0 pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <iframe width={"100%"} height={300} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5856038339907!2d100.49621977423354!3d13.74352058664747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991b9e08e2dd%3A0x5158736cefddaf8f!2sSuankularb%20Wittayalai%20School!5e0!3m2!1sen!2sth!4v1697638403379!5m2!1sen!2sth" />
            </div>
        </main>
    )
}
