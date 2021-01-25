import { Component, OnInit } from '@angular/core';
import { RoutesService } from 'src/app/services/api/authRoutes.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
  public branches: any;

  constructor(private api: RoutesService) {}

  ngOnInit(): void {
    this.api.Branch().subscribe((res) => {
      console.log(res);
      const ob = JSON.stringify(res);
      const obj = JSON.parse(ob);
      this.branches = obj;
    });
  }
}
