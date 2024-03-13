import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from "node-mocks-http";
describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', async () => {
    const response = await controller.sayHello('Amirull', 24)
    expect(response).toBe('Hello Amirull, umur anda 24')
    // expect(controller).toBeDefined();
  });

  it('should can get view', async () => {
    const response = httpMock.createResponse()
    controller.viewHello('AmirullAzmi', response)

    expect(response._getRenderView()).toBe('index.html')
    // expect(response._getRenderData()).toEqual({
    //   name: 'AmirullAzmi',
    //   title: 'Template Engine'
    // })
  })
});
