# WidgetUI

React UI component library for AI interfaces.

## Installation

```bash
npm install @widget-ui/react
# or
yarn add @widget-ui/react
# or
pnpm add @widget-ui/react
```

## Setup

### Tailwind CSS Configuration

Add the library's Tailwind configuration to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/widgetui/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: require('widgetui/tailwind').theme.extend,
  },
  plugins: [],
};
```

Or import the CSS directly:

```css
@import 'widgetui/styles';
```

## Usage

### Button Component

```tsx
import { Button } from 'widgetui';

function App() {
  return (
    <Button 
      label="Submit" 
      color="primary" 
      variant="solid"
      size="lg"
      iconStart="check"
    />
  );
}
```

### Icons

```tsx
import { Icon } from 'widgetui';

function App() {
  return <Icon name="check" size="md" />;
}
```

## Components

- **Button** - Trigger actions with configurable style, size, and icons

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode with watch
npm run dev

# Type check
npm run type-check
```

## License

MIT

