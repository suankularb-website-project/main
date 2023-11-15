import departments from "@/config/departments.json";

export async function generateStaticParams() {
    return departments.map((item) => ({
        department: item.id
    }));
}

export default function Department( { params }: { params: { department: string }} ) {
    return (
        <main></main>
    )
}