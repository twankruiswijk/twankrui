import { ReactNode } from 'react';
import { blogParagraph } from '~/styles/typography';

type Props = {
  content: any;
  plain?: boolean;
};

type annotations = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};

export default function TextRenderer({ content, plain }: Props) {
  if (content.length === 0) {
    return null;
  }

  const resolveTextDecoration = (annotations: annotations): string => {
    const { bold, code, italic, strikethrough, underline } = annotations;
    let annotationClasses: string[] = [];

    if (bold) annotationClasses.push('font-semibold');
    if (code) annotationClasses.push('font-mono');
    if (italic) annotationClasses.push('font-italic');
    if (strikethrough) annotationClasses.push('line-through');
    if (underline) annotationClasses.push('underline');

    return annotationClasses.join(' ');
  };

  if (content.length === 1) {
    const { annotations, text } = content[0];

    if (text.link) {
      return (
        <a
          href={text.link.url}
          className={`${resolveTextDecoration(
            annotations,
          )} underline opacity-70`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.content}
        </a>
      );
    }

    if (plain) {
      return (
        <span
          className={blogParagraph + ' ' + resolveTextDecoration(annotations)}
        >
          {text.content}
        </span>
      );
    }

    return (
      <p className={blogParagraph + ' ' + resolveTextDecoration(annotations)}>
        {text.content}
      </p>
    );
  }

  const renderSpans = content.map((value: any, index: number): ReactNode => {
    const { annotations, text } = value;

    if (text.link) {
      return (
        <a
          key={index}
          href={text.link.url}
          className={`${resolveTextDecoration(
            annotations,
          )} underline opacity-70`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.content}
        </a>
      );
    }

    return (
      <span key={index} className={resolveTextDecoration(annotations)}>
        {text.content}
      </span>
    );
  });

  if (plain) {
    return renderSpans;
  }

  return <p className={blogParagraph}>{renderSpans}</p>;
}
