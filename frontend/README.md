# LLM Picker Chrome Extension

A simple Chrome extension that helps users find the best Large Language Model (LLM) for their specific needs.

## Features

- Clean, intuitive UI
- Simple text input for describing your needs
- Recommends the most appropriate LLM based on your input
- Provides brief explanations for recommendations

## Development

This project is built with:
- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations

### Running locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building the extension

```bash
# Build the extension
npm run build
```

After building, the extension will be in the `dist` folder. You can load this as an unpacked extension in Chrome by:

1. Going to `chrome://extensions/`
2. Enabling "Developer mode"
3. Clicking "Load unpacked"
4. Selecting the `dist` directory

## Customization

To customize the extension:

- Edit the React components in the `src/components` directory
- Modify the LLM recommendation logic in `src/hooks/useLLMPicker.ts`
- Update styling using Tailwind classes