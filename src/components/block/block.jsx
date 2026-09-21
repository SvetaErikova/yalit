import clsx from 'clsx';

export const Block = ({ children, title, className, link, filter, pagination, selection, colorMode=''}) => {
  return (
    <section className={clsx("block", className,  colorMode? colorMode: null)}>
      <div className="block--wrapper">
        {title && title}

        {link && <div className="block--link">{link}</div>}

        {selection &&  selection }

        {filter && <div className="block--filter">{filter}</div>}

        {children && children}

        {pagination && pagination}
      </div>
    </section>
  )
}
