"use client"

import Image from "next/image";
import Link from "next/link";
import { Button, Card, Pagination, PaginationProps, Input, Divider } from "antd";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import news from "../../config/news.json";
const { Search } = Input;

export default function Home() {
    const router = useRouter();
    const searchParam = useSearchParams();
    let handlePageChange, handleSearch, startIndex, endIndex, filteredNews, currentNews;
    const [currentPage, setCurrentPage] = useState(searchParam.get("page") ? parseInt(searchParam.get("page") as string) : 1);
    const [searchQuery, setSearchQuery] =useState(searchParam.get("search") ? searchParam.get("search") as string : "");
    handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.location.replace(searchQuery == "" ? `/news?page=${page}` : `/news?page=${page}&search=${searchQuery}`);
    }
    handleSearch = (value: string) => {
        if (value == "") {
            return;
        }
        setSearchQuery(value);
        setCurrentPage(1);
        window.location.replace(`/news?search=${value}`)
    }
    startIndex = (currentPage - 1) * 12;
    endIndex = startIndex + 12;
    filteredNews = searchQuery == "" ? news : news.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    currentNews = filteredNews.slice(startIndex, endIndex)
    useEffect(() => {
        if (currentPage > Math.ceil(filteredNews.length / 12)) {
            window.location.replace(`/news?page=1`);
        }
    }, [router,  currentPage, filteredNews])
    return (
        <main className="flex flex-col items-center justify-between top-0 pt-5 xxs:pt-0">
            <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center justify-center py-10 px-10 gap-4" id="content">
                <div className="w-full flex flex-col xxs:flex-row mx-auto">
                    <h1 className="text-3xl font-bold text-start">ข่าวสาร</h1>
                    <div className="hidden xxs:block flex-1"></div>
                    <div className="flex-none w-full xxs:w-64">
                        <Search placeholder="ค้นหาข่าวสาร" className="flex-none" onSearch={handleSearch} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    {currentNews.length > 0 ? (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {currentNews.map((item, index) => (
                                <Link href={`/news/${item.id}`} key={item.id}>
                                    <Card
                                        hoverable
                                        className="w-full bg-transparent md:h-[21rem] lg:h-80"
                                        title={item.title}
                                        cover={<div className="md:h-[10.75rem] lg:h-40"><Image alt={item.title} src={item.cover} width={900} height={500} /></div>}
                                    >
                                        <p className="text-gray-500">{item.description}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">ไม่พบข่าวสารที่ค้นหา</p>
                    )}
                    <Pagination current={currentPage} total={filteredNews.length} pageSize={12} onChange={handlePageChange} />
                </div>
            </div>
        </main>
    )
}