import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be able to sayHello', () => {
    const response = service.sayHello('Amirull');
    expect(response).toBe('hello Amirull'); // Adjusted expectation
  });
});