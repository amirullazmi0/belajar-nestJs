import { Test, TestingModule } from '@nestjs/testing';
import { UserRapository } from './user-rapository';

describe('UserRapository', () => {
  let provider: UserRapository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRapository],
    }).compile();

    provider = module.get<UserRapository>(UserRapository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
