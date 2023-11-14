import TimetableForm from "@/components/timetableForm"

export default function TimetableLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-5 xxs:pt-0 min-h-[51vh]">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-2" id="content">
                <h3 className="text-lg font-bold">ค้นหาตารางเรียน</h3>
                <TimetableForm />
            </div>
            {children}
        </main>
    )
}