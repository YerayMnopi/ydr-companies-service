import { Entity, ManyToMany, Column} from 'typeorm'
import { CompanyEntity } from '../company.entity';
import { SlugeableEntity } from 'ydr-nest-common';
import { Role } from './roles.enum';
import { IsEnum } from 'class-validator';

@Entity('users')
export class UserEntity  extends SlugeableEntity {

    @Column('enum', {enum: Role, default: Role.Consumer})
    @IsEnum(Role)
    role: Role;

    @ManyToMany(type => CompanyEntity, company => company.categories)
    companies: CompanyEntity[];
}
