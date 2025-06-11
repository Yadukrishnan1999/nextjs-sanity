import Link from "next/link";
import { Fragment } from "react";

type BreadCrumbProps = {
  items: Record<string, string>;
  className?: string;
};

const BreadCrumb = ({ items, className }: BreadCrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`px-5 lg:px-[50px] bg-[#E6E9FE] ${className}`}
    >
      <ol className="no-scrollbar  h-7 lg:h-9 flex items-center gap-1.5  whitespace-nowrap text-xs lg:text-sm leading-4 lg:leading-5">
        {Object.entries(items).map(([title, href], idx) => {
          const isLast = idx + 1 === Object.keys(items).length;
          return (
            <Fragment key={title + href}>
              <li>
                <Link
                  prefetch={false}
                  aria-current={isLast ? "page" : undefined}
                  className={`text-primary font-semibold ${isLast && "text-neutral-500 font-normal"}`}
                  href={href}
                >
                  {title}
                </Link>
              </li>
              {!isLast && <li className="text-primary">|</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
