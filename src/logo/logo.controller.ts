import { Controller, Get } from '@nestjs/common';
import { LogoService } from './logo.service';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get('generate')
  generateLogo(): Promise<string> {
    return this.logoService.generate();
  }
}
