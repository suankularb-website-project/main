
import subject from "@/config/course/subject.json";
import parse from "html-react-parser";
import '@fortawesome/fontawesome-free/css/all.min.css';

function foreign(subj: string) {
    if (subj == 'อ' || subj == 'จ' || subj == 'ญ' || subj == 'ฝ') {
        return 'ต';
    } else {
        return subj;
    }
}

function getSubj(subj: string) {
    let data: string = "กลุ่มสาระการเรียนรู้";
    switch(subj) {
        case 'ว':
            data = data.concat("วิทยาศาสตร์และเทคโนโลยี");
            break;
        case 'ค':
            data = data.concat("คณิตศาสตร์");
            break;
        case 'ต':
            data = data.concat("ภาษาต่างประเทศ");
            break;
        case 'ท':
            data = data.concat("ภาษาไทย");
            break;
        case 'ส':
            data = data.concat("สังคมศึกษา ศาสนาและวัฒนธรรม");
            break;
        case 'พ':
            data = data.concat("สุขศึกษาและพลศึกษา");
            break;
        case 'ศ':
            data = data.concat("ศิลปะ");
            break;
        case 'ง':
            data = data.concat("การงานอาชีพ");
            break;
        case 'I':
            return ("การศึกษาค้นคว้าและสร้างองค์ความรู้");
        case 'ก':
            return ("กิจกรรมพัฒนาผู้เรียน");
    }
    return data;
}

function makeTable() {
    let subj: string = "";
    let data: string = "";
    subject.map((item, index) => {
        if (item.term[0] == "2") {
            if (foreign(item.code[0]) != subj) {
                subj = foreign(item.code[0]);
                data = data.concat(`<tr><td colspan="5" style="text-align: center;">${getSubj(subj)}</td></tr>`);
            }
            data = data.concat(`<tr><td>${item.code}</td><td>${item.name}</td>`)
            if (subj == 'ก') {
                data = data.concat(`<td colspan="2">${item.class}</td><td style="text-align: center;"><i className="fas fa-save"></i></tr>`)
            } else {
                data = data.concat(`<td>${item.class}</td><td>${item.weight}</td><td style="text-align: center;"><i className="fas fa-save"></i></td></tr>`)
            }
            
        }
    });
    return parse(data);
}

export default function Course() {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-10 xxs:pt-0">
            <h1 className="text-3xl">ประมวลรายวิชา ภาคเรียนที่ 2 ปีการศึกษา 2566</h1>
            <table style={{border: "1px solid white", borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <th style={{width: "75px"}}>รหัสวิชา</th>
                        <th style={{width: "300px"}}>ชื่อวิชา</th>
                        <th style={{width: "150px"}}>ชั้นเรียน</th>
                        <th>นก.</th>
                        <th>ข้อมูล</th>
                    </tr>
                    {makeTable()}
                </tbody>
            </table>
        </main>
    )
}


