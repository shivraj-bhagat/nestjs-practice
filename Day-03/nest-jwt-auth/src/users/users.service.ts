import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findUser(data: any): Promise<User> {
    return this.userRepository.findOne(data);
  }
}
