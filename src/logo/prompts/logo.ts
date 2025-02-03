export const generateLogoPrompt = (
  brandName: string,
  industry: string,
  theme: string,
) => `
Create a professional logo for my brand, "${brandName}". The brand operates in the ${industry} industry.

Requirements:
- The design should reflect the essence of the brand and align with its industry.
- Theme: ${theme}
- Keep the background strictly transparent (no background).
- Ensure the logo is modern, minimalistic, and visually appealing.
`;
