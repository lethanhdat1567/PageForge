'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import ReviewItem from '@/components/ReviewItem/ReviewItem';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

const cx = classNames.bind(styles);

function ReviewsContent({ templates }: { templates: any[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5; // Khai báo cố định page size ở đây
    const totalPages = Math.ceil(templates.length / pageSize);

    const currentReviews = templates.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        setCurrentPage(page);
    };

    return (
        <div className={cx('review-item-wrap')}>
            {currentReviews.map((review: any) => (
                <ReviewItem key={review.id} review={review} />
            ))}

            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) changePage(currentPage - 1);
                            }}
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
                                if (currentPage < totalPages) changePage(currentPage + 1);
                            }}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}

export default ReviewsContent;
