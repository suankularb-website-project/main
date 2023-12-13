import Image from "next/image";
import Link from "next/link";
import b1 from "@/public/b1_66.png";
import b2 from "@/public/b2_66.png";
import b3 from "@/public/b3_66.png";
import b4 from "@/public/b4_66.jpeg";
import b5 from "@/public/b5_66.png";
import b6 from "@/public/b6_66.png";
import { Table, Divider, Col, List, Menu } from "antd";


export default function Structure() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h1 className="text-lg lg:text-2xl font-bold">อาคารสวนกุหลาบ (ตึกยาว)</h1>
                <Image src={b1} quality={100} alt="อาคาร 1"/>
                <p className="text-center">อาคารสวนกุหลาบ (ตึกยาว) เป็นอาคารเรียนหลังแรกของโรงเรียนสวนกุหลาบวิทยาลัยที่สร้างขึ้นใหม่ มีลักษณะเป็นสถาปัตกรรมที่มีความโดดเด่นและสง่างาม มีประวัติความเป็นมาที่มีคุณค่ายิ่งต่อสังคมไทย ชาวสวนกุหลาบทุกคนจึงมีความภาคภูมิใจ และถือว่าเป็นเอกลักษณ์ที่สำคัญอย่างหนึ่งของโรงเรียน</p>
                <p className="text-center">อาคารสวนกุหลาบ เริ่มสร้าง 8 ตุลาคม พ.ศ. 2453 เปิดใช้ 25 มิถุนายน พ.ศ. 2454 มีเพียงชั้นบนและล่าง ตึกยาวมีความยาว 198.35 เมตร กว้าง 11.35 เมตร เนื้อที่ตึกยาวทั้งหมด 1 ไร่ 1 งาน 60 ตารางวา เป็นอาคารทรงยุโรป 2 ชั้น ขนานไปกับถนนตรีเพชร หลังคามุงด้วยกระเบื้องลอนสีอิฐ ภายในกั้นเป็นห้อง ๆ เป็นห้องขนาด 15 เมตร คูณ 9 เมตร 1 ห้อง สลับกับห้องเล็ก 9 เมตร คูณ 7 เมตร 2 ห้อง ตลอดความยาวของตึก</p>
                <p className="text-center">อาคารหลังนี้ พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว โปรดให้เจ้าหน้าที่เขียนแบบ ซึ่งจะมีลวดลายมากกว่าในปัจจุบัน ซึ่งสร้างขึ้นในปี พ.ศ.2452 แล้วเสร็จในปี พ.ศ. 2453 พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัวได้เสร็จทอดพระเนตรทั้งๆ ที่ยังทรงพระประชวรอยู่ เมื่อการก่อสร้างแล้วเสร็จ เจ้าพระยาพระเสด็จสุเรนทราธิบดี เสนาบดีกระทรวงธรรมการ ได้เป็นผู้ทำพิธีเปิดตึกนี้ โรงเรียนสวนกุลาบได้ใช้ตึกนี้เป็นที่เล่าเรียนตลอดมา</p>
                <p className="text-center">ประวัติเดิมมีว่า วัดราชบูรณะจะสร้างตึกแถวเพื่อเก็บค่าเช่า ทางกระทรวงธรรมการจึงได้มีหนังสือกราบทูลพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู ่หัว โดยทูลขอพระราชทานที่ตรงท้ายวัดราชบูรณะและขอเช่าตึกแถวทั้งหมดแทนประชาชน โดยเก็บจากนักเรียนคนละบาท และตึกนั้นจะต้องยาวไปตามถนนและข้างหน้าทำเป็นหน้าต่าง ข้างหลังจะให้ทำเป็นเฉลียงทางเดิน ค่าเช่าให้วัดโดยกระทรวงธรรมการให้ค่าเช่าวัดเป็นเงินร้อยละ 7.5</p>
                <p className="text-center">ก่อนปี พ.ศ.2475 ได้มีการปรับปรุงต่อเติมตึกยาวในระยะที่มีการปรับปรุงถนนตรีเพชร เพื่อเตรียมฉลองครบรอบ 150 ปี กรุงเทพมหานคร มีห้องขนาดใหญ่ ( 15 x 9 เมตร ) และห้องขนาดเล็ก ( 9 x 7 เมตร ) 2 ห้อง สลับกันไปเช่นนี้ตลอดตึก บริเวณห้องเล็กๆ จะมีเฉลียงและมีประตูตามระเบียงหันออก ด้านถนนตรีเพชร ต่อมาได้ก่อผนังทางด้านถนนตรีเพชรโดยตลอดตามความยาวของตึก</p>
                <p className="text-center">ในระหว่างสงครามโลกครั้งที่ 2 พ.ศ.2488 อาคารถูกระเบิดเสียหายเป็นบางส่วน ได้มีการบูรณะซ่อมแซมให้คงสภาพเดิม และมีการบูรณะปฏิสังขรณ์อื่นๆ อีก เช่น เปลี่ยนพื้นระเบียงชั้นล่าง จากพื้นไม้เป็นพื้นหินขัด เปลี่ยนกระเบื้องหลังคาจากกระเบื่องสี่เหลี่ยมเป็นกระเบื้องลอน</p>
                <p className="text-center">ปัจจุบันอาคารหลังนี้ได้ขึ้นทะเบียนกรมศิลปากรเป็นโบราณสถานของชาติ ประกาศในราชกิจจานุเบกษา ฉบับพิเศษเล่ม 104 ตอนที่ 18 วันที่ 1 กุมภาพันธ์ 2530 (พื้นที่โบราณสถานประมาณ 3 ไร่ 1 งาน 6 ตารางวา) ซึ่งในปัจจุบันได้มีการบูรณะปรับปรุงซ่อมแซมอาคารหลังนี้ให้อยู่ในสภาพที่สมบูรณ์สวยงาม และใช้เป็นสถานที่ดำเนินการจัดสร้างพิพิธภัณฑ์การศึกษาแห่งชาติ และบางส่วนเป็นสถานที่เรียนของนักเรียน</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">การบูรณะตึกยาว</h1>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สุวรรณ จันสม</h2>
                <p className="text-center">บูรณะตึกยาวครั้งที่ 1</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สำเริง นิลประดิษฐ์</h2>
                <p className="text-center">บูรณะตึกยาวครั้งที่ 2</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สุทธิ เพ็งปาน</h2>
                <p className="text-center">กรมศิลปากรขึ้นทะเบียนเป็นมรดกชาติ</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สมหมาย วัฒนคีรี</h2>
                <p className="text-center">เสนอโครงร่างเพื่อของบประมาณบูรณะตึกยาวต่อคณะรัฐมนตรีได้งบประมาณ 130 ล้าน ทำการวิจัยตำนานสวนกุหลาบใน 12 ทศวรรษ และจัดงานราตรีนี้โปรยด้วยกลีบกุหลาบ</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ ธานี สมบูรณ์บูรณะ</h2>
                <p className="text-center">ใช้งบประมาณของการจัดงานราตรีนี้โปรดด้วยกลีบกุหลาบเป็นเงิน 4 ล้านบาท เพื่อนำไปสร้างห้องสำนักงาน ห้องรับรอง 2 ห้อง ห้องนำเสนอ 1 ห้อง เพื่อนำไปสู่การใช้งบประมาณ 130 ล้าน ที่จะมาบูรณะตึกยาว จึงเริ่มดำเนินการขึ้น และบูรณะตึกยาวสำเร็จ</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ ศิริ สุงคาสิทธิ์</h2>
                <p className="text-center">ฯพณฯ พลเอก เปรม ติณสูลานนท์ เปิดงานสมานมิตร สมานฉันท์รับขวัญตึกยาวในวันงานมีการจัดโต๊ะจีนและกิจกรรมเวที โดย ฯพณฯ พลเอก เปรม ติณสูลานนท์ เยี่ยมชมห้องเรียนบนตึกยาว ชั้น 2</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ ณรงค์ รักเดช</h2>
                <p className="text-center">ได้รับงบประมาณ 1 ล้านบาท จากรัฐมนตรีกระทรวงศึกษาธิการ เพื่อซื้อเครื่องเสียง บูรณะห้องนำเสนอ มีการใช้งบประมาณของสมาคม จัดตกแต่งห้องพิพิธภัณฑ์ขึ้นเป็นครั้งแรก 4 ห้อง ได้รับความร่วมมือจากกรมศิลปกร ในการดำเนินการตกแต่งเป็นที่ชื่นชมกับทุกฝ่ายโดยเฉพาะสมาคมศิษย์เก่าสวนกุหลาบวิทยาลัยในพระบรมราชูปถัมภ์ เริ่มมีบทบาทในการให้งบประมาณจากองทุนที่จัดงานราตรีนี้โปรยด้วยกลีบกุหลาบ ต่อมาจัดทำห้อง ฯพณฯ เปรม ติณสูลานนท์ กับห้อง 7 นายกรัฐมนตรี เนื่องในโอกาสที่ ฯพณฯ พลเอก เปรม ติณสูลานนท์ มีอายุ 80 ปี ใช้ชื่องานและชื่อห้องว่า ‘เกียรติยศ’ แต่งห้องเกียรติภูมิชาวสวนกุหลาบวิทยาลัย มีการจัดงานเนื่องในวันเกิดของ ฯพณฯ พลเอกเปรม ติณสูลานนท์ อย่างสมเกียรติ ในปีนี้จัดทำหนังสือ 7 นายกรัฐมนตรีแจกเป็นที่ระลึก</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สมพงษ์ รุจิรวรรธน์</h2>
                <p className="text-center">จัดงานสำคัญที่สุดคืองานฉลอง 120 ปีสวนกุหลาบวิทยาลัย เรียกว่างาน ‘ฉลองเกียรติ เฉลิมขวัญโรงเรียนหลวง 120 ปีสวนกุหลาบวิทยาลัย โดยมี ฯพณฯพลเอก เปรม ติณสูลานนท์ เป็นประธานเปิดงานที่ยิ่งใหญ่ ทั้งห้องพิพิธภัณฑ์สำเร็จเกือบตลอดตึกยาวชั้นล่างและงานมอบโล่เกียรติยศให้ศิษย์เก่าที่ทำคุณประโยชน์ต่อประเทศชาติ</p>
                <h2 className="text-xl font-bold">สมัยผู้อำนวยการ สิทธิรักษ์ จันทร์สว่าง</h2>
                <p className="text-center">โรงเรียนจัดงานฉลอง 127 ปี ทำพิธีเปิดห้องสัญลักษณ์และห้องจดหมายเหตุ เอกสารโบราณ โดยมี นายยงยุทธ สาระสมบัติ อุปนายกสมาคมศิษย์เก่าสวนกุหลาบฯเป็นประธานเปิดงาน</p>
                <h2 className="text-xl font-bold">ผู้อำนวยการ มนตรี แสนวิเศษ</h2>
                <p className="text-center">ในวาระที่ฯพณฯพลเอกสุรยุทธ์ จุลานนท์ ได้รับโปรดเกล้าฯให้เป็นนายกรัฐมนตรี สมาคมศิษย์เก่าสวนกุหลาบวิทยาลัยในพระบรมราชูปถัมภ์ จัดงานคืนสู่เหย้าชาวสวนฯ ในพิพิธภัณฑ์ได้มีการปรับปรุงบางส่วน อาทิเช่นการจัดบอร์ด ฯพณฯ พลเอก สุรยุทธ จุลานนท์</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารสามัคยาจารย์ (อาคาร 2)</h1>
                <Image src={b2} quality={100} alt="อาคาร 2"/>
                <p className="text-center">ปี พ.ศ.2502 ระบบการศึกษาเปลี่ยนไป มีการขยายตัวทางการศึกษามากขึ้น สามัคยาจารย์จึงคับแคบ รัฐบาลได้มีดำริจะสร้างคุรุสภาขึ้นใหม่ที่บริเวณ วังจันทรเกษม ปลัดกระทรวงศึกษาธิการ (นายนาค เทพหัสดิน ณ อยุธนา) ได้ติดต่อคุรุสภาขอรื้ออาคารสามัคยาจารย์หลังเก่า เพื่อขายอิฐหัก และกากปูนนำเงินมา เป็นทุนในการจัดสร้างอาคารเรียนหลังใหม่ และสร้างห้องสมุดของโรงเรียนสวนกุหลาบวิทยาลัย ซึ่งเป็นห้องสมุดที่ทันสมัยที่สุดในยุคนั้น โดย ม.ล.ปื่น มาลากุล รัฐมนตรีว่าการกระทรวงศึกษาธิการสมัยนั้น (ท่านเป็นศิษย์เก่าสวนกุหลาบวิทยาลัย)</p>
                <p className="text-center">ตึกสามัคยาจารย์เดิมเป็นที่สถานที่ตั้งของสามัคยาจารย์สมาคม ซึ่งย้ายมาจากโรงเรียนกล่อมวิทยา หรือโรงเรียนวัดพระเชตุพนที่ทำการชั่วคราว มาอยู่ที่โรงเรียน ทวีธาภิเษก และต่อมาที่วัดราชบูรณะ และมาอยู่ในบริเวณโรงเรียนสวนกุหลาบวิทยาลัยในเวลาต่อมา อาคารสามัคยาจารย์สร้างขึ้นเป็นที่ทำการสามัคยาจารย์สมาคม อันเป็นสำนักงานส่วนหนึ่งของการจัดการศึกษาของกระทรวงธรรมการ ที่เกี่ยวข้องกับการจัด นฌยบายการศึกษาของชาติ การฝึกอบรมเผยแพร่ความรู้ให้ครูอาจารย์ในการเพิ่มวุฒิ และการประชุมวางแผนการศึกษาแห่งชาติ นอกจากนี้ยังมีการก่อตั้งสมาคม สำหรับครู</p>
                <p className="text-center">อาจารย์ที่จะมาใช้เป็นสถานที่ค้นหาความรู้ เพราะชั้นล่างเป็นที่ประชุม ส่วนชั้นบนเป็นห้องสมุด ที่ทำการของข้าราชการกระทรวงธรรมการ จึงมีผู้ใหญ่ในกระทรวงมาเยี่ยมชม ประชุม และแสดงปาฐกถาอยู่เป็นประจำ การรื้ออาคารหลังนี้และสร้างอาคารเรียน 3 ชั้น ทำให้มีจำนวนห้องเรียนมากขึ้น และมีห้องสมุดที่ทันสมัย ต่อมาได้ต่อเติมเป็นอาคาร 4 ชั้น และใช้เป็นอาคารเรียนมาจนถึงปัจจุบัน</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารปิยมหาราชานุสรณ์ (อาคาร 3)</h1>
                <Image src={b3} quality={100} alt="อาคาร 3"/>
                <p className="text-center">ในปี 2525 เป็นปีที่โรงเรียนสวนกุหลาบวิทยาลัยมีอายุครบ 100 ปี อ.สำเริง นิลประดิษฐ์ ผู้อำนวยการขณะนั้น มีความคิดที่จะสร้างอนุสรณ์แห่งความระลึกถึง ในพระมหากรุณาธิคุณของพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว องค์พระผู้พระราชทานกำเนิดโรงเรียน อันได้แก่ พระบรมราชานุสาวรีย์ของพระองค์ท่าน และตึก 100 ปี สวนกุหลาบวิทยาลัย</p>
                <p className="text-center">การก่อสร้างครั้งนี้ บรรดาศิษย์เก่า ผู้ปกครองนักเรียน คณะครู-อาจารย์ และนักเรียน ได้ร่วมใจกันสละทุนทรัพย์จำนวนหนึ่งเป็นเงิน 2,5000,000 บาท สมทบ กับเงินงบประมาณแผ่นดินอีก 10,100,000 บาท ตึกหลังนี้สร้างขึ้นบริเวณตึกโรงพละเก่า รวมกับบริเวณสนามบาสเกตบอล ซึ่งใช้เป็นโรงอาคารชั่วคราว</p>
                <p className="text-center">ตึก 100 ปีสวนกุหลาบ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี เสด็จมาทรงวางศิลาฤกษ์เมื่อวันที่ 4 สิงหาคม 2525 เวลา 15.09 น. และเมื่อตึกนี้สร้างเสร็จ พระบาทสมเด็จพระเจ้าอยู่หัว พร้อมด้วยสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี เสด็จพระราชดำเนินมาทรงเปิดพระบรมราชานุสาวรีย์ พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัวที่ประดิษฐานอยู่หน้าตึก พร้อมทรงเปิดตึก 100 ปีสวนกุหลาบ ในวันที่ 30 กรกฎาคม 2527</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารศาลาพระเสด็จ (อาคาร 4)</h1>
                <Image src={b4} quality={100} alt="อาคาร 4"/>
                <p className="text-center">ในปี พ.ศ.2468 กระทรวงศึกษาธิการได้ทำอนุสาวรีย์อุทิศแด่เจ้าพระยาพระเสด็จฯ ให้แก่สามัคยาจารย์สมาคม ซึ่งตั้งอยู่ภายในบริเวณโรงเรียนสวนกุหลาบวิทยาลัย ได้จัดสร้างศาลาให้ชื่อว่า &quot;ศาลาพระเสด็จ&quot; ระหว่างกลางเรือนสโมสรกรีฑา และสโมสรบันเทิง ใช้เป็นที่ประชุมสนทนา เล่นกีฬาในร่มต่าง เป็นที่พักผ่อนของสมาชิกสามัคยาจารย์สมาคม</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารดำรงราชานุภาพ (อาคาร 5)</h1>
                <Image src={b5} quality={100} alt="อาคาร 5"/>
                <p className="text-center">สร้างขึ้นเมื่อปี 2521 เป็นอาคารเรียน 5 ชั้น ใต้ถุนโล่งเป็นพิเศษ  สร้างขึ้นเนื่องจากอาคารเรียนไม่เพียงพอ ต่อจำนวนนักเรียน ต่อมาได้มีการต่อเติมผนังชั้นล่างเป็นห้องๆ ใช้เป็นห้องพยาบาล ห้องแนะแนว ห้องโสตทัศนศึกษา ห้องกุหลาบเพชร ฯลฯ ส่วนด้านบน เป็นห้องเรียนสำหรับนักเรียนชั้น ม.2-3</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารสวนกุหลาบรำลึก (อาคาร 6)</h1>
                <Image src={b6} quality={100} alt="อาคาร 6"/>
                <p className="text-center">หอประชุมสวนกุหลาบรำลึกเดิมสร้างขึ้นในปี 2496 สมัยหลวงบุญาปาลิตเป็นอาจารย์ใหญ่ โดยอาจารย์เพิ้นย สมบัติเปี่ยม เป็นสถาปนิก ลักษณะรูปแบบหอประชุมสูง ยาวประมาณ 25 เมตร กว้างประมาณ 18 เมตร มีรูปแบบศิลปะคล้ายกับยุคโรมันเช่นเดียวกับอาคารสวนกุหลาบ ( ตึกยาว ) ด้านบนรอบๆ หอประชุมจะมีภาพนูนสูง แสดงด้านพุทธศึกษา จริยศึกษา พลศึกษา และศิลปศึกษา เช่น ภาพเด็กไหว้พระ เล่นกีฬา ทดลองวิทยาศาสตร์ บริเวณนี้เรียงเป็นช่องๆ ด้านหน้าจะมีเหล็กดัดรูปดอกไม้ รูปเด็กไหว้ครู - อาจารย์ หอประชุมนี้มีเวทีการแสดง และมีชั้นที่สองเหมือนโรงละครของเมืองนอก เวลามีการแสดง ครู-อาจารย์จะนั่งชมด้านบน</p>
                <p className="text-center">ในปี พ.ศ.2534 สมัยอาจารย์สุทธิ เพ็งปาน เป็นผู้อำนวยการ หอประชุมสวนกุหลาบรำลึกมีสภาพทรุดโทรม จึงได้มีการรื้อถอนเพื่อสร้างอาคารหอประชุมใหม่ เป็นอาคารที่เห็นในปัจจุบัน</p>
                <p className="text-center">อาคารหอประชุมสวนกุหลาบรำลึกหลังใหม่นี้เป็นอาคาร 6 ชั้น ชั้นล่างสุดเป็นชั้นใต้ดินใช้เป็นที่จอดรถ ชั้นอื่นๆ เป็นสำนักอำนวยการ ห้องประชุม ห้องเรียนวิชาคอมพิวเตอร์ ศูนย์ควบคุมเครือข่ายสารสนเทศ ด้านบนสุดเป็นหอประชุมจุได้ประมาณ 2,000 คน โดยได้รับงบประมาณแผ่นดินเป็นค่าก่อสร้างจำนวน 42 ล้านบาท</p>
                <p className="text-center">หอประชุมหลังนี้ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี เสด็จพระราชดำเนินทรงเป็นประธานประกอบพิธีวางศิลาฤกษ์ในวันที่ 30 กรกฎาคม 2535 และเสด็จพระราชดำเนินทรงเปิดอาคารในวันที่ 8 มีนาคม 2538</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคาร 123 ปีสวนกุหลาบวิทยาลัย</h1>
                <p className="text-center">อาคาร 123 ปีสวนกุหลาบวิทยาลัย ถูกสร้างขึ้นในเดือนพฤษภาคม ปี 2548 และเริ่มเปิดใช้อย่างเป็นทางการในวันที่ 9 พฤศจิกายน 2548 ชั้นล่างเป็นสนามกีฬาเล่นฟุตบอล หรือบาสเกสบอล ชั้นบนเป็นหอประชุม 123 ปี สำหรับจัดงานและประชุมนักเรียนระดับชั้นต่างๆ</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">สระว่ายน้ำ</h1>
                <p className="text-center">อยู่หลังตึกสามัคยาจารย์ด้านประตูจักรเพชร สร้างโดยสมาคมศิษย์เก่าสวนกุหลาบวิทยาลัย เป็นสระขนาด 11 x 25 เมตร 5 ลู่ สำหรับเรียนวิชาว่ายน้ำและออกกำลังกาย พร้อมสระเล็กขนาด 5 x 6 เมตร เปิดให้นักเรียน ผู้ปกครอง และบุคคลภายนอกเข้ามาใช้บริการเพื่อออกกำลังกายได้เวลา 16.00 - 20.00 น.</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">แฟลตภารโรง</h1>
                <p className="text-center">อาคารที่พักสำหรับคนงานภารโรง โรงเรียนสวนกุหลาบวิทยาลัย ซึ่งสร้างเป็นแฟลต 4 ชั้น 2 หลัง หันหน้าเข้าหากัน จำนวนห้องพัก 24 ห้อง สมัย อ.สุทธิ เพ็งปาน ในบริเวณบ้านพักเดิม ของคนงาน ส่วนหนึ่งที่อยู่ด้านติดกับเพาะช่าง งบประมาณที่ใช้ก่อสร้างเป็นเงินบริจาคของสมาคมผู้ปกครองและครู โรงเรียนสวนกุหลาบวิทยาลัย</p>
                <Divider />
                <h1 className="text-lg lg:text-2xl font-bold">อาคารหอพักนักกีฬา &quot;สุทธิ เพ็งปาน&quot;</h1>
                <p className="text-center">เป็นอาคาร 3 ชั้น หลังตึกสามัคยาจารย์ สร้างเมื่อ พ.ศ. 2534 โดยสมาคมผู้ปกครองและครูสวนกุหลาบวิทยาลัย ชั้นล่างเป็นห้องอาบน้ำ 10 ห้อง ห้องสุขา 20 ห้อง ชั้น 2-3 เป็นหอพักนักกีฬา และอาจารย์ผู้ควบคุม</p>
                <Divider />
            </div>
        </main>
    )
}
