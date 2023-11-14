import classes from "@/config/timetable/classes.json";

export function generateStaticParams() {
    return Object.values(classes).flat().map((item: any, index: any) => ({
        class: item
    }));
}

export default function TimetablePage({ params }: { params: { class: string } }) {
    return (
        <main>
            <p>{params.class}</p>
        </main>
    )
}