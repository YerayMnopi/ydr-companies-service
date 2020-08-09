import { Entity, ManyToMany} from 'typeorm'
import { CompanyEntity } from '../company.entity';
import { SlugeableEntity } from 'ydr-nest-common';

@Entity('categories')
export class CategoryEntity  extends SlugeableEntity {

    @ManyToMany(type => CompanyEntity, company => company.categories)
    companies: CompanyEntity[];
}
