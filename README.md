# TappCard Landing Page

This is the landing page for TappCard.io, showcasing the digital business card product.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Card Video Configuration

The card display in the hero section now uses a video with an image fallback:

1. **Video File**: Replace the placeholder at `/public/videos/card-animation.mp4` with your actual card animation video.

   - Recommended size: 1MB or less for optimal performance
   - Format: MP4
   - Dimensions: Should match the card aspect ratio (landscape orientation)

2. **Fallback Image**: Replace the placeholder at `/public/videos/card-fallback.png` with a static fallback image.
   - This image will be shown if the video fails to load
   - Should closely resemble the video's first frame

The video automatically plays, loops, and is muted for better user experience. If video loading fails, the fallback image will be displayed instead.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion
