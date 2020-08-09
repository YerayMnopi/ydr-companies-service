import { Entity, ManyToMany, Column} from 'typeorm'
import { CompanyEntity } from '../company.entity';
import { SlugeableEntity } from 'ydr-nest-common';
import { IsEnum, IsString, MinLength } from 'class-validator';
import { Country } from './country-code.enum';

@Entity('locations')
export class LocationEntity  extends SlugeableEntity {

    @Column('enum', {enum: Country, nullable: true})
    @IsEnum(Country)
    country: Country;

    @Column({ type: 'varchar', length: 255 })
    @IsString()
    @MinLength(2)
    city: string;

    @Column({ type: 'varchar', length: 255 })
    @IsString()
    @MinLength(2)
    address: string;

    @Column({ type: 'varchar', length: 255 })
    @IsString()
    @MinLength(2)
    postalCode: string;

    @ManyToMany(type => CompanyEntity, company => company.locations)
    companies: CompanyEntity[];
}
