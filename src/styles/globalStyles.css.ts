import { globalStyle } from '@vanilla-extract/css';

const bgColor = '#F4F5F7';
const gridColor = '#E3E4E6';

globalStyle('html', {
  backgroundImage: `
    repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px, transparent 1px, transparent 24px),
    repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px, transparent 1px, transparent 24px)
  `,
  backgroundSize: '24px 24px',
  backgroundColor: `${bgColor}`,
  margin: '24px',
  cursor: 'none',
});

globalStyle('body, body *', {
  color: '#252525',
});
