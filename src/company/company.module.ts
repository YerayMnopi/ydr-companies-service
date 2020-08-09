import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from './company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [TypeOrmModule.forFeature([ CompanyEntity ]), UserModule, CategoryModule, LocationModule],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
