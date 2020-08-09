import { Entity, ManyToMany, JoinTable, Column, ManyToOne } from 'typeorm'
import { SlugeableEntity } from 'ydr-nest-common';
import { CategoryEntity } from './category/category.entity';
import { UserEntity } from './user/user.entity';
import { IsBoolean, IsUrl, IsNotEmpty } from 'class-validator';
import { LocationEntity } from './location/location.entity';

@Entity('companies')
export class CompanyEntity extends SlugeableEntity {
    @Column('varchar', { length: 255, unique: true, nullable: false })
    @IsNotEmpty()
    legalName: string;

    @Column('varchar', { length: 255, unique: true, nullable: false })
    @IsNotEmpty()
    identityCode: string;

    @Column('varchar', {length: 255, nullable: true })
    @IsUrl()
    url?: string;

    @Column('bool', {default: false})
    @IsBoolean()
    validated: boolean = false;

    @ManyToOne(type => LocationEntity)
    legalLocation: LocationEntity;

    @ManyToMany(type => CategoryEntity, category => category.companies)
    @JoinTable()
    categories: CategoryEntity[];

    @ManyToMany(type => UserEntity, user => user.companies)
    @JoinTable()
    users: UserEntity[];

    @ManyToMany(type => LocationEntity, location => location.companies)
    @JoinTable()
    locations: LocationEntity[];
}