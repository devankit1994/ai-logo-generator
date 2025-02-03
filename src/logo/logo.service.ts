import { Injectable } from '@nestjs/common';
import { Models } from './enums/logo.enum';
import Together from 'together-ai';
import { generateLogoPrompt } from './prompts/logo';

@Injectable()
export class LogoService {
  async generate(): Promise<string> {
    const LOGO_GENERATION_PROMPT = generateLogoPrompt(
      'Pure',
      'drinking water bottle manufacturing',
      'purity, hydration, and cleanliness',
    );

    const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });
    const response = await together.images.create({
      model: Models.BLACK_FOREST_LABS_FLUX_1_SCHNELL_FREE,
      prompt: LOGO_GENERATION_PROMPT,
      width: 512,
      height: 512,
      steps: 1,
      n: 1,
      response_format: 'url',
    });
    return response.data[0].url || 'Failed to generate the logo';
  }
}
