import { Controller, Post, Body } from '@nestjs/common';
import { LogoService } from './logo.service';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Post('generate')
  async generateLogo(
    @Body('brandName') brandName: string,
    @Body('industry') industry: string,
    @Body('theme') theme: string,
  ): Promise<string> {
    return this.logoService.generate(brandName, industry, theme);
  }
}
