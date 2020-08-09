import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot(), CompanyModule],
})
export class AppModule {}
