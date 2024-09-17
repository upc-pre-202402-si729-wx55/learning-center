import { Injectable } from '@angular/core';
import {Course} from "../model/course.entity";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<Course> {

  constructor() {
    super();
    this.resourceEndpoint = '/courses';
  }
}
