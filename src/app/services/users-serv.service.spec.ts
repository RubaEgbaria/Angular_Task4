import { TestBed } from '@angular/core/testing';
import { Users_servService } from './users-serv.service';
import {HttpClientModule} from '@angular/common/http';



describe('UsersServService', () => {
  let service: Users_servService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[HttpClientModule],

    });
    service = TestBed.inject(Users_servService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
