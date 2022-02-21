import TextRenderer from './TextRenderer';
import { heading, blogHeading, blogParagraph } from '~/styles/typography';

// @ts-ignore - No type file available
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore - No type file available
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {
  blocks: any;
};

export default function Blocks({ blocks }: Props) {
  if (!blocks) {
    return <p>Nothing to see here...</p>;
  }

  const supportedBlocks = blocks?.filter((b: any) => b.type !== 'unsupported');

  const renderBlocks = supportedBlocks.map((b: any) => {
    switch (b.type) {
      case 'heading_1':
        return (
          <h1 key={b.id} className={heading}>
            {b.heading_1.text[0].text.content}
          </h1>
        );
      case 'heading_2':
        return (
          <h2 key={b.id} className={blogHeading}>
            {b.heading_2.text[0].text.content}
          </h2>
        );
      case 'heading_3':
        return (
          <h3 key={b.id} className={`${blogHeading} text-lg md:text-xl`}>
            {b.heading_3.text[0].text.content}
          </h3>
        );
      case 'paragraph':
        return <TextRenderer key={b.id} content={b.paragraph.text} />;
      case 'bulleted_list_item':
        return (
          <li key={b.id} className={`${blogParagraph} mb-0 px-4 list-outside	`}>
            {b.bulleted_list_item.text[0]?.text.content}
          </li>
        );
      case 'numbered_list_item':
        return (
          <li
            key={b.id}
            className={`${blogParagraph} mb-0 px-4 list-outside	 list-decimal`}
          >
            {b.numbered_list_item.text[0]?.text.content}
          </li>
        );
      case 'image':
        return (
          <img
            key={b.id}
            src={b.image.external.url}
            alt={b.image.caption[0]?.plain_text}
            className="mb-8 rounded-md shadow-primary"
          />
        );
      case 'video':
        return (
          <iframe
            key={b.id}
            src={b.video.external.url.replace('watch?v=', 'embed/')}
            allowFullScreen
            className="w-full aspect-video rounded-md shadow-primary mb-8"
          ></iframe>
        );
      case 'code':
        return (
          <div
            key={b.id}
            className="mb-8 rounded-md overflow-hidden shadow-primary"
          >
            <SyntaxHighlighter
              language={b.code.language}
              style={gradientDark}
              showLineNumbers
            >
              {b.code.text[0].text.content}
            </SyntaxHighlighter>
          </div>
        );
      default:
        return <span key={b.id}>Not supported</span>;
    }
  });

  return renderBlocks;
}