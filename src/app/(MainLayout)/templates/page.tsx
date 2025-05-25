'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Templates.module.scss';
import { Search } from 'lucide-react';
import BrowseBy from '@/app/(MainLayout)/templates/_components/BrowseBy/BrowseBy';
import { useCallback, useEffect, useState } from 'react';
import Pagination from '@/app/(MainLayout)/templates/_components/Pagination/Pagination';
import { templateResType } from '@/schemaValidations/templates.schema';
import { useSearchParams } from 'next/navigation';
import templateApiRequest from '@/HttpRequest/templateRequest';
import TemplateCard from '@/components/TemplateCard/TemplateCard';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Templates() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });
    const searchParams = useSearchParams();
    const sortBy = searchParams.get('sort');
    const [template, setTemplate] = useState<templateResType[]>([]);

    const httpRequest = useCallback(async () => {
        const result = await templateApiRequest.getAll({ sort: sortBy as string });
        setTemplate((result.payload as any).data);
    }, [sortBy]);

    useEffect(() => {
        httpRequest();
    }, [httpRequest]);

    return (
        <div className="container px-16" ref={ref}>
            <div className={cx('wrap')}>
                <div className={cx('head')}>
                    <h1 className={cx('title', `fade fade-up ${inView ? 'in-view' : ''}`)}>
                        A Linktree template to suit every brand and creator
                    </h1>
                    <p className={cx('desc', `fade fade-up delay-1 ${inView ? 'in-view' : ''}`)}>
                        Different Link Apps, integrations and visual styles can help you create a Linktree that looks and feels like you and
                        your brand. Explore our library of custom templates to grow and connect with your audience even more easily!
                    </p>
                </div>
                <div className={cx('body')}>
                    <div className="grid grid-cols-[18%_82%] gap-x-6">
                        <div className={cx('filter', `fade fade-left ${inView ? 'in-view' : ''}`)}>
                            <p className={cx('filter-title')}>Browse by</p>
                            <div className={cx('filter-content-wrap')}>
                                <BrowseBy />
                            </div>
                        </div>
                        <div className={cx('templates', `fade fade-right ${inView ? 'in-view' : ''}`)}>
                            <div className={cx('search')}>
                                <input placeholder="Search" className={cx('search-input')} />
                                <Search className={cx('search-btn')} size={20} />
                            </div>
                            <div className={cx('grid grid-cols-3 gap-x-6 gap-y-10')}>
                                {template.map((item) => (
                                    <TemplateCard key={item.id} data={item} />
                                ))}
                            </div>
                            <div className={cx('pagination-wrap')}>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Templates;
