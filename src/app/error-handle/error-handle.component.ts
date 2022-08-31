import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.css']
})
export class ErrorHandleComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }

}
