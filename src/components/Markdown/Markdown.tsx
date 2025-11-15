import React from 'react';
import type { MarkdownProps } from './Markdown.types';
import { cn } from '../../utils';

/**
 * Simple markdown renderer component
 * Note: For production use, consider using a proper markdown library like react-markdown
 */
export const Markdown: React.FC<MarkdownProps> = ({ content, className }) => {
  // Basic markdown parsing (very simple implementation)
  // In production, use a proper markdown library
  const parseMarkdown = (text: string) => {
    let html = text
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-primary-600 hover:underline">$1</a>')
      // Line breaks
      .replace(/\n/gim, '<br />');

    return html;
  };

  return (
    <div
      className={cn('prose prose-sm max-w-none', className)}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
};

Markdown.displayName = 'Markdown';

