import { useState } from 'react';
import {
    Pagination as PaginationUI,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationProps {
    totalPages: number;
    onPageChange?: (page: number) => void;
}

export default function Pagination({ totalPages, onPageChange }: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        setCurrentPage(page);
        if (onPageChange) onPageChange(page);
    };

    return (
        <PaginationUI>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changePage(currentPage - 1);
                        }}
                        disabled={currentPage === 1}
                    />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem key={i + 1}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === i + 1}
                            onClick={(e) => {
                                e.preventDefault();
                                changePage(i + 1);
                            }}
                        >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changePage(currentPage + 1);
                        }}
                        disabled={currentPage === totalPages}
                    />
                </PaginationItem>
            </PaginationContent>
        </PaginationUI>
    );
}
