import { Injectable } from '@nestjs/common';
import { LocationEntity } from './location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
    constructor(@InjectRepository(LocationEntity) public readonly locationRepository: Repository<LocationEntity>){
    }
}
