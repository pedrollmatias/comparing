import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { MatTableDataSource } from '@angular/material/table';
import { ApiUserService } from 'src/app/core/api/api-user.service';
import { IUser } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  breadcrumb: IBreadcrumb = [{ label: 'Settings', isLink: true, path: '/settings' }];

  usersColumns: string[] = ['fullName', 'username', 'email', 'blocked'];
  usersDataSource: MatTableDataSource<IUser>;

  constructor(private userApi: ApiUserService) {}

  users: IUser[];

  mongodbMongooseTime: number;

  ngOnInit(): void {
    this.resetData();
    this.userApi.getUsers().subscribe((userRes) => {
      this.users = <IUser[]>userRes.res;
      this.mongodbMongooseTime = userRes.time;
      this.setDataSource(this.users);
    });
  }

  setDataSource(users: IUser[]): void {
    this.usersDataSource = new MatTableDataSource(users);
  }

  resetData(): void {
    this.mongodbMongooseTime = null;
    this.users = undefined;
  }

  refreshComponent(): void {
    this.ngOnInit();
  }
}
