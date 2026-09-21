export const Block_Head = ({
  title,
  subtitle,
  caption,
  headingLevel = 2,
  action,
}) => {
  const HeadingTag = `h${headingLevel}`;

  return (
    <div class="block--head">
      {subtitle  && (
        <div className={`block--head_subtitle`}>
          <p>{subtitle}</p>
        </div>
      )}

      <div className="block--head_title">
        <HeadingTag dangerouslySetInnerHTML={{ __html: title }}></HeadingTag>
      </div>

      {caption && (
        <div class="block--head_caption">
          {typeof caption === 'string' ? <p>{caption}</p> : caption}
        </div>
      )}
      {action && (
        <div className={'block--actions'}>{action}</div>
      )}

    </div>
  );
};
