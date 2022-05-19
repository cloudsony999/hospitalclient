import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Doctor } from 'model/doctor';
import { Observable } from 'rxjs-compat/observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.usersUrl);
  }

  public save(user: Doctor) {
    return this.http.post<Doctor>(this.usersUrl, user);
  }
}
