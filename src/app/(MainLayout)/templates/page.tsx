import classNames from "classnames/bind";
import styles from "./Templates.module.scss";
import { templatesType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import { imgs } from "../../../../public/images";

const cx = classNames.bind(styles);

function Templates() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("head")}>
        <h1 className={cx("title")}>
          A Linktree template to suit every brand and creator
        </h1>
        <p className={cx("desc")}>
          Different Link Apps, integrations and visual styles can help you
          create a Linktree that looks and feels like you and your brand.
          Explore our library of custom templates to grow and connect with your
          audience even more easily!
        </p>
      </div>
      <div className={cx("body")}>
        <div className="grid grid-cols-[20%_80%] gap-x-6">
          <div className={cx("filter")}>
            <p className={cx("filter-title")}>Browse by</p>
            <div className="grid grid-cols-1 gap-2">
              {templatesType.map((item) => (
                <button key={item.id} className={cx("choice-btn")}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className={cx("templates")}>
            <div className={cx("search")}>
              <input placeholder="Search" className={cx("search-input")} />
              <Search className={cx("search-btn")} size={20} />
            </div>
            <div className={cx("grid grid-cols-2 gap-10")}>
              <div className={cx("template-item")}>
                <div className={cx("banner-wrap")}>
                  <Image
                    src={imgs.Cover}
                    alt="template"
                    className={cx("banner")}
                  />
                  <Image
                    src={imgs.ContactBanner}
                    alt="template"
                    className={cx("second-banner")}
                  />
                </div>
                <Button variant={"secondary"} className={cx("btn")}>
                  View Details <ArrowRight />
                </Button>
              </div>
              <div className={cx("template-item")}>
                <div className={cx("banner-wrap")}>
                  <Image
                    src={imgs.Cover}
                    alt="template"
                    className={cx("banner")}
                  />
                  <Image
                    src={imgs.ContactBanner}
                    alt="template"
                    className={cx("second-banner")}
                  />
                </div>
                <Button variant={"secondary"} className={cx("btn")}>
                  View Details <ArrowRight />
                </Button>
              </div>
              <div className={cx("template-item")}>
                <div className={cx("banner-wrap")}>
                  <Image
                    src={imgs.Cover}
                    alt="template"
                    className={cx("banner")}
                  />
                  <Image
                    src={imgs.ContactBanner}
                    alt="template"
                    className={cx("second-banner")}
                  />
                </div>
                <Button variant={"secondary"} className={cx("btn")}>
                  View Details <ArrowRight />
                </Button>
              </div>
              <div className={cx("template-item")}>
                <div className={cx("banner-wrap")}>
                  <Image
                    src={imgs.Cover}
                    alt="template"
                    className={cx("banner")}
                  />
                  <Image
                    src={imgs.ContactBanner}
                    alt="template"
                    className={cx("second-banner")}
                  />
                </div>
                <Button variant={"secondary"} className={cx("btn")}>
                  View Details <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Templates;
